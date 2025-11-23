import { Volume2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Import verb illustrations
import beImg from "@/assets/verbs/be.png";
import haveImg from "@/assets/verbs/have.png";
import doImg from "@/assets/verbs/do.png";
import sayImg from "@/assets/verbs/say.png";
import goImg from "@/assets/verbs/go.png";
import getImg from "@/assets/verbs/get.png";
import makeImg from "@/assets/verbs/make.png";
import knowImg from "@/assets/verbs/know.png";
import thinkImg from "@/assets/verbs/think.png";
import takeImg from "@/assets/verbs/take.png";
import seeImg from "@/assets/verbs/see.png";
import comeImg from "@/assets/verbs/come.png";
import wantImg from "@/assets/verbs/want.png";
import lookImg from "@/assets/verbs/look.png";
import useImg from "@/assets/verbs/use.png";
import findImg from "@/assets/verbs/find.png";
import giveImg from "@/assets/verbs/give.png";
import tellImg from "@/assets/verbs/tell.png";
import workImg from "@/assets/verbs/work.png";
import callImg from "@/assets/verbs/call.png";
import tryImg from "@/assets/verbs/try.png";
import askImg from "@/assets/verbs/ask.png";
import needImg from "@/assets/verbs/need.png";
import feelImg from "@/assets/verbs/feel.png";

interface Verb {
  infinitive: string;
  pronunciation: string;
  translation: string;
  image: string;
  present: string;
  past: string;
  future: string;
  example: string;
}

export const ImportantVerbs = () => {
  const [loadingAudio, setLoadingAudio] = useState<string | null>(null);
  const [openPresent, setOpenPresent] = useState(true);
  const [openPast, setOpenPast] = useState(false);
  const [openFuture, setOpenFuture] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const playAudio = async (word: string) => {
    setLoadingAudio(word);
    
    try {
      if (!('speechSynthesis' in window)) {
        throw new Error('Speech synthesis not supported');
      }

      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => 
        voice.lang === 'en-US' || voice.lang === 'en_US'
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => {
        setLoadingAudio(null);
      };

      utterance.onerror = () => {
        setLoadingAudio(null);
      };

      speechSynthesis.speak(utterance);
    } catch (error) {
      toast({
        title: "Erro ao reproduzir áudio",
        description: "Seu navegador não suporta síntese de voz.",
        variant: "destructive",
      });
      setLoadingAudio(null);
    }
  };

  const verbs: Verb[] = [
    {
      infinitive: "Be",
      pronunciation: "bi",
      translation: "ser/estar",
      image: beImg,
      present: "am / is / are",
      past: "was / were",
      future: "will be",
      example: "I am a doctor. / I was late. / I will be home later."
    },
    {
      infinitive: "Have",
      pronunciation: "rév",
      translation: "ter",
      image: haveImg,
      present: "have / has",
      past: "had",
      future: "will have",
      example: "I have a car. / I had breakfast. / I will have lunch soon."
    },
    {
      infinitive: "Do",
      pronunciation: "du",
      translation: "fazer",
      image: doImg,
      present: "do / does",
      past: "did",
      future: "will do",
      example: "I do my homework. / I did it yesterday. / I will do it tomorrow."
    },
    {
      infinitive: "Say",
      pronunciation: "sêi",
      translation: "dizer",
      image: sayImg,
      present: "say / says",
      past: "said",
      future: "will say",
      example: "I say hello. / I said goodbye. / I will say thanks."
    },
    {
      infinitive: "Go",
      pronunciation: "gou",
      translation: "ir",
      image: goImg,
      present: "go / goes",
      past: "went",
      future: "will go",
      example: "I go to school. / I went yesterday. / I will go tomorrow."
    },
    {
      infinitive: "Get",
      pronunciation: "guét",
      translation: "conseguir/pegar",
      image: getImg,
      present: "get / gets",
      past: "got",
      future: "will get",
      example: "I get up early. / I got a gift. / I will get it later."
    },
    {
      infinitive: "Make",
      pronunciation: "mêik",
      translation: "fazer/criar",
      image: makeImg,
      present: "make / makes",
      past: "made",
      future: "will make",
      example: "I make coffee. / I made dinner. / I will make a cake."
    },
    {
      infinitive: "Know",
      pronunciation: "nóu",
      translation: "saber/conhecer",
      image: knowImg,
      present: "know / knows",
      past: "knew",
      future: "will know",
      example: "I know him. / I knew the answer. / I will know soon."
    },
    {
      infinitive: "Think",
      pronunciation: "tínk",
      translation: "pensar",
      image: thinkImg,
      present: "think / thinks",
      past: "thought",
      future: "will think",
      example: "I think so. / I thought about it. / I will think carefully."
    },
    {
      infinitive: "Take",
      pronunciation: "têik",
      translation: "pegar/levar",
      image: takeImg,
      present: "take / takes",
      past: "took",
      future: "will take",
      example: "I take the bus. / I took a photo. / I will take it with me."
    },
    {
      infinitive: "See",
      pronunciation: "síi",
      translation: "ver",
      image: seeImg,
      present: "see / sees",
      past: "saw",
      future: "will see",
      example: "I see you. / I saw the movie. / I will see you later."
    },
    {
      infinitive: "Come",
      pronunciation: "kâm",
      translation: "vir",
      image: comeImg,
      present: "come / comes",
      past: "came",
      future: "will come",
      example: "I come here often. / I came yesterday. / I will come tomorrow."
    },
    {
      infinitive: "Want",
      pronunciation: "uónt",
      translation: "querer",
      image: wantImg,
      present: "want / wants",
      past: "wanted",
      future: "will want",
      example: "I want pizza. / I wanted to go. / I will want more."
    },
    {
      infinitive: "Look",
      pronunciation: "lúk",
      translation: "olhar",
      image: lookImg,
      present: "look / looks",
      past: "looked",
      future: "will look",
      example: "I look at the sky. / I looked everywhere. / I will look later."
    },
    {
      infinitive: "Use",
      pronunciation: "iúz",
      translation: "usar",
      image: useImg,
      present: "use / uses",
      past: "used",
      future: "will use",
      example: "I use my phone. / I used a pen. / I will use it tomorrow."
    },
    {
      infinitive: "Find",
      pronunciation: "fáind",
      translation: "encontrar",
      image: findImg,
      present: "find / finds",
      past: "found",
      future: "will find",
      example: "I find it easy. / I found my keys. / I will find a solution."
    },
    {
      infinitive: "Give",
      pronunciation: "guív",
      translation: "dar",
      image: giveImg,
      present: "give / gives",
      past: "gave",
      future: "will give",
      example: "I give presents. / I gave her a book. / I will give you a call."
    },
    {
      infinitive: "Tell",
      pronunciation: "tél",
      translation: "contar/dizer",
      image: tellImg,
      present: "tell / tells",
      past: "told",
      future: "will tell",
      example: "I tell stories. / I told him the truth. / I will tell you later."
    },
    {
      infinitive: "Work",
      pronunciation: "uôrk",
      translation: "trabalhar",
      image: workImg,
      present: "work / works",
      past: "worked",
      future: "will work",
      example: "I work at home. / I worked yesterday. / I will work tomorrow."
    },
    {
      infinitive: "Call",
      pronunciation: "kól",
      translation: "ligar/chamar",
      image: callImg,
      present: "call / calls",
      past: "called",
      future: "will call",
      example: "I call my mom daily. / I called her yesterday. / I will call you back."
    },
    {
      infinitive: "Try",
      pronunciation: "tráai",
      translation: "tentar",
      image: tryImg,
      present: "try / tries",
      past: "tried",
      future: "will try",
      example: "I try my best. / I tried again. / I will try harder."
    },
    {
      infinitive: "Ask",
      pronunciation: "ásk",
      translation: "perguntar",
      image: askImg,
      present: "ask / asks",
      past: "asked",
      future: "will ask",
      example: "I ask questions. / I asked him for help. / I will ask later."
    },
    {
      infinitive: "Need",
      pronunciation: "níid",
      translation: "precisar",
      image: needImg,
      present: "need / needs",
      past: "needed",
      future: "will need",
      example: "I need water. / I needed help. / I will need more time."
    },
    {
      infinitive: "Feel",
      pronunciation: "fíil",
      translation: "sentir",
      image: feelImg,
      present: "feel / feels",
      past: "felt",
      future: "will feel",
      example: "I feel happy. / I felt sad yesterday. / I will feel better soon."
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
          <BookOpen className="h-10 w-10 text-primary" />
          Verbos Importantes / Important Verbs
        </h1>
        <p className="text-muted-foreground text-lg">
          Aprenda os verbos mais usados em inglês com pronúncia, tradução e exemplos
        </p>
      </div>

      <Tabs defaultValue="present" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="present">Presente / Present</TabsTrigger>
          <TabsTrigger value="past">Passado / Past</TabsTrigger>
          <TabsTrigger value="future">Futuro / Future</TabsTrigger>
        </TabsList>

        <TabsContent value="present" className="mt-6">
          <Collapsible open={openPresent} onOpenChange={setOpenPresent}>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer">
                    <CardTitle className="text-2xl text-primary">
                      Presente Simples / Present Simple
                    </CardTitle>
                    {openPresent ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </div>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {verbs.map((verb) => (
                      <Card key={`present-${verb.infinitive}`} className="overflow-hidden hover:shadow-lg transition-smooth">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <img 
                              src={verb.image} 
                              alt={verb.infinitive}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                             <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-foreground">{verb.infinitive}</h3>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => playAudio(verb.present)}
                                  disabled={loadingAudio === verb.present}
                                  className="h-8 w-8 p-0"
                                >
                                  <Volume2 className={`h-4 w-4 ${loadingAudio === verb.present ? 'animate-pulse' : ''}`} />
                                </Button>
                              </div>
                              <p className="text-sm text-muted-foreground">/{verb.pronunciation}/</p>
                              <p className="text-sm font-medium text-accent">{verb.translation}</p>
                              <div className="pt-2 border-t border-border">
                                <p className="text-xs text-muted-foreground mb-1">Presente:</p>
                                <p className="text-sm font-semibold text-primary">{verb.present}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Exemplo:</p>
                            <p className="text-sm">{verb.example.split('/')[0].trim()}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <Collapsible open={openPast} onOpenChange={setOpenPast}>
            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer">
                    <CardTitle className="text-2xl text-secondary">
                      Passado Simples / Past Simple
                    </CardTitle>
                    {openPast ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </div>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {verbs.map((verb) => (
                      <Card key={`past-${verb.infinitive}`} className="overflow-hidden hover:shadow-lg transition-smooth">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <img 
                              src={verb.image} 
                              alt={verb.infinitive}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-foreground">{verb.infinitive}</h3>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => playAudio(verb.past)}
                                  disabled={loadingAudio === verb.past}
                                  className="h-8 w-8 p-0"
                                >
                                  <Volume2 className={`h-4 w-4 ${loadingAudio === verb.past ? 'animate-pulse' : ''}`} />
                                </Button>
                              </div>
                              <p className="text-sm text-muted-foreground">/{verb.pronunciation}/</p>
                              <p className="text-sm font-medium text-accent">{verb.translation}</p>
                              <div className="pt-2 border-t border-border">
                                <p className="text-xs text-muted-foreground mb-1">Passado:</p>
                                <p className="text-sm font-semibold text-secondary">{verb.past}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Exemplo:</p>
                            <p className="text-sm">{verb.example.split('/')[1].trim()}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </TabsContent>

        <TabsContent value="future" className="mt-6">
          <Collapsible open={openFuture} onOpenChange={setOpenFuture}>
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer">
                    <CardTitle className="text-2xl text-accent">
                      Futuro com WILL / Future with WILL
                    </CardTitle>
                    {openFuture ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </div>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {verbs.map((verb) => (
                      <Card key={`future-${verb.infinitive}`} className="overflow-hidden hover:shadow-lg transition-smooth">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <img 
                              src={verb.image} 
                              alt={verb.infinitive}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-foreground">{verb.infinitive}</h3>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => playAudio(verb.future)}
                                  disabled={loadingAudio === verb.future}
                                  className="h-8 w-8 p-0"
                                >
                                  <Volume2 className={`h-4 w-4 ${loadingAudio === verb.future ? 'animate-pulse' : ''}`} />
                                </Button>
                              </div>
                              <p className="text-sm text-muted-foreground">/{verb.pronunciation}/</p>
                              <p className="text-sm font-medium text-accent">{verb.translation}</p>
                              <div className="pt-2 border-t border-border">
                                <p className="text-xs text-muted-foreground mb-1">Futuro:</p>
                                <p className="text-sm font-semibold text-accent">{verb.future}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Exemplo:</p>
                            <p className="text-sm">{verb.example.split('/')[2].trim()}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </TabsContent>
      </Tabs>
    </div>
  );
};
