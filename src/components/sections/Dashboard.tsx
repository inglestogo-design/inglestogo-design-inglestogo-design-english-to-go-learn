import { Award, BookOpen, Clock, TrendingUp, Volume2, Quote } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteOfTheDay } from "./QuoteOfTheDay";
import { useState, useEffect } from "react";
import { speakText } from "@/utils/speechUtils";

interface DailyQuote {
  english: string;
  pronunciation: string;
  portuguese: string;
  emoji: string;
}

const quotes: DailyQuote[] = [
  {
    english: "You are guided every step of the way.",
    pronunciation: "iú ar gáided évri stép óv dâ uêi",
    portuguese: "Você é guiado a cada passo do caminho.",
    emoji: "🧭"
  },
  {
    english: "Strength comes from where you least expect it.",
    pronunciation: "strénth kâms from uér iú list ekspékt it",
    portuguese: "A força vem de onde você menos espera.",
    emoji: "💪"
  },
  {
    english: "Every effort is seen and meaningful.",
    pronunciation: "évri éfort iz síin and míningful",
    portuguese: "Todo esforço é visto e significativo.",
    emoji: "👁️"
  },
  {
    english: "Your path is being shaped with care.",
    pronunciation: "iór path iz bíing shêipt uíth kér",
    portuguese: "Seu caminho está sendo moldado com cuidado.",
    emoji: "🛤️"
  },
  {
    english: "Faith makes the impossible possible.",
    pronunciation: "fêith mêiks dhi impósibâl pósibâl",
    portuguese: "A fé torna o impossível possível.",
    emoji: "✨"
  },
  {
    english: "Small steps are part of a bigger plan.",
    pronunciation: "smól stéps ar part óv â bíguêr plân",
    portuguese: "Pequenos passos fazem parte de um plano maior.",
    emoji: "👣"
  },
  {
    english: "You are never alone on this journey.",
    pronunciation: "iú ar névêr âloun ón dhis djôrni",
    portuguese: "Você nunca está sozinho nesta jornada.",
    emoji: "🤝"
  },
  {
    english: "Trust the process and keep going.",
    pronunciation: "trâst dhi próses and kíip góuing",
    portuguese: "Confie no processo e continue.",
    emoji: "🔄"
  },
  {
    english: "Every challenge is a lesson from above.",
    pronunciation: "évri tchálendj iz â léssân from âbâv",
    portuguese: "Cada desafio é uma lição do alto.",
    emoji: "📖"
  },
  {
    english: "Your heart knows the way — follow it.",
    pronunciation: "iór rart nóus dhi uêi — fólou it",
    portuguese: "Seu coração conhece o caminho — siga-o.",
    emoji: "💝"
  },
  {
    english: "You are capable of more than you know.",
    pronunciation: "iú ar kêipâbâl óv môr dhan iú nóu",
    portuguese: "Você é capaz de mais do que imagina.",
    emoji: "🚀"
  },
  {
    english: "Blessings come in the moments you try.",
    pronunciation: "blésings kâm in dhi móuments iú trái",
    portuguese: "Bênçãos vêm nos momentos em que você tenta.",
    emoji: "🙏"
  },
  {
    english: "Light shines even in the smallest actions.",
    pronunciation: "láit sháins ívân in dhi smólest ákshâns",
    portuguese: "A luz brilha mesmo nas menores ações.",
    emoji: "💡"
  },
  {
    english: "Courage is quietly growing inside you.",
    pronunciation: "kâridj iz kuáiêtli gróuing insáid iú",
    portuguese: "A coragem está crescendo silenciosamente dentro de você.",
    emoji: "🦁"
  },
  {
    english: "Your effort matters more than you think.",
    pronunciation: "iór éfort mátêrs môr dhan iú think",
    portuguese: "Seu esforço importa mais do que você pensa.",
    emoji: "🎯"
  },
  {
    english: "The journey itself is a gift.",
    pronunciation: "dhi djôrni itself iz â guift",
    portuguese: "A jornada em si é um presente.",
    emoji: "🎁"
  },
  {
    english: "Keep moving — the universe is with you.",
    pronunciation: "kíip múving — dhi iúnivârs iz uíth iú",
    portuguese: "Continue se movendo — o universo está com você.",
    emoji: "🌌"
  },
  {
    english: "Your intentions are never lost.",
    pronunciation: "iór inténshâns ar névêr lóst",
    portuguese: "Suas intenções nunca se perdem.",
    emoji: "🧲"
  },
  {
    english: "Trust in the timing of your life.",
    pronunciation: "trâst in dhi táiming óv iór láif",
    portuguese: "Confie no tempo da sua vida.",
    emoji: "⏰"
  },
  {
    english: "Every day is a new chance to grow.",
    pronunciation: "évri dêi iz â niú tchâns tu gróu",
    portuguese: "Cada dia é uma nova chance de crescer.",
    emoji: "🌱"
  },
  {
    english: "Patience brings clarity in every step.",
    pronunciation: "pêishâns brings klériti in évri stép",
    portuguese: "A paciência traz clareza a cada passo.",
    emoji: "🧘"
  },
  {
    english: "Gentle persistence moves mountains.",
    pronunciation: "djéntâl pêrsístâns múvs máuntens",
    portuguese: "A persistência gentil move montanhas.",
    emoji: "⛰️"
  },
  {
    english: "Hope is quietly working behind the scenes.",
    pronunciation: "róup iz kuáiêtli uôrking biráind dhi síins",
    portuguese: "A esperança está trabalhando silenciosamente nos bastidores.",
    emoji: "🌟"
  },
  {
    english: "Every small action matters.",
    pronunciation: "évri smól ákshân mátêrs",
    portuguese: "Cada pequena ação importa.",
    emoji: "🔸"
  },
  {
    english: "Your light touches more than you see.",
    pronunciation: "iór láit tâtches môr dhan iú síi",
    portuguese: "Sua luz toca mais do que você vê.",
    emoji: "🕯️"
  },
  {
    english: "Peace grows where effort is consistent.",
    pronunciation: "píis gróus uér éfort iz kânsístânt",
    portuguese: "A paz cresce onde o esforço é consistente.",
    emoji: "☮️"
  },
  {
    english: "Kindness and diligence go hand in hand.",
    pronunciation: "káindnes and dílidjâns gou rand in rand",
    portuguese: "Bondade e diligência andam de mãos dadas.",
    emoji: "🤲"
  },
  {
    english: "Even silence holds power and guidance.",
    pronunciation: "ívân sáilâns rôulds páuêr and gáidâns",
    portuguese: "Até o silêncio contém poder e orientação.",
    emoji: "🤫"
  },
  {
    english: "The smallest choices create the biggest change.",
    pronunciation: "dhi smólest tchóises kriêit dhi bíguest tchêindj",
    portuguese: "As menores escolhas criam a maior mudança.",
    emoji: "🦋"
  },
  {
    english: "Every moment carries a hidden blessing.",
    pronunciation: "évri móument kéris â rídân bléssing",
    portuguese: "Cada momento carrega uma bênção oculta.",
    emoji: "🎐"
  },
  {
    english: "You are exactly where you need to be today.",
    pronunciation: "iú ar exáktli uér iú níid tu bí tudêi",
    portuguese: "Você está exatamente onde precisa estar hoje.",
    emoji: "📍"
  }
];

