import { useEffect, useState } from "react";
import { Volume2, X, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DailyQuote {
  english: string;
  pronunciation: string;
  portuguese: string;
}

const quotes: DailyQuote[] = [
  {
    english: "You are guided every step of the way.",
    pronunciation: "iú ar gáided évri stép óv dâ uêi",
    portuguese: "Você é guiado a cada passo do caminho."
  },
  {
    english: "Strength comes from where you least expect it.",
    pronunciation: "strénth kâms from uér iú list ekspékt it",
    portuguese: "A força vem de onde você menos espera."
  },
  {
    english: "Every effort is seen and meaningful.",
    pronunciation: "évri éfort iz síin and míningful",
    portuguese: "Todo esforço é visto e significativo."
  },
  {
    english: "Your path is being shaped with care.",
    pronunciation: "iór path iz bíing shêipt uíth kér",
    portuguese: "Seu caminho está sendo moldado com cuidado."
  },
  {
    english: "Faith makes the impossible possible.",
    pronunciation: "fêith mêiks dhi impósibâl pósibâl",
    portuguese: "A fé torna o impossível possível."
  },
  {
    english: "Small steps are part of a bigger plan.",
    pronunciation: "smól stéps ar part óv â bíguêr plân",
    portuguese: "Pequenos passos fazem parte de um plano maior."
  },
  {
    english: "You are never alone on this journey.",
    pronunciation: "iú ar névêr âloun ón dhis djôrni",
    portuguese: "Você nunca está sozinho nesta jornada."
  },
  {
    english: "Trust the process and keep going.",
    pronunciation: "trâst dhi próses and kíip góuing",
    portuguese: "Confie no processo e continue."
  },
  {
    english: "Every challenge is a lesson from above.",
    pronunciation: "évri tchálendj iz â léssân from âbâv",
    portuguese: "Cada desafio é uma lição do alto."
  },
  {
    english: "Your heart knows the way — follow it.",
    pronunciation: "iór rart nóus dhi uêi — fólou it",
    portuguese: "Seu coração conhece o caminho — siga-o."
  },
  {
    english: "You are capable of more than you know.",
    pronunciation: "iú ar kêipâbâl óv môr dhan iú nóu",
    portuguese: "Você é capaz de mais do que imagina."
  },
  {
    english: "Blessings come in the moments you try.",
    pronunciation: "blésings kâm in dhi móuments iú trái",
    portuguese: "Bênçãos vêm nos momentos em que você tenta."
  },
  {
    english: "Light shines even in the smallest actions.",
    pronunciation: "láit sháins ívân in dhi smólest ákshâns",
    portuguese: "A luz brilha mesmo nas menores ações."
  },
  {
    english: "Courage is quietly growing inside you.",
    pronunciation: "kâridj iz kuáiêtli gróuing insáid iú",
    portuguese: "A coragem está crescendo silenciosamente dentro de você."
  },
  {
    english: "Your effort matters more than you think.",
    pronunciation: "iór éfort mátêrs môr dhan iú think",
    portuguese: "Seu esforço importa mais do que você pensa."
  },
  {
    english: "The journey itself is a gift.",
    pronunciation: "dhi djôrni itself iz â guift",
    portuguese: "A jornada em si é um presente."
  },
  {
    english: "Keep moving — the universe is with you.",
    pronunciation: "kíip múving — dhi iúnivârs iz uíth iú",
    portuguese: "Continue se movendo — o universo está com você."
  },
  {
    english: "Your intentions are never lost.",
    pronunciation: "iór inténshâns ar névêr lóst",
    portuguese: "Suas intenções nunca se perdem."
  },
  {
    english: "Trust in the timing of your life.",
    pronunciation: "trâst in dhi táiming óv iór láif",
    portuguese: "Confie no tempo da sua vida."
  },
  {
    english: "Every day is a new chance to grow.",
    pronunciation: "évri dêi iz â niú tchâns tu gróu",
    portuguese: "Cada dia é uma nova chance de crescer."
  },
  {
    english: "Patience brings clarity in every step.",
    pronunciation: "pêishâns brings klériti in évri stép",
    portuguese: "A paciência traz clareza a cada passo."
  },
  {
    english: "Gentle persistence moves mountains.",
    pronunciation: "djéntâl pêrsístâns múvs máuntens",
    portuguese: "A persistência gentil move montanhas."
  },
  {
    english: "Hope is quietly working behind the scenes.",
    pronunciation: "róup iz kuáiêtli uôrking biráind dhi síins",
    portuguese: "A esperança está trabalhando silenciosamente nos bastidores."
  },
  {
    english: "Every small action matters.",
    pronunciation: "évri smól ákshân mátêrs",
    portuguese: "Cada pequena ação importa."
  },
  {
    english: "Your light touches more than you see.",
    pronunciation: "iór láit tâtches môr dhan iú síi",
    portuguese: "Sua luz toca mais do que você vê."
  },
  {
    english: "Peace grows where effort is consistent.",
    pronunciation: "píis gróus uér éfort iz kânsístânt",
    portuguese: "A paz cresce onde o esforço é consistente."
  },
  {
    english: "Kindness and diligence go hand in hand.",
    pronunciation: "káindnes and dílidjâns gou rand in rand",
    portuguese: "Bondade e diligência andam de mãos dadas."
  },
  {
    english: "Even silence holds power and guidance.",
    pronunciation: "ívân sáilâns rôulds páuêr and gáidâns",
    portuguese: "Até o silêncio contém poder e orientação."
  },
  {
    english: "The smallest choices create the biggest change.",
    pronunciation: "dhi smólest tchóises kriêit dhi bíguest tchêindj",
    portuguese: "As menores escolhas criam a maior mudança."
  },
  {
    english: "Every moment carries a hidden blessing.",
    pronunciation: "évri móument kéris â rídân bléssing",
    portuguese: "Cada momento carrega uma bênção oculta."
  },
  {
    english: "You are exactly where you need to be today.",
    pronunciation: "iú ar exáktli uér iú níid tu bí tudêi",
    portuguese: "Você está exatamente onde precisa estar hoje."
  }
];

export const QuoteOfTheDay = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("lastQuoteShown", todayStr);
      }, 2000);
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
      if (!('speechSynthesis' in window)) {
        throw new Error('Speech synthesis not supported');
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.7;
      utterance.pitch = 1.0;
      
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => 
        voice.lang === 'en-US' || voice.lang === 'en_US'
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => {
        setLoadingAudio(false);
      };

      utterance.onerror = () => {
        setLoadingAudio(false);
      };

      speechSynthesis.speak(utterance);
    } catch (error) {
      setLoadingAudio(false);
    }
  };

  return (
    <>
      <Card 
        className="cursor-pointer hover:shadow-lg transition-smooth border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Frase do Dia / Quote of the Day
              </h3>
              <p className="text-sm text-muted-foreground italic">
                "{todayQuote.english}"
              </p>
              <p className="text-xs text-primary mt-2">
                Clique para ver pronúncia e tradução
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Quote className="h-6 w-6 text-primary" />
              Frase do Dia / Quote of the Day
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="relative rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border-2 border-primary/20">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
              <p className="text-xl font-semibold text-center text-foreground pt-4">
                {todayQuote.english}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">
                    Pronúncia / Pronunciation:
                  </p>
                  <p className="text-base font-medium text-accent">
                    /{todayQuote.pronunciation}/
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playAudio(todayQuote.english)}
                  disabled={loadingAudio}
                  className="h-12 w-12 p-0"
                >
                  <Volume2 className={`h-6 w-6 ${loadingAudio ? 'animate-pulse' : ''}`} />
                </Button>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">
                  Significado / Meaning:
                </p>
                <p className="text-base font-medium text-secondary">
                  {todayQuote.portuguese}
                </p>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              💡 Uma nova frase aparecerá amanhã! / A new quote will appear tomorrow!
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
