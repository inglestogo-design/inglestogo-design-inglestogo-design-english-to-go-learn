import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-final.png";
import { z } from "zod";
import { SidebarProvider } from "@/components/ui/sidebar";

const authSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Formato de email inválido / Invalid email format" })
    .max(255),
  password: z.string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres / Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "A senha deve conter uma letra maiúscula / Password must contain an uppercase letter" })
    .regex(/[a-z]/, { message: "A senha deve conter uma letra minúscula / Password must contain a lowercase letter" })
    .regex(/[0-9]/, { message: "A senha deve conter um número / Password must contain a number" })
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<Date | null>(null);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate("/app");
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
        const { error } = await signUp(email, password);
        if (error) {
          toast.error("Erro ao criar conta. Tente novamente / Error creating account. Please try again.");
        } else {
          toast.success("Conta criada com sucesso! / Account created successfully!");
          navigate("/app");
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
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="absolute top-4 left-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar / Back
          </Button>
          
          <img 
            src={logo} 
            alt="Inglês To Go" 
            className="h-16 w-auto mx-auto"
          />
          
          <CardTitle className="text-2xl font-fredoka">
            {isLogin ? "Entrar / Login" : "Criar Conta / Sign Up"}
          </CardTitle>
          <CardDescription>
            {isLogin 
              ? "Entre para acessar seu conteúdo / Sign in to access your content"
              : "Crie sua conta gratuitamente / Create your free account"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Senha / Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              {!isLogin && (
                <p className="text-xs text-muted-foreground">
                  Mínimo 8 caracteres, com maiúscula, minúscula e número / 
                  Min 8 characters with uppercase, lowercase and number
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || (lockoutUntil !== null && new Date() < lockoutUntil)}
            >
              {loading 
                ? "Aguarde... / Wait..." 
                : isLogin 
                  ? "Entrar / Login" 
                  : "Criar Conta / Sign Up"
              }
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Não tem conta? /{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Criar agora / Sign up
                </button>
              </>
            ) : (
              <>
                Já tem conta? /{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-primary hover:underline font-medium"
                >
                  Fazer login / Login
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarProvider>
  );
};

export default Auth;
