import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Check, Sparkles } from "lucide-react";

export const UpgradeToPremium = () => {
  const features = [
    "Todas as 30 frases de pronúncia / All 30 pronunciation phrases",
    "Níveis Básico, Intermediário e Avançado / Basic, Intermediate and Advanced levels",
    "Todas as categorias de vocabulário / All vocabulary categories",
    "24 verbos importantes completos / 24 complete important verbs",
    "Todas as 26 letras do alfabeto / All 26 alphabet letters",
    "30 lições completas (Níveis 1, 2 e 3) / 30 complete lessons",
    "Mensagens ilimitadas no Virtual Coach / Unlimited Virtual Coach messages",
    "Curso Au Pair completo / Complete Au Pair course",
    "Preparação para Cidadania N-400 / Citizenship N-400 prep",
    "Curso TOEFL 360° / TOEFL 360° course",
  ];

  return (
    <Card className="border-2 border-green-500/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          <Gift className="w-16 h-16 text-green-500" />
        </div>
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            🎉 100% GRATUITO / 100% FREE
          </span>
        </div>
        <CardTitle className="text-3xl font-fredoka text-green-700 dark:text-green-400">
          Acesso Completo!
        </CardTitle>
        <CardDescription className="text-lg font-medium">
          Aproveite todo o conteúdo gratuitamente!
          <br />
          Enjoy all content for free!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-xl font-bold text-green-600 mb-2">
            ✅ Acesso Total Liberado
          </div>
          <div className="text-sm text-muted-foreground">
            Full Access Unlocked
          </div>
        </div>

        <div className="bg-green-100/50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="text-sm text-center text-green-800 dark:text-green-300 font-medium mb-2">
            🌟 Você tem acesso a TODO o conteúdo!
          </p>
          <p className="text-xs text-center text-green-700 dark:text-green-400">
            You have access to ALL content!
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

        <p className="text-xs text-center text-muted-foreground">
          Aprenda inglês sem limites • Learn English without limits
        </p>
      </CardContent>
    </Card>
  );
};
