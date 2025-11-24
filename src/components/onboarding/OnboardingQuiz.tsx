import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Sparkles, Target, TrendingUp } from "lucide-react";

interface QuizAnswers {
  age_range: string;
  interests: string[];
  english_level: string;
  motivation: string;
  personal_preference: string;
  topics_interest: string[];
  main_difficulties: string[];
}

interface OnboardingQuizProps {
  onComplete: () => void;
}

export const OnboardingQuiz = ({ onComplete }: OnboardingQuizProps) => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    age_range: "",
    interests: [],
    english_level: "",
    motivation: "",
    personal_preference: "",
    topics_interest: [],
    main_difficulties: [],
  });

  const totalSteps = 7;

  const ageRanges = ["13-17", "18-25", "26-35", "36-45", "46-55", "56+"];
  
  const interestOptions = [
    "Viagens / Travel",
    "Negócios / Business",
    "Tecnologia / Technology",
    "Música / Music",
    "Filmes e Séries / Movies & Series",
    "Esportes / Sports",
    "Cultura / Culture",
    "Gastronomia / Food",
  ];

  const englishLevels = [
    { value: "iniciante", label: "Iniciante / Beginner - Não sei quase nada" },
    { value: "basico", label: "Básico / Basic - Sei algumas palavras e frases" },
    { value: "intermediario", label: "Intermediário / Intermediate - Consigo me comunicar em situações simples" },
    { value: "avancado", label: "Avançado / Advanced - Falo com fluência" },
  ];

  const motivations = [
    { value: "viagem", label: "Viagem / Travel ✈️", emoji: "✈️" },
    { value: "trabalho", label: "Trabalho / Work 💼", emoji: "💼" },
    { value: "lazer", label: "Lazer / Leisure 🎮", emoji: "🎮" },
    { value: "estudos", label: "Estudos / Studies 📚", emoji: "📚" },
    { value: "crescimento", label: "Crescimento Pessoal / Personal Growth 🌱", emoji: "🌱" },
  ];

  const preferences = [
    { value: "praia", label: "Praia / Beach 🏖️", emoji: "🏖️" },
    { value: "fazenda", label: "Fazenda / Farm 🌾", emoji: "🌾" },
  ];

  const topicsOptions = [
    "Conversação Diária / Daily Conversation",
    "Viagens / Travel",
    "Negócios / Business",
    "Gramática / Grammar",
    "Vocabulário / Vocabulary",
    "Pronúncia / Pronunciation",
    "Escrita / Writing",
    "Compreensão / Listening",
  ];

  const difficultiesOptions = [
    { value: "pronuncia", label: "Pronúncia / Pronunciation 🗣️" },
    { value: "vocabulario", label: "Vocabulário / Vocabulary 📖" },
    { value: "escrita", label: "Escrita / Writing ✍️" },
    { value: "falar", label: "Falar / Speaking 💬" },
    { value: "entender", label: "Entender / Listening 👂" },
  ];

  const handleArrayToggle = (field: keyof QuizAnswers, value: string) => {
    const currentArray = answers[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    setAnswers({ ...answers, [field]: newArray });
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Erro ao salvar. Por favor, faça login novamente.");
      return;
    }

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          onboarding_completed: true,
          age_range: answers.age_range,
          interests: answers.interests,
          english_level: answers.english_level,
          motivation: answers.motivation,
          personal_preference: answers.personal_preference,
          topics_interest: answers.topics_interest,
          main_difficulties: answers.main_difficulties,
        })
        .eq("id", user.id);

      if (error) throw error;

      toast.success("Quiz concluído! Bem-vindo ao Inglês to Go! 🎉");
      onComplete();
    } catch (error) {
      console.error("Error saving quiz:", error);
      toast.error("Erro ao salvar suas respostas. Tente novamente.");
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return answers.age_range !== "";
      case 2: return answers.interests.length > 0;
      case 3: return answers.english_level !== "";
      case 4: return answers.motivation !== "";
      case 5: return answers.personal_preference !== "";
      case 6: return answers.topics_interest.length > 0;
      case 7: return answers.main_difficulties.length > 0;
      default: return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Qual é a sua idade? / What's your age?
              </h3>
              <p className="text-muted-foreground">
                Isso nos ajuda a personalizar seu aprendizado
              </p>
            </div>
            <RadioGroup value={answers.age_range} onValueChange={(value) => setAnswers({ ...answers, age_range: value })}>
              {ageRanges.map((range) => (
                <div key={range} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary transition-colors">
                  <RadioGroupItem value={range} id={range} />
                  <Label htmlFor={range} className="flex-1 cursor-pointer text-lg">
                    {range} anos
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Quais são seus interesses? / What are your interests?
              </h3>
              <p className="text-muted-foreground">
                Selecione todos que você gosta (múltipla escolha)
              </p>
            </div>
            <div className="space-y-2">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary transition-colors">
                  <Checkbox
                    id={interest}
                    checked={answers.interests.includes(interest)}
                    onCheckedChange={() => handleArrayToggle("interests", interest)}
                  />
                  <Label htmlFor={interest} className="flex-1 cursor-pointer text-lg">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Qual é o seu nível de inglês? / What's your English level?
              </h3>
              <p className="text-muted-foreground">
                Seja honesto, isso nos ajuda a te guiar melhor
              </p>
            </div>
            <RadioGroup value={answers.english_level} onValueChange={(value) => setAnswers({ ...answers, english_level: value })}>
              {englishLevels.map((level) => (
                <div key={level.value} className="flex items-center space-x-2 p-4 rounded-lg border hover:border-primary transition-colors">
                  <RadioGroupItem value={level.value} id={level.value} />
                  <Label htmlFor={level.value} className="flex-1 cursor-pointer text-lg">
                    {level.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Por que você quer aprender inglês? / Why do you want to learn English?
              </h3>
              <p className="text-muted-foreground">
                Qual é sua principal motivação?
              </p>
            </div>
            <RadioGroup value={answers.motivation} onValueChange={(value) => setAnswers({ ...answers, motivation: value })}>
              {motivations.map((motivation) => (
                <div key={motivation.value} className="flex items-center space-x-2 p-4 rounded-lg border hover:border-primary transition-colors">
                  <RadioGroupItem value={motivation.value} id={motivation.value} />
                  <Label htmlFor={motivation.value} className="flex-1 cursor-pointer text-lg">
                    {motivation.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Você prefere... / You prefer...
              </h3>
              <p className="text-muted-foreground">
                Só por curiosidade 😊
              </p>
            </div>
            <RadioGroup value={answers.personal_preference} onValueChange={(value) => setAnswers({ ...answers, personal_preference: value })}>
              {preferences.map((pref) => (
                <div key={pref.value} className="flex items-center space-x-2 p-4 rounded-lg border hover:border-primary transition-colors">
                  <RadioGroupItem value={pref.value} id={pref.value} />
                  <Label htmlFor={pref.value} className="flex-1 cursor-pointer text-lg">
                    {pref.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                O que você mais quer aprender? / What do you want to learn most?
              </h3>
              <p className="text-muted-foreground">
                Selecione todos os tópicos de interesse (múltipla escolha)
              </p>
            </div>
            <div className="space-y-2">
              {topicsOptions.map((topic) => (
                <div key={topic} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary transition-colors">
                  <Checkbox
                    id={topic}
                    checked={answers.topics_interest.includes(topic)}
                    onCheckedChange={() => handleArrayToggle("topics_interest", topic)}
                  />
                  <Label htmlFor={topic} className="flex-1 cursor-pointer text-lg">
                    {topic}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fredoka text-primary mb-2">
                Quais são suas principais dificuldades? / What are your main difficulties?
              </h3>
              <p className="text-muted-foreground">
                Selecione todas que se aplicam (múltipla escolha)
              </p>
            </div>
            <div className="space-y-2">
              {difficultiesOptions.map((difficulty) => (
                <div key={difficulty.value} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary transition-colors">
                  <Checkbox
                    id={difficulty.value}
                    checked={answers.main_difficulties.includes(difficulty.value)}
                    onCheckedChange={() => handleArrayToggle("main_difficulties", difficulty.value)}
                  />
                  <Label htmlFor={difficulty.value} className="flex-1 cursor-pointer text-lg">
                    {difficulty.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <CardTitle className="text-3xl font-fredoka bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bem-vindo ao Inglês to Go!
            </CardTitle>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <CardDescription className="text-lg">
            Vamos conhecer você melhor para criar seu plano de estudos personalizado! 🎯
          </CardDescription>
          
          {/* Progress indicator */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pergunta {step} de {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {renderStep()}

          <div className="flex justify-between mt-8 gap-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                ← Voltar / Back
              </Button>
            )}
            
            {step < totalSteps ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
              >
                Próxima / Next →
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
              >
                <Target className="w-4 h-4 mr-2" />
                Concluir e Ver Meu Plano / Complete & See My Plan
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
