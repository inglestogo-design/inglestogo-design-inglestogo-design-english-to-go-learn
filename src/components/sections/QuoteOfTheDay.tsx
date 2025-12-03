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

      {/* Fixed Bottom Right Popup - Large Clean Modern Design */}
      {showMiniPopup && !isOpen && (
        <div 
          className="fixed bottom-8 right-8 z-50 animate-slide-up cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            setShowMiniPopup(false);
          }}
        >
          <Card className="w-full max-w-[420px] mx-auto shadow-2xl border-0 bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            <CardContent className="p-8 relative">
              {/* Modern Sun Background */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute top-4 right-4 w-16 h-16">
                <Sun className="w-full h-full text-amber-400 animate-spin-slow opacity-20" />
              </div>

              {/* Header */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                    <Sun className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                      Daily Inspiration
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      {new Date().toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMiniPopup(false);
                  }}
                  className="h-8 w-8 p-0 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="h-4 w-4 text-slate-500" />
                </Button>
              </div>

              {/* Quote Content */}
              <div className="relative space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl shrink-0 drop-shadow-lg">{todayQuote.emoji}</span>
                  <div className="flex-1 space-y-3">
                    <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {todayQuote.english}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      {todayQuote.portuguese}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    Click to see pronunciation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl border-0 bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4 text-3xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl animate-pulse">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Daily Inspiration
              </span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            {/* Main Quote Card - Clean Modern Design */}
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-12 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              {/* Decorative background elements */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex justify-center">
                  <span className="text-8xl drop-shadow-2xl animate-pulse">{todayQuote.emoji}</span>
                </div>
                <p className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 leading-relaxed tracking-tight">
                  {todayQuote.english}
                </p>
              </div>
            </div>

            {/* Info Cards - Modern Clean Layout */}
            <div className="grid gap-6">
              <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium uppercase tracking-wide">
                    Pronunciation
                  </p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                    /{todayQuote.pronunciation}/
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playAudio(todayQuote.english)}
                  disabled={loadingAudio}
                  className="h-14 w-14 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all"
                >
                  <Volume2 className={`h-7 w-7 text-emerald-600 dark:text-emerald-400 ${loadingAudio ? 'animate-pulse' : ''}`} />
                </Button>
              </div>

              <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2 font-medium uppercase tracking-wide">
                  Meaning
                </p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {todayQuote.portuguese}
                </p>
              </div>
            </div>

            <div className="text-center pt-4 space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                <span className="text-2xl">🌅</span> 
                <span>A new inspiration will appear tomorrow</span>
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-2"
              >
                Fechar / Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
