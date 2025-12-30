import { Award, BookOpen, Clock, TrendingUp, Volume2, Quote, Sparkles } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { speakText } from "@/utils/speechUtils";
import { useUserProgress } from "@/hooks/useUserProgress";

interface DailyQuote {
  english: string;
  pronunciation: string;
  portuguese: string;
  emoji: string;
}

const quotes: DailyQuote[] = [
  { english: "You are guided every step of the way.", pronunciation: "iú ar gáided évri stép óv dâ uêi", portuguese: "Você é guiado a cada passo do caminho.", emoji: "🧭" },
  { english: "Strength comes from where you least expect it.", pronunciation: "strénth kâms from uér iú list ekspékt it", portuguese: "A força vem de onde você menos espera.", emoji: "💪" },
  { english: "Every effort is seen and meaningful.", pronunciation: "évri éfort iz síin and míningful", portuguese: "Todo esforço é visto e significativo.", emoji: "👁️" },
  { english: "Your path is being shaped with care.", pronunciation: "iór path iz bíing shêipt uíth kér", portuguese: "Seu caminho está sendo moldado com cuidado.", emoji: "🛤️" },
  { english: "Faith makes the impossible possible.", pronunciation: "fêith mêiks dhi impósibâl pósibâl", portuguese: "A fé torna o impossível possível.", emoji: "✨" },
  { english: "Small steps are part of a bigger plan.", pronunciation: "smól stéps ar part óv â bíguêr plân", portuguese: "Pequenos passos fazem parte de um plano maior.", emoji: "👣" },
  { english: "You are never alone on this journey.", pronunciation: "iú ar névêr âloun ón dhis djôrni", portuguese: "Você nunca está sozinho nesta jornada.", emoji: "🤝" },
  { english: "Trust the process and keep going.", pronunciation: "trâst dhi próses and kíip góuing", portuguese: "Confie no processo e continue.", emoji: "🔄" },
  { english: "Every challenge is a lesson from above.", pronunciation: "évri tchálendj iz â léssân from âbâv", portuguese: "Cada desafio é uma lição do alto.", emoji: "📖" },
  { english: "Your heart knows the way — follow it.", pronunciation: "iór rart nóus dhi uêi — fólou it", portuguese: "Seu coração conhece o caminho — siga-o.", emoji: "💝" },
  { english: "You are capable of more than you know.", pronunciation: "iú ar kêipâbâl óv môr dhan iú nóu", portuguese: "Você é capaz de mais do que imagina.", emoji: "🚀" },
  { english: "Blessings come in the moments you try.", pronunciation: "blésings kâm in dhi móuments iú trái", portuguese: "Bênçãos vêm nos momentos em que você tenta.", emoji: "🙏" },
  { english: "Light shines even in the smallest actions.", pronunciation: "láit sháins ívân in dhi smólest ákshâns", portuguese: "A luz brilha mesmo nas menores ações.", emoji: "💡" },
  { english: "Courage is quietly growing inside you.", pronunciation: "kâridj iz kuáiêtli gróuing insáid iú", portuguese: "A coragem está crescendo silenciosamente dentro de você.", emoji: "🦁" },
  { english: "Your effort matters more than you think.", pronunciation: "iór éfort mátêrs môr dhan iú think", portuguese: "Seu esforço importa mais do que você pensa.", emoji: "🎯" },
  { english: "The journey itself is a gift.", pronunciation: "dhi djôrni itself iz â guift", portuguese: "A jornada em si é um presente.", emoji: "🎁" },
  { english: "Keep moving — the universe is with you.", pronunciation: "kíip múving — dhi iúnivârs iz uíth iú", portuguese: "Continue se movendo — o universo está com você.", emoji: "🌌" },
  { english: "Your intentions are never lost.", pronunciation: "iór inténshâns ar névêr lóst", portuguese: "Suas intenções nunca se perdem.", emoji: "🧲" },
  { english: "Trust in the timing of your life.", pronunciation: "trâst in dhi táiming óv iór láif", portuguese: "Confie no tempo da sua vida.", emoji: "⏰" },
  { english: "Every day is a new chance to grow.", pronunciation: "évri dêi iz â niú tchâns tu gróu", portuguese: "Cada dia é uma nova chance de crescer.", emoji: "🌱" },
  { english: "Patience brings clarity in every step.", pronunciation: "pêishâns brings klériti in évri stép", portuguese: "A paciência traz clareza a cada passo.", emoji: "🧘" },
  { english: "Gentle persistence moves mountains.", pronunciation: "djéntâl pêrsístâns múvs máuntens", portuguese: "A persistência gentil move montanhas.", emoji: "⛰️" },
  { english: "Hope is quietly working behind the scenes.", pronunciation: "róup iz kuáiêtli uôrking biráind dhi síins", portuguese: "A esperança está trabalhando silenciosamente nos bastidores.", emoji: "🌟" },
  { english: "Every small action matters.", pronunciation: "évri smól ákshân mátêrs", portuguese: "Cada pequena ação importa.", emoji: "🔸" },
  { english: "Your light touches more than you see.", pronunciation: "iór láit tâtches môr dhan iú síi", portuguese: "Sua luz toca mais do que você vê.", emoji: "🕯️" },
  { english: "Peace grows where effort is consistent.", pronunciation: "píis gróus uér éfort iz kânsístânt", portuguese: "A paz cresce onde o esforço é consistente.", emoji: "☮️" },
  { english: "Kindness and diligence go hand in hand.", pronunciation: "káindnes and dílidjâns gou rand in rand", portuguese: "Bondade e diligência andam de mãos dadas.", emoji: "🤲" },
  { english: "Even silence holds power and guidance.", pronunciation: "ívân sáilâns rôulds páuêr and gáidâns", portuguese: "Até o silêncio contém poder e orientação.", emoji: "🤫" },
  { english: "The smallest choices create the biggest change.", pronunciation: "dhi smólest tchóises kriêit dhi bíguest tchêindj", portuguese: "As menores escolhas criam a maior mudança.", emoji: "🦋" },
  { english: "Every moment carries a hidden blessing.", pronunciation: "évri móument kéris â rídân bléssing", portuguese: "Cada momento carrega uma bênção oculta.", emoji: "🎐" },
  { english: "You are exactly where you need to be today.", pronunciation: "iú ar exáktli uér iú níid tu bí tudêi", portuguese: "Você está exatamente onde precisa estar hoje.", emoji: "📍" }
];

