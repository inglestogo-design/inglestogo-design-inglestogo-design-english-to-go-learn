import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NumberItem {
  number: number;
  cardinal: string;
  cardinalPronunciation: string;
  ordinal: string;
  ordinalPronunciation: string;
}

export const Numbers = () => {
  const [loadingAudio, setLoadingAudio] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<string[]>(["1-10"]);
  const { toast } = useToast();

  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const playAudio = (text: string, key: string) => {
    setLoadingAudio(key);
    
    try {
      if (!('speechSynthesis' in window)) {
        throw new Error('Speech synthesis not supported');
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      
      const voices = speechSynthesis.getVoices();
      const usVoice = voices.find(voice => 
        voice.lang === 'en-US' || voice.lang === 'en_US'
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (usVoice) utterance.voice = usVoice;

      utterance.onend = () => setLoadingAudio(null);
      utterance.onerror = () => setLoadingAudio(null);

      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Error playing audio:', error);
      toast({
        title: "Erro ao reproduzir áudio",
        description: "Seu navegador não suporta síntese de voz.",
        variant: "destructive",
      });
      setLoadingAudio(null);
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  const numbers: NumberItem[] = [
    // 1-10
    { number: 1, cardinal: "one", cardinalPronunciation: "uân", ordinal: "first", ordinalPronunciation: "fârst" },
    { number: 2, cardinal: "two", cardinalPronunciation: "tú", ordinal: "second", ordinalPronunciation: "sékond" },
    { number: 3, cardinal: "three", cardinalPronunciation: "zríi", ordinal: "third", ordinalPronunciation: "zârd" },
    { number: 4, cardinal: "four", cardinalPronunciation: "fór", ordinal: "fourth", ordinalPronunciation: "fôrz" },
    { number: 5, cardinal: "five", cardinalPronunciation: "fáiv", ordinal: "fifth", ordinalPronunciation: "fífz" },
    { number: 6, cardinal: "six", cardinalPronunciation: "síks", ordinal: "sixth", ordinalPronunciation: "síksz" },
    { number: 7, cardinal: "seven", cardinalPronunciation: "séven", ordinal: "seventh", ordinalPronunciation: "sévenz" },
    { number: 8, cardinal: "eight", cardinalPronunciation: "êit", ordinal: "eighth", ordinalPronunciation: "êitz" },
    { number: 9, cardinal: "nine", cardinalPronunciation: "náin", ordinal: "ninth", ordinalPronunciation: "náinz" },
    { number: 10, cardinal: "ten", cardinalPronunciation: "tén", ordinal: "tenth", ordinalPronunciation: "ténz" },
    
    // 11-20
    { number: 11, cardinal: "eleven", cardinalPronunciation: "ilévon", ordinal: "eleventh", ordinalPronunciation: "ilévonz" },
    { number: 12, cardinal: "twelve", cardinalPronunciation: "tuélv", ordinal: "twelfth", ordinalPronunciation: "tuélfz" },
    { number: 13, cardinal: "thirteen", cardinalPronunciation: "zârtíin", ordinal: "thirteenth", ordinalPronunciation: "zârtíinz" },
    { number: 14, cardinal: "fourteen", cardinalPronunciation: "fórtíin", ordinal: "fourteenth", ordinalPronunciation: "fórtíinz" },
    { number: 15, cardinal: "fifteen", cardinalPronunciation: "fiftíin", ordinal: "fifteenth", ordinalPronunciation: "fiftíinz" },
    { number: 16, cardinal: "sixteen", cardinalPronunciation: "síkstíin", ordinal: "sixteenth", ordinalPronunciation: "síkstíinz" },
    { number: 17, cardinal: "seventeen", cardinalPronunciation: "séventíin", ordinal: "seventeenth", ordinalPronunciation: "séventíinz" },
    { number: 18, cardinal: "eighteen", cardinalPronunciation: "êitíin", ordinal: "eighteenth", ordinalPronunciation: "êitíinz" },
    { number: 19, cardinal: "nineteen", cardinalPronunciation: "náintíin", ordinal: "nineteenth", ordinalPronunciation: "náintíinz" },
    { number: 20, cardinal: "twenty", cardinalPronunciation: "tuénti", ordinal: "twentieth", ordinalPronunciation: "tuéntiz" },
    
    // 21-30
    { number: 21, cardinal: "twenty-one", cardinalPronunciation: "tuénti uân", ordinal: "twenty-first", ordinalPronunciation: "tuénti fârst" },
    { number: 22, cardinal: "twenty-two", cardinalPronunciation: "tuénti tú", ordinal: "twenty-second", ordinalPronunciation: "tuénti sékond" },
    { number: 23, cardinal: "twenty-three", cardinalPronunciation: "tuénti zríi", ordinal: "twenty-third", ordinalPronunciation: "tuénti zârd" },
    { number: 24, cardinal: "twenty-four", cardinalPronunciation: "tuénti fór", ordinal: "twenty-fourth", ordinalPronunciation: "tuénti fôrz" },
    { number: 25, cardinal: "twenty-five", cardinalPronunciation: "tuénti fáiv", ordinal: "twenty-fifth", ordinalPronunciation: "tuénti fífz" },
    { number: 26, cardinal: "twenty-six", cardinalPronunciation: "tuénti síks", ordinal: "twenty-sixth", ordinalPronunciation: "tuénti síksz" },
    { number: 27, cardinal: "twenty-seven", cardinalPronunciation: "tuénti séven", ordinal: "twenty-seventh", ordinalPronunciation: "tuénti sévenz" },
    { number: 28, cardinal: "twenty-eight", cardinalPronunciation: "tuénti êit", ordinal: "twenty-eighth", ordinalPronunciation: "tuénti êitz" },
    { number: 29, cardinal: "twenty-nine", cardinalPronunciation: "tuénti náin", ordinal: "twenty-ninth", ordinalPronunciation: "tuénti náinz" },
    { number: 30, cardinal: "thirty", cardinalPronunciation: "zârti", ordinal: "thirtieth", ordinalPronunciation: "zârtiz" },
    
    // 31-40
    { number: 31, cardinal: "thirty-one", cardinalPronunciation: "zârti uân", ordinal: "thirty-first", ordinalPronunciation: "zârti fârst" },
    { number: 32, cardinal: "thirty-two", cardinalPronunciation: "zârti tú", ordinal: "thirty-second", ordinalPronunciation: "zârti sékond" },
    { number: 33, cardinal: "thirty-three", cardinalPronunciation: "zârti zríi", ordinal: "thirty-third", ordinalPronunciation: "zârti zârd" },
    { number: 34, cardinal: "thirty-four", cardinalPronunciation: "zârti fór", ordinal: "thirty-fourth", ordinalPronunciation: "zârti fôrz" },
    { number: 35, cardinal: "thirty-five", cardinalPronunciation: "zârti fáiv", ordinal: "thirty-fifth", ordinalPronunciation: "zârti fífz" },
    { number: 36, cardinal: "thirty-six", cardinalPronunciation: "zârti síks", ordinal: "thirty-sixth", ordinalPronunciation: "zârti síksz" },
    { number: 37, cardinal: "thirty-seven", cardinalPronunciation: "zârti séven", ordinal: "thirty-seventh", ordinalPronunciation: "zârti sévenz" },
    { number: 38, cardinal: "thirty-eight", cardinalPronunciation: "zârti êit", ordinal: "thirty-eighth", ordinalPronunciation: "zârti êitz" },
    { number: 39, cardinal: "thirty-nine", cardinalPronunciation: "zârti náin", ordinal: "thirty-ninth", ordinalPronunciation: "zârti náinz" },
    { number: 40, cardinal: "forty", cardinalPronunciation: "fórti", ordinal: "fortieth", ordinalPronunciation: "fórtiz" },
    
    // 41-50
    { number: 41, cardinal: "forty-one", cardinalPronunciation: "fórti uân", ordinal: "forty-first", ordinalPronunciation: "fórti fârst" },
    { number: 42, cardinal: "forty-two", cardinalPronunciation: "fórti tú", ordinal: "forty-second", ordinalPronunciation: "fórti sékond" },
    { number: 43, cardinal: "forty-three", cardinalPronunciation: "fórti zríi", ordinal: "forty-third", ordinalPronunciation: "fórti zârd" },
    { number: 44, cardinal: "forty-four", cardinalPronunciation: "fórti fór", ordinal: "forty-fourth", ordinalPronunciation: "fórti fôrz" },
    { number: 45, cardinal: "forty-five", cardinalPronunciation: "fórti fáiv", ordinal: "forty-fifth", ordinalPronunciation: "fórti fífz" },
    { number: 46, cardinal: "forty-six", cardinalPronunciation: "fórti síks", ordinal: "forty-sixth", ordinalPronunciation: "fórti síksz" },
    { number: 47, cardinal: "forty-seven", cardinalPronunciation: "fórti séven", ordinal: "forty-seventh", ordinalPronunciation: "fórti sévenz" },
    { number: 48, cardinal: "forty-eight", cardinalPronunciation: "fórti êit", ordinal: "forty-eighth", ordinalPronunciation: "fórti êitz" },
    { number: 49, cardinal: "forty-nine", cardinalPronunciation: "fórti náin", ordinal: "forty-ninth", ordinalPronunciation: "fórti náinz" },
    { number: 50, cardinal: "fifty", cardinalPronunciation: "fífti", ordinal: "fiftieth", ordinalPronunciation: "fíftiz" },
    
    // 51-60
    { number: 51, cardinal: "fifty-one", cardinalPronunciation: "fífti uân", ordinal: "fifty-first", ordinalPronunciation: "fífti fârst" },
    { number: 52, cardinal: "fifty-two", cardinalPronunciation: "fífti tú", ordinal: "fifty-second", ordinalPronunciation: "fífti sékond" },
    { number: 53, cardinal: "fifty-three", cardinalPronunciation: "fífti zríi", ordinal: "fifty-third", ordinalPronunciation: "fífti zârd" },
    { number: 54, cardinal: "fifty-four", cardinalPronunciation: "fífti fór", ordinal: "fifty-fourth", ordinalPronunciation: "fífti fôrz" },
    { number: 55, cardinal: "fifty-five", cardinalPronunciation: "fífti fáiv", ordinal: "fifty-fifth", ordinalPronunciation: "fífti fífz" },
    { number: 56, cardinal: "fifty-six", cardinalPronunciation: "fífti síks", ordinal: "fifty-sixth", ordinalPronunciation: "fífti síksz" },
    { number: 57, cardinal: "fifty-seven", cardinalPronunciation: "fífti séven", ordinal: "fifty-seventh", ordinalPronunciation: "fífti sévenz" },
    { number: 58, cardinal: "fifty-eight", cardinalPronunciation: "fífti êit", ordinal: "fifty-eighth", ordinalPronunciation: "fífti êitz" },
    { number: 59, cardinal: "fifty-nine", cardinalPronunciation: "fífti náin", ordinal: "fifty-ninth", ordinalPronunciation: "fífti náinz" },
    { number: 60, cardinal: "sixty", cardinalPronunciation: "síksti", ordinal: "sixtieth", ordinalPronunciation: "síkstiz" },
    
    // 61-70
    { number: 61, cardinal: "sixty-one", cardinalPronunciation: "síksti uân", ordinal: "sixty-first", ordinalPronunciation: "síksti fârst" },
    { number: 62, cardinal: "sixty-two", cardinalPronunciation: "síksti tú", ordinal: "sixty-second", ordinalPronunciation: "síksti sékond" },
    { number: 63, cardinal: "sixty-three", cardinalPronunciation: "síksti zríi", ordinal: "sixty-third", ordinalPronunciation: "síksti zârd" },
    { number: 64, cardinal: "sixty-four", cardinalPronunciation: "síksti fór", ordinal: "sixty-fourth", ordinalPronunciation: "síksti fôrz" },
    { number: 65, cardinal: "sixty-five", cardinalPronunciation: "síksti fáiv", ordinal: "sixty-fifth", ordinalPronunciation: "síksti fífz" },
    { number: 66, cardinal: "sixty-six", cardinalPronunciation: "síksti síks", ordinal: "sixty-sixth", ordinalPronunciation: "síksti síksz" },
    { number: 67, cardinal: "sixty-seven", cardinalPronunciation: "síksti séven", ordinal: "sixty-seventh", ordinalPronunciation: "síksti sévenz" },
    { number: 68, cardinal: "sixty-eight", cardinalPronunciation: "síksti êit", ordinal: "sixty-eighth", ordinalPronunciation: "síksti êitz" },
    { number: 69, cardinal: "sixty-nine", cardinalPronunciation: "síksti náin", ordinal: "sixty-ninth", ordinalPronunciation: "síksti náinz" },
    { number: 70, cardinal: "seventy", cardinalPronunciation: "séventi", ordinal: "seventieth", ordinalPronunciation: "séventiz" },
    
    // 71-80
    { number: 71, cardinal: "seventy-one", cardinalPronunciation: "séventi uân", ordinal: "seventy-first", ordinalPronunciation: "séventi fârst" },
    { number: 72, cardinal: "seventy-two", cardinalPronunciation: "séventi tú", ordinal: "seventy-second", ordinalPronunciation: "séventi sékond" },
    { number: 73, cardinal: "seventy-three", cardinalPronunciation: "séventi zríi", ordinal: "seventy-third", ordinalPronunciation: "séventi zârd" },
    { number: 74, cardinal: "seventy-four", cardinalPronunciation: "séventi fór", ordinal: "seventy-fourth", ordinalPronunciation: "séventi fôrz" },
    { number: 75, cardinal: "seventy-five", cardinalPronunciation: "séventi fáiv", ordinal: "seventy-fifth", ordinalPronunciation: "séventi fífz" },
    { number: 76, cardinal: "seventy-six", cardinalPronunciation: "séventi síks", ordinal: "seventy-sixth", ordinalPronunciation: "séventi síksz" },
    { number: 77, cardinal: "seventy-seven", cardinalPronunciation: "séventi séven", ordinal: "seventy-seventh", ordinalPronunciation: "séventi sévenz" },
    { number: 78, cardinal: "seventy-eight", cardinalPronunciation: "séventi êit", ordinal: "seventy-eighth", ordinalPronunciation: "séventi êitz" },
    { number: 79, cardinal: "seventy-nine", cardinalPronunciation: "séventi náin", ordinal: "seventy-ninth", ordinalPronunciation: "séventi náinz" },
    { number: 80, cardinal: "eighty", cardinalPronunciation: "êiti", ordinal: "eightieth", ordinalPronunciation: "êitiz" },
    
    // 81-90
    { number: 81, cardinal: "eighty-one", cardinalPronunciation: "êiti uân", ordinal: "eighty-first", ordinalPronunciation: "êiti fârst" },
    { number: 82, cardinal: "eighty-two", cardinalPronunciation: "êiti tú", ordinal: "eighty-second", ordinalPronunciation: "êiti sékond" },
    { number: 83, cardinal: "eighty-three", cardinalPronunciation: "êiti zríi", ordinal: "eighty-third", ordinalPronunciation: "êiti zârd" },
    { number: 84, cardinal: "eighty-four", cardinalPronunciation: "êiti fór", ordinal: "eighty-fourth", ordinalPronunciation: "êiti fôrz" },
    { number: 85, cardinal: "eighty-five", cardinalPronunciation: "êiti fáiv", ordinal: "eighty-fifth", ordinalPronunciation: "êiti fífz" },
    { number: 86, cardinal: "eighty-six", cardinalPronunciation: "êiti síks", ordinal: "eighty-sixth", ordinalPronunciation: "êiti síksz" },
    { number: 87, cardinal: "eighty-seven", cardinalPronunciation: "êiti séven", ordinal: "eighty-seventh", ordinalPronunciation: "êiti sévenz" },
    { number: 88, cardinal: "eighty-eight", cardinalPronunciation: "êiti êit", ordinal: "eighty-eighth", ordinalPronunciation: "êiti êitz" },
    { number: 89, cardinal: "eighty-nine", cardinalPronunciation: "êiti náin", ordinal: "eighty-ninth", ordinalPronunciation: "êiti náinz" },
    { number: 90, cardinal: "ninety", cardinalPronunciation: "náinti", ordinal: "ninetieth", ordinalPronunciation: "náintiz" },
    
    // 91-100
    { number: 91, cardinal: "ninety-one", cardinalPronunciation: "náinti uân", ordinal: "ninety-first", ordinalPronunciation: "náinti fârst" },
    { number: 92, cardinal: "ninety-two", cardinalPronunciation: "náinti tú", ordinal: "ninety-second", ordinalPronunciation: "náinti sékond" },
    { number: 93, cardinal: "ninety-three", cardinalPronunciation: "náinti zríi", ordinal: "ninety-third", ordinalPronunciation: "náinti zârd" },
    { number: 94, cardinal: "ninety-four", cardinalPronunciation: "náinti fór", ordinal: "ninety-fourth", ordinalPronunciation: "náinti fôrz" },
    { number: 95, cardinal: "ninety-five", cardinalPronunciation: "náinti fáiv", ordinal: "ninety-fifth", ordinalPronunciation: "náinti fífz" },
    { number: 96, cardinal: "ninety-six", cardinalPronunciation: "náinti síks", ordinal: "ninety-sixth", ordinalPronunciation: "náinti síksz" },
    { number: 97, cardinal: "ninety-seven", cardinalPronunciation: "náinti séven", ordinal: "ninety-seventh", ordinalPronunciation: "náinti sévenz" },
    { number: 98, cardinal: "ninety-eight", cardinalPronunciation: "náinti êit", ordinal: "ninety-eighth", ordinalPronunciation: "náinti êitz" },
    { number: 99, cardinal: "ninety-nine", cardinalPronunciation: "náinti náin", ordinal: "ninety-ninth", ordinalPronunciation: "náinti náinz" },
    { number: 100, cardinal: "one hundred", cardinalPronunciation: "uân rândred", ordinal: "one hundredth", ordinalPronunciation: "uân rândredz" },
  ];

  const groupedNumbers = [
    { title: "1-10", range: [1, 10] },
    { title: "11-20", range: [11, 20] },
    { title: "21-30", range: [21, 30] },
    { title: "31-40", range: [31, 40] },
    { title: "41-50", range: [41, 50] },
    { title: "51-60", range: [51, 60] },
    { title: "61-70", range: [61, 70] },
    { title: "71-80", range: [71, 80] },
    { title: "81-90", range: [81, 90] },
    { title: "91-100", range: [91, 100] },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Números em Inglês</h2>
        <p className="text-muted-foreground mt-1">Aprenda números cardinais e ordinais de 1 a 100</p>
      </div>

      <Tabs defaultValue="cardinal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cardinal">Cardinais (1, 2, 3...)</TabsTrigger>
          <TabsTrigger value="ordinal">Ordinais (1st, 2nd, 3rd...)</TabsTrigger>
        </TabsList>

        <TabsContent value="cardinal" className="space-y-4 mt-6">
          {groupedNumbers.map((group) => {
            const groupNumbers = numbers.filter(n => n.number >= group.range[0] && n.number <= group.range[1]);
            const isOpen = openSections.includes(group.title);

            return (
              <Collapsible key={group.title} open={isOpen} onOpenChange={() => toggleSection(group.title)}>
                <Card className="transition-smooth hover:shadow-md border-2 border-primary/20">
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{group.title}</CardTitle>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
                        {groupNumbers.map((item) => (
                          <div
                            key={`cardinal-${item.number}`}
                            className="rounded-lg border-2 border-primary/20 bg-gradient-primary/5 p-4 transition-smooth hover:shadow-md hover:scale-105"
                          >
                            <div className="flex flex-col items-center text-center space-y-2">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-white font-bold text-xl">
                                {item.number}
                              </div>
                              <div className="space-y-1 w-full">
                                <div className="flex items-center justify-center gap-2">
                                  <p className="font-bold text-lg">{item.cardinal}</p>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      playAudio(item.cardinal, `card-${item.number}`);
                                    }}
                                    disabled={loadingAudio === `card-${item.number}`}
                                  >
                                    <Volume2 className={`h-3 w-3 ${loadingAudio === `card-${item.number}` ? 'animate-pulse' : ''}`} />
                                  </Button>
                                </div>
                                <p className="text-sm font-mono text-primary font-semibold">
                                  {item.cardinalPronunciation}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </TabsContent>

        <TabsContent value="ordinal" className="space-y-4 mt-6">
          {groupedNumbers.map((group) => {
            const groupNumbers = numbers.filter(n => n.number >= group.range[0] && n.number <= group.range[1]);
            const isOpen = openSections.includes(group.title);

            return (
              <Collapsible key={group.title} open={isOpen} onOpenChange={() => toggleSection(group.title)}>
                <Card className="transition-smooth hover:shadow-md border-2 border-secondary/20">
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{group.title}</CardTitle>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
                        {groupNumbers.map((item) => (
                          <div
                            key={`ordinal-${item.number}`}
                            className="rounded-lg border-2 border-secondary/20 bg-gradient-secondary/5 p-4 transition-smooth hover:shadow-md hover:scale-105"
                          >
                            <div className="flex flex-col items-center text-center space-y-2">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-secondary text-white font-bold text-lg">
                                {item.number}º
                              </div>
                              <div className="space-y-1 w-full">
                                <div className="flex items-center justify-center gap-2">
                                  <p className="font-bold text-lg">{item.ordinal}</p>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      playAudio(item.ordinal, `ord-${item.number}`);
                                    }}
                                    disabled={loadingAudio === `ord-${item.number}`}
                                  >
                                    <Volume2 className={`h-3 w-3 ${loadingAudio === `ord-${item.number}` ? 'animate-pulse' : ''}`} />
                                  </Button>
                                </div>
                                <p className="text-sm font-mono text-secondary font-semibold">
                                  {item.ordinalPronunciation}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
};
