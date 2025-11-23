import { Volume2, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface LetterSound {
  sound: string;
  word: string;
  wordPronunciation: string;
  translation: string;
  image: string;
}

interface Letter {
  letter: string;
  pronunciation: string; // Nome da letra (A = Êi, B = Bí)
  sounds: LetterSound[];
}

export const Alphabet = () => {
  const [loadingAudio, setLoadingAudio] = useState<string | null>(null);
  const { toast } = useToast();

  // Load voices when component mounts
  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const playAudio = (text: string, key: string, isLetter: boolean = false) => {
    setLoadingAudio(key);
    
    try {
      if (!('speechSynthesis' in window)) {
        throw new Error('Speech synthesis not supported');
      }

      // For single letters, spell them out phonetically to avoid "Capital X"
      let textToSpeak = text;
      if (isLetter && text.length === 1) {
        // Use lowercase to avoid "Capital" prefix
        textToSpeak = text.toLowerCase();
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
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

  const alphabet: Letter[] = [
    {
      letter: "A",
      pronunciation: "Êi",
      sounds: [
        { sound: "Êi", word: "Cake", wordPronunciation: "kêik", translation: "bolo", image: "🎂" },
        { sound: "É", word: "Cat", wordPronunciation: "két", translation: "gato", image: "🐱" },
      ]
    },
    {
      letter: "B",
      pronunciation: "Bí",
      sounds: [
        { sound: "Bã", word: "Ball", wordPronunciation: "ból", translation: "bola", image: "⚽" },
        { sound: "Bã", word: "Book", wordPronunciation: "búk", translation: "livro", image: "📚" },
      ]
    },
    {
      letter: "C",
      pronunciation: "Cí",
      sounds: [
        { sound: "Kã", word: "Cat", wordPronunciation: "két", translation: "gato", image: "🐱" },
        { sound: "Sã", word: "City", wordPronunciation: "síti", translation: "cidade", image: "🏙️" },
      ]
    },
    {
      letter: "D",
      pronunciation: "Dí",
      sounds: [
        { sound: "Dã", word: "Dog", wordPronunciation: "dóg", translation: "cachorro", image: "🐕" },
        { sound: "Dã", word: "Door", wordPronunciation: "dór", translation: "porta", image: "🚪" },
      ]
    },
    {
      letter: "E",
      pronunciation: "Í",
      sounds: [
        { sound: "Í", word: "Egg", wordPronunciation: "ég", translation: "ovo", image: "🥚" },
        { sound: "Í", word: "Elephant", wordPronunciation: "élefent", translation: "elefante", image: "🐘" },
      ]
    },
    {
      letter: "F",
      pronunciation: "Éf",
      sounds: [
        { sound: "Fã", word: "Fish", wordPronunciation: "fích", translation: "peixe", image: "🐟" },
        { sound: "Fã", word: "Flower", wordPronunciation: "fláuer", translation: "flor", image: "🌸" },
      ]
    },
    {
      letter: "G",
      pronunciation: "Djí",
      sounds: [
        { sound: "Gã", word: "Girl", wordPronunciation: "gârl", translation: "menina", image: "👧" },
        { sound: "Djã", word: "Giraffe", wordPronunciation: "djiráf", translation: "girafa", image: "🦒" },
      ]
    },
    {
      letter: "H",
      pronunciation: "Êitch",
      sounds: [
        { sound: "Rã", word: "House", wordPronunciation: "ráus", translation: "casa", image: "🏠" },
        { sound: "Rã", word: "Horse", wordPronunciation: "rórss", translation: "cavalo", image: "🐴" },
      ]
    },
    {
      letter: "I",
      pronunciation: "Ái",
      sounds: [
        { sound: "Ái", word: "Ice", wordPronunciation: "áis", translation: "gelo", image: "🧊" },
        { sound: "Í", word: "Igloo", wordPronunciation: "íglu", translation: "iglu", image: "⛺" },
      ]
    },
    {
      letter: "J",
      pronunciation: "Djêi",
      sounds: [
        { sound: "Djã", word: "Juice", wordPronunciation: "djúss", translation: "suco", image: "🧃" },
        { sound: "Djã", word: "Jump", wordPronunciation: "djâmp", translation: "pular", image: "🦘" },
      ]
    },
    {
      letter: "K",
      pronunciation: "Kêi",
      sounds: [
        { sound: "Kã", word: "King", wordPronunciation: "kíng", translation: "rei", image: "👑" },
        { sound: "Kã", word: "Key", wordPronunciation: "kí", translation: "chave", image: "🔑" },
      ]
    },
    {
      letter: "L",
      pronunciation: "Él",
      sounds: [
        { sound: "Lã", word: "Lion", wordPronunciation: "láion", translation: "leão", image: "🦁" },
        { sound: "Lã", word: "Lemon", wordPronunciation: "lémon", translation: "limão", image: "🍋" },
      ]
    },
    {
      letter: "M",
      pronunciation: "Ém",
      sounds: [
        { sound: "Mã", word: "Moon", wordPronunciation: "múun", translation: "lua", image: "🌙" },
        { sound: "Mã", word: "Mouse", wordPronunciation: "máus", translation: "rato", image: "🐭" },
      ]
    },
    {
      letter: "N",
      pronunciation: "Én",
      sounds: [
        { sound: "Nã", word: "Nose", wordPronunciation: "nôuz", translation: "nariz", image: "👃" },
        { sound: "Nã", word: "Nurse", wordPronunciation: "nârss", translation: "enfermeiro", image: "👨‍⚕️" },
      ]
    },
    {
      letter: "O",
      pronunciation: "Ôu",
      sounds: [
        { sound: "Ó", word: "Orange", wordPronunciation: "órendj", translation: "laranja", image: "🍊" },
        { sound: "Ôu", word: "Ocean", wordPronunciation: "ôuchen", translation: "oceano", image: "🌊" },
      ]
    },
    {
      letter: "P",
      pronunciation: "Pí",
      sounds: [
        { sound: "Pã", word: "Pen", wordPronunciation: "pén", translation: "caneta", image: "🖊️" },
        { sound: "Pã", word: "Pizza", wordPronunciation: "pítza", translation: "pizza", image: "🍕" },
      ]
    },
    {
      letter: "Q",
      pronunciation: "Kiú",
      sounds: [
        { sound: "Kuã", word: "Queen", wordPronunciation: "kuíin", translation: "rainha", image: "👸" },
        { sound: "Kuã", word: "Question", wordPronunciation: "kuéstchion", translation: "pergunta", image: "❓" },
      ]
    },
    {
      letter: "R",
      pronunciation: "Ár",
      sounds: [
        { sound: "Rã", word: "Rabbit", wordPronunciation: "rébit", translation: "coelho", image: "🐰" },
        { sound: "Rã", word: "Robot", wordPronunciation: "rôubot", translation: "robô", image: "🤖" },
      ]
    },
    {
      letter: "S",
      pronunciation: "Éss",
      sounds: [
        { sound: "Sã", word: "Sun", wordPronunciation: "sân", translation: "sol", image: "☀️" },
        { sound: "Zã", word: "Rose", wordPronunciation: "rôuz", translation: "rosa", image: "🌹" },
      ]
    },
    {
      letter: "T",
      pronunciation: "Tí",
      sounds: [
        { sound: "Tã", word: "Tree", wordPronunciation: "tríi", translation: "árvore", image: "🌳" },
        { sound: "Tã", word: "Tiger", wordPronunciation: "táiger", translation: "tigre", image: "🐯" },
      ]
    },
    {
      letter: "U",
      pronunciation: "Iú",
      sounds: [
        { sound: "Iú", word: "Uniform", wordPronunciation: "iúniform", translation: "uniforme", image: "👔" },
        { sound: "Â", word: "Umbrella", wordPronunciation: "âmbréla", translation: "guarda-chuva", image: "☂️" },
      ]
    },
    {
      letter: "V",
      pronunciation: "Ví",
      sounds: [
        { sound: "Vã", word: "Violin", wordPronunciation: "váiolin", translation: "violino", image: "🎻" },
        { sound: "Vã", word: "Volcano", wordPronunciation: "volkêino", translation: "vulcão", image: "🌋" },
      ]
    },
    {
      letter: "W",
      pronunciation: "Dâbliu",
      sounds: [
        { sound: "Uã", word: "Water", wordPronunciation: "uóter", translation: "água", image: "💧" },
        { sound: "Uã", word: "Watch", wordPronunciation: "uótch", translation: "relógio", image: "⌚" },
      ]
    },
    {
      letter: "X",
      pronunciation: "Éks",
      sounds: [
        { sound: "Ks", word: "Box", wordPronunciation: "bóks", translation: "caixa", image: "📦" },
        { sound: "Ks", word: "Fox", wordPronunciation: "fóks", translation: "raposa", image: "🦊" },
      ]
    },
    {
      letter: "Y",
      pronunciation: "Uái",
      sounds: [
        { sound: "Iã", word: "Yellow", wordPronunciation: "iélou", translation: "amarelo", image: "💛" },
        { sound: "Ái", word: "Sky", wordPronunciation: "skái", translation: "céu", image: "🌌" },
      ]
    },
    {
      letter: "Z",
      pronunciation: "Zí",
      sounds: [
        { sound: "Zã", word: "Zebra", wordPronunciation: "zíbra", translation: "zebra", image: "🦓" },
        { sound: "Zã", word: "Zoo", wordPronunciation: "zúu", translation: "zoológico", image: "🦁" },
      ]
    },
  ];

  const digraphs = [
    { digraph: "CH", sound: "tch", example: "church (tchârtch)", type: "Consonantal" },
    { digraph: "SH", sound: "ch", example: "ship (chip)", type: "Consonantal" },
    { digraph: "TH", sound: "z/t", example: "think (zínk), this (dís)", type: "Consonantal" },
    { digraph: "AI", sound: "êi", example: "rain (rêin)", type: "Vocálico" },
    { digraph: "AY", sound: "êi", example: "day (dêi)", type: "Vocálico" },
    { digraph: "EI", sound: "ái/êi", example: "either (íder), eight (êit)", type: "Vocálico" },
    { digraph: "IE", sound: "i/ái", example: "piece (píis), pie (pái)", type: "Vocálico" },
    { digraph: "OO", sound: "u/u", example: "food (fúud), book (búk)", type: "Vocálico" },
    { digraph: "OU", sound: "áu", example: "house (ráus)", type: "Vocálico" },
    { digraph: "OW", sound: "áu/ôu", example: "cow (káu), show (chôu)", type: "Vocálico" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Alfabeto e Dígrafos</h2>
        <p className="text-muted-foreground mt-1">Aprenda cada letra, sua pronúncia e seus sons</p>
      </div>

      <Tabs defaultValue="alphabet" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="alphabet">Alfabeto Completo</TabsTrigger>
          <TabsTrigger value="digraphs">Dígrafos</TabsTrigger>
        </TabsList>

        <TabsContent value="alphabet" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {alphabet.map((item, index) => (
              <Card key={index} className="transition-smooth hover:shadow-md border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Letter Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-primary text-3xl font-bold text-white">
                          {item.letter}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Letra</p>
                          <p className="text-xl font-bold text-primary font-mono">{item.pronunciation}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => playAudio(item.letter, `letter-${item.letter}`, true)}
                        disabled={loadingAudio === `letter-${item.letter}`}
                      >
                        <Volume2 className={`h-5 w-5 ${loadingAudio === `letter-${item.letter}` ? 'animate-pulse' : ''}`} />
                      </Button>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Sounds */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-muted-foreground">Sons:</p>
                      {item.sounds.map((soundItem, soundIndex) => (
                        <div key={soundIndex} className="space-y-2 p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{soundItem.image}</span>
                              <div>
                                <p className="font-bold text-lg">{soundItem.word}</p>
                                <p className="text-sm text-primary font-mono">{soundItem.wordPronunciation}</p>
                                <p className="text-xs text-muted-foreground">{soundItem.translation}</p>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => playAudio(soundItem.word, `word-${item.letter}-${soundIndex}`)}
                              disabled={loadingAudio === `word-${item.letter}-${soundIndex}`}
                            >
                              <Volume2 className={`h-4 w-4 ${loadingAudio === `word-${item.letter}-${soundIndex}` ? 'animate-pulse' : ''}`} />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">
                              {item.letter} diz "{soundItem.sound}"
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="digraphs" className="space-y-4 mt-6">
          <Card className="border-info/20 bg-info/5 mb-6">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-semibold">Dígrafos</p>
                  <p className="text-sm text-muted-foreground">
                    Dígrafos são combinações de duas letras que produzem um único som.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {digraphs.map((item, index) => (
              <Card key={index} className="transition-smooth hover:shadow-md hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-secondary text-xl font-bold text-white">
                      {item.digraph}
                    </div>
                    <Badge variant={item.type === "Vocálico" ? "default" : "secondary"}>
                      {item.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Som:</p>
                      <p className="text-lg font-mono font-bold text-primary">{item.sound}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Exemplo:</p>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-muted px-3 py-1 font-medium">
                          {item.example}
                        </span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => {
                            const word = item.example.split(' ')[0];
                            playAudio(word, `digraph-${item.digraph}`);
                          }}
                          disabled={loadingAudio === `digraph-${item.digraph}`}
                        >
                          <Volume2 className={`h-4 w-4 ${loadingAudio === `digraph-${item.digraph}` ? 'animate-pulse' : ''}`} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