interface DashboardProps {
  onNavigate?: (section: string) => void;
  onStartOnboarding?: () => void;
}

export const Dashboard = ({ onNavigate, onStartOnboarding }: DashboardProps) => {
  const [todayQuote, setTodayQuote] = useState<DailyQuote>(quotes[0]);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const { stats, weeklyActivity, loading } = useUserProgress();

  useEffect(() => {
    const today = new Date().getDate();
    const quoteIndex = (today - 1) % quotes.length;
    setTodayQuote(quotes[quoteIndex]);
  }, []);

  const playQuoteAudio = async () => {
    setLoadingAudio(true);
    try {
      await speakText(todayQuote.english, { rate: 0.75, pitch: 1.1, volume: 0.9 });
    } catch (error) {
      console.error('Error playing audio:', error);
    }
    setLoadingAudio(false);
  };

  // Calculate stats
  const totalMinutes = weeklyActivity.reduce((sum, day) => sum + (day.minutes_studied || 0), 0);
  const timeDisplay = totalMinutes >= 60 ? `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m` : `${totalMinutes}m`;
  
  const avgSkill = stats ? Math.round((stats.pronunciation_skill + stats.vocabulary_skill + stats.grammar_skill + stats.fluency_skill) / 4) : 0;
  const getLevel = (skill: number) => {
    if (skill < 20) return "Iniciante";
    if (skill < 40) return "Básico";
    if (skill < 60) return "Intermediário";
    if (skill < 80) return "Avançado";
    return "Fluente";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Welcome */}
      <div className="text-center py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Olá, Estudante! 👋
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Continue sua jornada / Continue your journey
        </p>
      </div>

      {/* Start Here CTA */}
      {onStartOnboarding && (
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-foreground">
                  Comece Aqui! / Start Here!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monte seu plano de estudos em 2 minutos
                </p>
              </div>
              <Button 
                onClick={onStartOnboarding}
                size="lg"
                className="w-full sm:w-auto"
              >
                🎯 Começar Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatsCard
          title="Nível"
          value={getLevel(avgSkill)}
          icon={Award}
          variant="primary"
        />
        <StatsCard
          title="Palavras"
          value={stats?.total_words_learned?.toString() || "0"}
          icon={BookOpen}
          variant="secondary"
        />
        <StatsCard
          title="Tempo"
          value={timeDisplay}
          icon={Clock}
        />
        <StatsCard
          title="Sequência"
          value={`${stats?.current_streak || 0} dias`}
          icon={TrendingUp}
        />
      </div>

      {/* Quote of the Day */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardTitle className="flex items-center gap-2 text-base">
            <Quote className="h-4 w-4 text-primary" />
            Frase do Dia / Quote of the Day
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{todayQuote.emoji}</span>
            <div className="flex-1 min-w-0 space-y-2">
              <p className="text-base font-semibold text-foreground leading-relaxed break-words">
                "{todayQuote.english}"
              </p>
              
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xs text-muted-foreground italic break-words">
                  /{todayQuote.pronunciation}/
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={playQuoteAudio}
                  disabled={loadingAudio}
                  className="h-7 w-7 p-0 flex-shrink-0"
                >
                  <Volume2 className={`h-4 w-4 ${loadingAudio ? 'animate-pulse' : ''}`} />
                </Button>
              </div>

              <p className="text-sm text-secondary break-words">
                {todayQuote.portuguese}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onNavigate?.("pronunciation")}
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">🎤</div>
            <p className="font-medium text-sm">Pronúncia</p>
            <p className="text-xs text-muted-foreground">Pronunciation</p>
          </CardContent>
        </Card>
        
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onNavigate?.("vocabulary")}
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">📚</div>
            <p className="font-medium text-sm">Vocabulário</p>
            <p className="text-xs text-muted-foreground">Vocabulary</p>
          </CardContent>
        </Card>
        
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onNavigate?.("lessons")}
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">📖</div>
            <p className="font-medium text-sm">Lições</p>
            <p className="text-xs text-muted-foreground">Lessons</p>
          </CardContent>
        </Card>
        
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onNavigate?.("virtualCoach")}
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">💬</div>
            <p className="font-medium text-sm">Coach Virtual</p>
            <p className="text-xs text-muted-foreground">Virtual Coach</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