interface DashboardProps {
  onNavigate?: (section: string) => void;
  onStartOnboarding?: () => void;
}

export const Dashboard = ({ onNavigate, onStartOnboarding }: DashboardProps) => {
  const [todayQuote, setTodayQuote] = useState<DailyQuote>(quotes[0]);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(72); // Default temperature
  
  const progressData = [
    { label: "Pronúncia / Pronunciation", value: 75, color: "primary" as const },
    { label: "Vocabulário / Vocabulary", value: 60, color: "secondary" as const },
    { label: "Fluência / Fluency", value: 45, color: "accent" as const },
  ];

  useEffect(() => {
    // Get today's quote based on day of month
    const today = new Date().getDate();
    const quoteIndex = (today - 1) % quotes.length;
    setTodayQuote(quotes[quoteIndex]);

    // Mock temperature (in production, use weather API)
    const temps = [68, 70, 72, 74, 76, 78, 80, 82];
    setCurrentTemp(temps[today % temps.length]);
  }, []);

  const playQuoteAudio = async () => {
    setLoadingAudio(true);
    try {
      await speakText(todayQuote.english, { 
        rate: 0.75, 
        pitch: 1.1,
        volume: 0.9
      });
      setLoadingAudio(false);
    } catch (error) {
      console.error('Error playing audio:', error);
      setLoadingAudio(false);
    }
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Olá, Estudante! / Hello, Student! 👋</h2>
        <p className="text-muted-foreground mt-1">Continue sua jornada de aprendizado / Continue your learning journey</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Nível Atual / Current Level"
          value="Intermediário / Intermediate"
          icon={Award}
          trend="Nível 2 de 5 / Level 2 of 5"
          variant="primary"
        />
        <StatsCard
          title="Palavras Aprendidas / Words Learned"
          value="847"
          icon={BookOpen}
          trend="+23 esta semana / this week"
          variant="secondary"
        />
        <StatsCard
          title="Tempo de Prática / Practice Time"
          value="12h"
          icon={Clock}
          trend="Este mês / This month"
        />
        <StatsCard
          title="Sequência Diária / Daily Streak"
          value="7 dias / days"
          icon={TrendingUp}
          trend="Continue assim! / Keep it up!"
        />
      </div>

      <QuoteOfTheDay />

      {/* Quote of the Day Display Card */}
      <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 text-9xl text-primary/5 font-serif leading-none">"</div>
        <div className="absolute bottom-0 right-0 text-9xl text-primary/5 font-serif leading-none">"</div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Frase do Dia / Quote of the Day
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-2">
              📅 {formatDate()}
            </span>
            <span className="flex items-center gap-1 font-semibold">
              🌡️ {currentTemp}°F
            </span>
          </div>
          
          <div className="bg-card/80 rounded-xl p-6 border border-primary/30 shadow-inner">
            <div className="flex items-start gap-4">
              <span className="text-5xl animate-pulse">{todayQuote.emoji}</span>
              <div className="flex-1 space-y-3">
                <p className="text-xl font-bold text-foreground leading-relaxed">
                  <span className="text-primary text-2xl">"</span>
                  {todayQuote.english}
                  <span className="text-primary text-2xl">"</span>
                </p>
                
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Pronúncia:</p>
                    <p className="text-sm font-medium text-accent">/{todayQuote.pronunciation}/</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={playQuoteAudio}
                    disabled={loadingAudio}
                    className="h-10 w-10 p-0"
                  >
                    <Volume2 className={`h-5 w-5 ${loadingAudio ? 'animate-pulse' : ''}`} />
                  </Button>
                </div>

                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-xs text-muted-foreground mb-1">Tradução:</p>
                  <p className="text-sm font-medium text-secondary">{todayQuote.portuguese}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressChart title="Seu Progresso / Your Progress" items={progressData} />
        
        <Card className="gradient-hero text-white">
          <CardHeader>
            <CardTitle>Prática Diária / Daily Practice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/90">
              Você já praticou por <span className="font-bold">15 minutos</span> hoje! / You've practiced for <span className="font-bold">15 minutes</span> today!
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Meta diária: 30 minutos / Daily goal: 30 minutes</span>
                <span>50%</span>
              </div>
              <div className="h-2 rounded-full bg-white/20">
                <div className="h-full w-1/2 rounded-full bg-white"></div>
              </div>
            </div>
            <Button variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90">
              Continuar Praticando / Continue Practicing
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Plan Card */}
      <Card className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-primary/30 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            📋 Monte seu Plano de Estudo Personalizado / Create Your Personalized Study Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/90 text-lg">
            Responda algumas perguntas rápidas e receba um plano de estudos feito sob medida para você! / Answer a few quick questions and receive a study plan tailored for you!
          </p>
          {onStartOnboarding && (
            <Button 
              onClick={onStartOnboarding}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
            >
              🚀 Começar Agora / Start Now
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Atividades Recomendadas / Recommended Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Prática de Pronúncia / Pronunciation Practice", desc: "5 minutos / minutes", color: "primary" },
              { title: "Novo Vocabulário / New Vocabulary", desc: "10 palavras / words", color: "secondary" },
              { title: "Exercício Rápido / Quick Exercise", desc: "3 minutos / minutes", color: "accent" },
            ].map((activity, i) => (
              <div
                key={i}
                className="rounded-lg border border-border p-4 transition-smooth hover:shadow-md hover:border-primary/50 cursor-pointer"
              >
                <h4 className="font-semibold mb-1">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
