import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const UpgradeToPremium = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUpgrade = () => {
    if (!user) {
      navigate("/auth");
    } else {
      // TODO: Implement Stripe checkout
      window.open("https://buy.stripe.com/your-payment-link", "_blank");
    }
  };

  const features = [
    "Todas as 30 frases de pronúncia básica / All 30 basic pronunciation phrases",
    "Acesso aos níveis Intermediário e Avançado / Intermediate and Advanced levels",
    "Todas as 8 categorias de vocabulário / All 8 vocabulary categories",
    "24 verbos importantes completos / 24 complete important verbs",
    "Todas as 26 letras do alfabeto / All 26 alphabet letters",
    "30 lições completas (Níveis 1, 2 e 3) / 30 complete lessons",
    "Todos os podcasts da Rádio / All Radio podcasts",
    "Mensagens ilimitadas no Virtual Coach / Unlimited Virtual Coach messages",
  ];

  return (
    <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          <Crown className="w-16 h-16 text-yellow-500" />
        </div>
        <CardTitle className="text-3xl font-fredoka">
          Upgrade para Premium
        </CardTitle>
        <CardDescription className="text-lg font-medium">
          Acesso ilimitado a todo o conteúdo!
          <br />
          Unlimited access to all content!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg text-center">
          <div className="text-5xl font-black text-primary mb-2">
            R$ 9,90
          </div>
          <div className="text-muted-foreground">
            por mês / per month
          </div>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={handleUpgrade}
          size="lg"
          className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold text-lg"
        >
          <Crown className="w-5 h-5 mr-2" />
          Assinar Premium / Subscribe Premium
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Cancele quando quiser • Cancel anytime
        </p>
      </CardContent>
    </Card>
  );
};
