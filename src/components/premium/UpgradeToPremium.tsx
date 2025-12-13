import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Check, Gift, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

export const UpgradeToPremium = () => {
  const navigate = useNavigate();
  const { user, isPremium, isInTrialPeriod, trialDaysRemaining } = useAuth();

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

  // Show trial status card if user is in trial period
  if (isInTrialPeriod && isPremium) {
    return (
      <Card className="border-2 border-green-500/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <Gift className="w-16 h-16 text-green-500" />
          </div>
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              🎉 PERÍODO DE TESTE GRÁTIS
            </span>
          </div>
          <CardTitle className="text-3xl font-fredoka text-green-700 dark:text-green-400">
            Você está no Trial!
          </CardTitle>
          <CardDescription className="text-lg font-medium">
            Aproveite acesso completo por 3 dias!
            <br />
            Enjoy full access for 3 days!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-8 h-8 text-green-600" />
              <div className="text-5xl font-black text-green-600">
                {trialDaysRemaining}
              </div>
            </div>
            <div className="text-muted-foreground mb-3">
              {trialDaysRemaining === 1 ? 'dia restante / day remaining' : 'dias restantes / days remaining'}
            </div>
            <div className="text-sm text-green-600 font-medium">
              ✅ Acesso Premium Ativo / Premium Access Active
            </div>
          </div>

          <div className="bg-green-100/50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-sm text-center text-green-800 dark:text-green-300 font-medium mb-2">
              🌟 Você tem acesso a TUDO durante o trial!
            </p>
            <p className="text-xs text-center text-green-700 dark:text-green-400">
              You have access to EVERYTHING during the trial!
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-green-200 dark:border-green-800 pt-4">
            <p className="text-sm text-center text-muted-foreground mb-4">
              Gostando do app? Assine para continuar após o trial!
              <br />
              <span className="text-xs">Enjoying the app? Subscribe to continue after the trial!</span>
            </p>
            <Button 
              onClick={handleUpgrade}
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold text-lg"
            >
              <Crown className="w-5 h-5 mr-2" />
              Assinar Agora / Subscribe Now
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Cancele quando quiser • Cancel anytime
          </p>
        </CardContent>
      </Card>
    );
  }

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
