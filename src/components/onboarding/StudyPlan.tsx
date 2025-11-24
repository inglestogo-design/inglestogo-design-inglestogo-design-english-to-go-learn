import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Target, TrendingUp, BookOpen, Mic, MessageCircle } from "lucide-react";

interface StudyPlanProps {
  userLevel: string;
  motivation: string;
  difficulties: string[];
  onStart: () => void;
}

export const StudyPlan = ({ userLevel, motivation, difficulties, onStart }: StudyPlanProps) => {
  const getLevelMessage = () => {
    switch (userLevel) {
      case "iniciante":
        return {
          title: "Nível Iniciante / Beginner Level 🌱",
          description: "Você está começando sua jornada no inglês! Vamos construir uma base sólida.",
          color: "from-green-500 to-emerald-600"
        };
      case "basico":
        return {
          title: "Nível Básico / Basic Level 📚",
          description: "Você já tem algum conhecimento! Vamos expandir seu vocabulário e confiança.",
          color: "from-blue-500 to-cyan-600"
        };
      case "intermediario":
        return {
          title: "Nível Intermediário / Intermediate Level 🚀",
          description: "Ótimo progresso! Vamos aprimorar sua fluência e naturalidade.",
          color: "from-purple-500 to-pink-600"
        };
      case "avancado":
        return {
          title: "Nível Avançado / Advanced Level ⭐",
          description: "Excelente! Vamos refinar seus conhecimentos e alcançar a maestria.",
          color: "from-orange-500 to-red-600"
        };
      default:
        return {
          title: "Seu Nível / Your Level",
          description: "Vamos começar sua jornada!",
          color: "from-primary to-secondary"
        };
    }
  };

  const getMotivationPlan = () => {
    const plans: Record<string, string[]> = {
      viagem: [
        "Frases essenciais para aeroportos e hotéis",
        "Vocabulário de viagem e turismo",
        "Pedindo direções e informações",
        "Situações de emergência"
      ],
      trabalho: [
        "Vocabulário de negócios",
        "E-mails e comunicação profissional",
        "Reuniões e apresentações",
        "Networking e networking"
      ],
      lazer: [
        "Conversação casual do dia a dia",
        "Expressões idiomáticas",
        "Cultura pop e entretenimento",
        "Redes sociais em inglês"
      ],
      estudos: [
        "Vocabulário acadêmico",
        "Leitura e compreensão de textos",
        "Escrita formal e essays",
        "Apresentações acadêmicas"
      ],
      crescimento: [
        "Gramática avançada",
        "Pronúncia e redução de sotaque",
        "Conversação fluente",
        "Pensamento em inglês"
      ]
    };
    return plans[motivation] || plans.crescimento;
  };

  const getDifficultyFocus = () => {
    const focus: Record<string, { icon: any; label: string; description: string }> = {
      pronuncia: {
        icon: Mic,
        label: "Pronúncia / Pronunciation",
        description: "Prática intensiva com feedback de áudio"
      },
      vocabulario: {
        icon: BookOpen,
        label: "Vocabulário / Vocabulary",
        description: "Expansão diária com contexto real"
      },
      escrita: {
        icon: MessageCircle,
        label: "Escrita / Writing",
        description: "Exercícios práticos de composição"
      },
      falar: {
        icon: MessageCircle,
        label: "Conversação / Speaking",
        description: "Coach virtual para prática diária"
      },
      entender: {
        icon: BookOpen,
        label: "Compreensão / Listening",
        description: "Áudios e podcasts graduados"
      }
    };
    return difficulties.map(d => focus[d]).filter(Boolean);
  };

  const levelInfo = getLevelMessage();
  const motivationPlan = getMotivationPlan();
  const difficultyFocus = getDifficultyFocus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* Level Card */}
        <Card className="shadow-2xl border-2">
          <CardHeader className="text-center pb-4">
            <div className={`inline-block bg-gradient-to-r ${levelInfo.color} text-white px-6 py-3 rounded-full mb-4 font-bold text-lg`}>
              {levelInfo.title}
            </div>
            <CardDescription className="text-lg text-foreground">
              {levelInfo.description}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Study Plan Card */}
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-fredoka">
              <Target className="w-7 h-7 text-primary" />
              Seu Plano de Estudos Personalizado / Your Personalized Study Plan
            </CardTitle>
            <CardDescription className="text-base">
              Com apenas <span className="font-bold text-primary">15 minutos por dia</span>, você vai avançar no inglês! ⏰
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Focus Areas */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Áreas de Foco / Focus Areas:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {motivationPlan.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Focus */}
            {difficultyFocus.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Vamos Trabalhar Suas Dificuldades / We'll Work On Your Challenges:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {difficultyFocus.map((focus, index) => {
                    const Icon = focus.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium">{focus.label}</div>
                          <div className="text-sm text-muted-foreground">{focus.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Daily Routine */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary/20">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Rotina Diária Sugerida / Suggested Daily Routine:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>5 min - Vocabulário novo (flashcards) / New vocabulary (flashcards)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>5 min - Prática de pronúncia / Pronunciation practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>5 min - Lição ou exercício / Lesson or exercise</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <Button 
                size="lg"
                onClick={onStart}
                className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Target className="w-5 h-5 mr-2" />
                Começar Agora / Start Now! 🚀
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Você pode ajustar seu plano a qualquer momento nas configurações
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
