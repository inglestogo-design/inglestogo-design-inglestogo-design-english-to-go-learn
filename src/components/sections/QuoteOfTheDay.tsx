import { useEffect, useState } from "react";
import { Volume2, X, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

export const QuoteOfTheDay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMiniPopup, setShowMiniPopup] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [todayQuote, setTodayQuote] = useState<DailyQuote>(quotes[0]);

  useEffect(() => {
    // Get today's day (1-31)
    const today = new Date().getDate();
    const quoteIndex = (today - 1) % quotes.length;
    setTodayQuote(quotes[quoteIndex]);

    // Check if we should show the popup (once per day)
    const lastShown = localStorage.getItem("lastQuoteShown");
    const todayStr = new Date().toDateString();
    
    if (lastShown !== todayStr) {
      // Show mini popup after 2 seconds
      setTimeout(() => {
        setShowMiniPopup(true);
        localStorage.setItem("lastQuoteShown", todayStr);
      }, 2000);

      // Auto-hide mini popup after 10 seconds
      setTimeout(() => {
        setShowMiniPopup(false);
      }, 12000);
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const playAudio = async (text: string) => {
    setLoadingAudio(true);
    
    try {
      await speakText(text, { 
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

  return (
    <>

      {/* Fixed Bottom Right Popup - Auto-hides after 10 seconds */}
      {showMiniPopup && !isOpen && (
        <div 
          className="fixed bottom-6 right-6 z-50 animate-slide-up cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            setShowMiniPopup(false);
          }}
        >
          <Card className="w-80 shadow-2xl border-2 border-emerald-400/40 bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50 dark:from-sky-950/40 dark:via-emerald-950/40 dark:to-teal-950/40 hover:scale-105 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-2 animate-pulse shadow-lg">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                      ☀️ Inspiração do Dia / Daily Inspiration
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMiniPopup(false);
                      }}
                      className="h-6 w-6 p-0 hover:bg-destructive/10"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-300">
                    {new Date().toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{todayQuote.emoji}</span>
                  <p className="text-xs italic text-emerald-900 dark:text-emerald-100 flex-1 leading-relaxed">
                    <span className="text-emerald-600 dark:text-emerald-400 font-black text-2xl leading-none">"</span>
                    {todayQuote.english}
                    <span className="text-emerald-600 dark:text-emerald-400 font-black text-2xl leading-none">"</span>
                  </p>
                </div>
                <p className="text-[9px] text-center text-teal-600 dark:text-teal-400 font-medium">
                  ✨ Clique para ver pronúncia e tradução
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl border-emerald-400/40">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className="rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 animate-pulse shadow-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent font-bold">
                Inspiração do Dia / Daily Inspiration
              </span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="relative rounded-2xl bg-gradient-to-br from-sky-100 via-emerald-100 to-teal-100 dark:from-sky-950/60 dark:via-emerald-950/60 dark:to-teal-950/60 p-10 border-2 border-emerald-400/40 shadow-2xl overflow-hidden">
              <div className="absolute top-3 left-3 text-7xl text-emerald-600/20 dark:text-emerald-400/20 font-serif leading-none">"</div>
              <div className="absolute bottom-3 right-3 text-7xl text-emerald-600/20 dark:text-emerald-400/20 font-serif leading-none">"</div>
              
              {/* Decorative sun rays */}
              <div className="absolute top-4 right-4 opacity-20">
                <Sun className="h-20 w-20 text-amber-400 animate-spin-slow" />
              </div>
              
              <div className="relative z-10 space-y-5">
                <div className="flex justify-center">
                  <span className="text-7xl animate-pulse drop-shadow-lg">{todayQuote.emoji}</span>
                </div>
                <p className="text-2xl font-bold text-center text-emerald-900 dark:text-emerald-100 leading-relaxed px-4">
                  {todayQuote.english}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/30 dark:via-emerald-800/20 to-transparent animate-shimmer"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-sky-50 to-emerald-50 dark:from-sky-950/40 dark:to-emerald-950/40 rounded-lg border border-emerald-300/30">
                <div className="flex-1">
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 mb-1 font-medium">
                    🗣️ Pronúncia / Pronunciation:
                  </p>
                  <p className="text-base font-medium text-teal-700 dark:text-teal-300">
                    /{todayQuote.pronunciation}/
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playAudio(todayQuote.english)}
                  disabled={loadingAudio}
                  className="h-12 w-12 p-0 hover:bg-emerald-200 dark:hover:bg-emerald-800"
                >
                  <Volume2 className={`h-6 w-6 text-emerald-600 dark:text-emerald-400 ${loadingAudio ? 'animate-pulse' : ''}`} />
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-lg border border-teal-300/30">
                <p className="text-xs text-teal-700 dark:text-teal-300 mb-1 font-medium">
                  💬 Significado / Meaning:
                </p>
                <p className="text-base font-medium text-emerald-800 dark:text-emerald-200">
                  {todayQuote.portuguese}
                </p>
              </div>
            </div>

            <div className="text-center text-sm bg-gradient-to-r from-transparent via-emerald-100 dark:via-emerald-950/40 to-transparent py-3 rounded-lg border border-emerald-300/20">
              <span className="text-xl">🌅</span> 
              <span className="text-emerald-700 dark:text-emerald-300 font-medium"> Uma nova inspiração aparecerá amanhã! / A new inspiration will appear tomorrow!</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
