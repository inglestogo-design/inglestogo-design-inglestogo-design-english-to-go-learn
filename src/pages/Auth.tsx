import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-final.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate("/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos / Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Senha deve ter no mínimo 6 caracteres / Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast.error("Email ou senha incorretos / Invalid email or password");
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success("Login realizado com sucesso! / Login successful!");
          navigate("/");
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes("already registered")) {
            toast.error("Email já cadastrado / Email already registered");
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success("Conta criada com sucesso! / Account created successfully!");
          navigate("/");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Erro inesperado / Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
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
                minLength={6}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
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
  );
};

export default Auth;
