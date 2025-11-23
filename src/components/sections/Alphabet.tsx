import { Volume2, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Alphabet = () => {
  const vowels = [
    { letter: "A", sounds: ["/eɪ/", "/æ/", "/ɑː/"], examples: ["cake", "cat", "father"] },
    { letter: "E", sounds: ["/iː/", "/e/", "/ə/"], examples: ["he", "bed", "happen"] },
    { letter: "I", sounds: ["/aɪ/", "/ɪ/"], examples: ["ice", "sit"] },
    { letter: "O", sounds: ["/oʊ/", "/ɒ/", "/uː/"], examples: ["go", "hot", "do"] },
    { letter: "U", sounds: ["/juː/", "/ʌ/", "/ʊ/"], examples: ["use", "cup", "put"] },
  ];

  const digraphs = [
    { digraph: "CH", sound: "/tʃ/", example: "church", type: "Consonantal" },
    { digraph: "SH", sound: "/ʃ/", example: "ship", type: "Consonantal" },
    { digraph: "TH", sound: "/θ/, /ð/", example: "think, this", type: "Consonantal" },
    { digraph: "AI", sound: "/eɪ/", example: "rain", type: "Vocálico" },
    { digraph: "AY", sound: "/eɪ/", example: "day", type: "Vocálico" },
    { digraph: "EI", sound: "/aɪ/, /eɪ/", example: "either, eight", type: "Vocálico" },
    { digraph: "IE", sound: "/iː/, /aɪ/", example: "piece, pie", type: "Vocálico" },
    { digraph: "OO", sound: "/uː/, /ʊ/", example: "food, book", type: "Vocálico" },
    { digraph: "OU", sound: "/aʊ/", example: "house", type: "Vocálico" },
    { digraph: "OW", sound: "/aʊ/, /oʊ/", example: "cow, show", type: "Vocálico" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Alfabeto e Dígrafos</h2>
        <p className="text-muted-foreground mt-1">Aprenda todos os sons do inglês</p>
      </div>

      <Tabs defaultValue="vowels" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vowels">Vogais</TabsTrigger>
          <TabsTrigger value="consonants">Consoantes</TabsTrigger>
          <TabsTrigger value="digraphs">Dígrafos</TabsTrigger>
        </TabsList>

        <TabsContent value="vowels" className="space-y-4 mt-6">
          {vowels.map((item, index) => (
            <Card key={index} className="transition-smooth hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-primary text-3xl font-bold text-white flex-shrink-0">
                    {item.letter}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Vogal</Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-primary mb-2">Sons possíveis:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.sounds.map((sound, i) => (
                          <Badge key={i} variant="outline" className="text-base">
                            {sound}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-secondary mb-2">Exemplos:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-muted px-3 py-1 text-sm font-medium"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="consonants" className="space-y-4 mt-6">
          <Card className="border-info/20 bg-info/5">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-semibold">Consoantes do Inglês</p>
                  <p className="text-sm text-muted-foreground">
                    O inglês possui 21 letras consonantais: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z. 
                    Cada consoante pode ter sons diferentes dependendo do contexto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="digraphs" className="space-y-4 mt-6">
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
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Volume2 className="h-4 w-4" />
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
