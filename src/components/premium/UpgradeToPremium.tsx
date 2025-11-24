import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

export const UpgradeToPremium = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUpgrade = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("create-checkout");
      
      if (error) {
        console.error("Error creating checkout:", error);
        return;
      }

      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Error invoking checkout function:", error);
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
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            🔥 PROMOÇÃO ATÉ NOVEMBRO
          </span>
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
          <div className="text-muted-foreground mb-3">
            por mês / per month
          </div>
          <div className="text-sm text-muted-foreground/80 border-t border-muted-foreground/20 pt-3">
            <span className="line-through text-muted-foreground/60">R$ 19,90</span>
            <span className="ml-2 text-green-600 font-semibold">50% OFF</span>
            <div className="mt-1 text-xs">
              Preço regular a partir de dezembro
              <br />
              Regular price from December
            </div>
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
