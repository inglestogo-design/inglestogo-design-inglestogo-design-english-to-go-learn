import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/english-to-go-logo.png";
import { z } from "zod";
import { SidebarProvider } from "@/components/ui/sidebar";

const authSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Formato de email inválido / Invalid email format" })
    .max(255),
  password: z.string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres / Password must be at least 8 characters" })
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<Date | null>(null);
  const { signIn, signUp, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in - use useEffect to avoid render issues
  useEffect(() => {
    if (!authLoading && user) {
      navigate("/app", { replace: true });
    }
  }, [user, authLoading, navigate]);

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // If user is logged in, show nothing while redirecting
  if (user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for account lockout
    if (lockoutUntil && new Date() < lockoutUntil) {
      const minutesLeft = Math.ceil((lockoutUntil.getTime() - Date.now()) / 60000);
      toast.error(
        `Conta bloqueada. Tente novamente em ${minutesLeft} minutos / Account locked. Try again in ${minutesLeft} minutes.`
      );
      return;
    }

    // Validate inputs
    try {
      authSchema.parse({ email, password });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
        return;
      }
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          // Increment login attempts on error
          const newAttempts = loginAttempts + 1;
          setLoginAttempts(newAttempts);
          
          if (newAttempts >= 5) {
            const lockoutTime = new Date(Date.now() + 5 * 60 * 1000);
            setLockoutUntil(lockoutTime);
            toast.error(
              "Muitas tentativas falhadas. Bloqueado por 5 minutos / Too many failed attempts. Locked for 5 minutes."
            );
          } else {
            toast.error(
              `Credenciais inválidas. Tentativa ${newAttempts} de 5 / Invalid credentials. Attempt ${newAttempts} of 5.`
            );
          }
        } else {
          toast.success("Login realizado com sucesso! / Login successful!");
          setLoginAttempts(0); // Reset on successful login
          navigate("/app");
        }
      } else {
        console.log('📝 Attempting signup with:', email);
        const { data, error } = await signUp(email.trim(), password);
        console.log('📝 Signup result:', { hasData: !!data, hasError: !!error, userId: data?.user?.id });
        
        if (error) {
          // Handle specific signup errors with detailed messages
          let errorMessage = "Erro ao criar conta. Tente novamente. / Error creating account. Please try again.";
          
          const errorText = error.message?.toLowerCase() || '';
          
          if (errorText.includes("already registered") || errorText.includes("user already registered")) {
            errorMessage = "Este email já está cadastrado. Tente fazer login. / This email is already registered. Try logging in.";
          } else if (errorText.includes("password")) {
            errorMessage = "Senha inválida. Use no mínimo 8 caracteres com maiúscula, minúscula e número. / Invalid password. Use at least 8 characters with uppercase, lowercase and number.";
          } else if (errorText.includes("email") && errorText.includes("invalid")) {
            errorMessage = "Email inválido. Verifique o formato. / Invalid email. Check the format.";
          } else if (errorText.includes("network") || errorText.includes("fetch")) {
            errorMessage = "Erro de conexão. Verifique sua internet. / Connection error. Check your internet.";
          } else if (errorText.includes("rate limit") || errorText.includes("too many")) {
            errorMessage = "Muitas tentativas. Aguarde alguns minutos. / Too many attempts. Wait a few minutes.";
          } else if (errorText.includes("signup") && errorText.includes("disabled")) {
            errorMessage = "Cadastro temporariamente indisponível. / Signup temporarily unavailable.";
          }
          
          console.error("Signup error details:", error.message);
          toast.error(errorMessage);
        } else if (data?.user) {
          console.log('✅ Account created successfully, user:', data.user.id);
          toast.success("Conta criada com sucesso! Bem-vindo! / Account created successfully! Welcome!");
          // Small delay to ensure profile is created
          await new Promise(resolve => setTimeout(resolve, 500));
          navigate("/app");
        } else {
          // Handle edge case where no error but also no user
          console.error("Signup: No user returned and no error");
          toast.error("Erro inesperado ao criar conta. Tente novamente. / Unexpected error creating account. Please try again.");
        }
      }
    } catch (error: any) {
      toast.error("Erro inesperado. Tente novamente / Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4 md:p-8">
        {/* Back button - positioned fixed for iPad */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="fixed top-4 left-4 z-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar / Back
        </Button>

        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader className="text-center space-y-4 pt-8">
            <img 
              src={logo} 
              alt="English To Go" 
              className="h-20 md:h-24 w-auto mx-auto mb-2"
            />
            
            <CardTitle className="text-xl md:text-2xl font-fredoka">
              {isLogin ? "Entrar / Login" : "Criar Conta / Sign Up"}
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              {isLogin 
                ? "Entre para acessar seu conteúdo / Sign in to access your content"
                : "Crie sua conta gratuitamente / Create your free account"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-6 md:px-8 pb-8">
            {/* Primary mode switch (more visible) */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <Button
                type="button"
                variant={isLogin ? "default" : "outline"}
                className="h-11"
                onClick={() => setIsLogin(true)}
              >
                Entrar / Login
              </Button>
              <Button
                type="button"
                variant={!isLogin ? "default" : "outline"}
                className="h-11"
                onClick={() => setIsLogin(false)}
              >
                Criar conta / Sign up
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 md:h-12 text-base"
                  autoCapitalize="none"
                  autoCorrect="off"
                  inputMode="email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Senha / Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="h-11 md:h-12 text-base"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
                {!isLogin && (
                  <p className="text-xs text-muted-foreground">
                    Mínimo 8 caracteres, com maiúscula, minúscula e número / Min 8 characters with uppercase, lowercase and number
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-11 md:h-12 text-base mt-2"
                disabled={loading || (lockoutUntil !== null && new Date() < lockoutUntil)}
              >
                {loading ? "Aguarde... / Wait..." : isLogin ? "Entrar / Login" : "Criar Conta / Sign Up"}
              </Button>
            </form>

            {/* Secondary text (kept, but larger and clearer) */}
            <div className="mt-6 text-center text-base">
              {isLogin ? (
                <span>
                  Não tem conta? / {" "}
                  <button onClick={() => setIsLogin(false)} className="text-primary hover:underline font-semibold">
                    Criar agora / Sign up
                  </button>
                </span>
              ) : (
                <span>
                  Já tem conta? / {" "}
                  <button onClick={() => setIsLogin(true)} className="text-primary hover:underline font-semibold">
                    Fazer login / Login
                  </button>
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  );
};

export default Auth;
