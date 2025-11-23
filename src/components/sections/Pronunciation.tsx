import { Mic, Volume2, RotateCw, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export const Pronunciation = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  const currentPhrase = "Hello, how are you today?";
  const phonetic = "relôu, ráu ar iu tudêi?";

  const handleRecord = () => {
    setIsRecording(!isRecording);
    
    // Simular feedback após gravação
    if (isRecording) {
      setTimeout(() => {
        setFeedback(Math.random() > 0.3 ? "correct" : "incorrect");
      }, 500);
    } else {
      setFeedback(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Prática de Pronúncia</h2>
        <p className="text-muted-foreground mt-1">Grave sua voz e receba feedback em tempo real</p>
      </div>

      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Frase do Dia</span>
            <Badge variant="secondary">Intermediário</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4 py-8">
            <p className="text-3xl font-bold text-secondary">{currentPhrase}</p>
            <p className="text-lg text-muted-foreground">{phonetic}</p>
            
            <Button variant="outline" size="lg" className="gap-2">
              <Volume2 className="h-5 w-5" />
              Ouvir Pronúncia
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              onClick={handleRecord}
              className={`h-24 w-24 rounded-full ${isRecording ? "animate-pulse-soft" : ""}`}
            >
              <Mic className="h-8 w-8" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isRecording ? "Gravando... Fale agora!" : "Clique para gravar sua pronúncia"}
            </p>
          </div>

          {feedback && (
            <Card className={`border-2 ${
              feedback === "correct" 
                ? "border-success/50 bg-success/5" 
                : "border-destructive/50 bg-destructive/5"
            } animate-scale-in`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {feedback === "correct" ? (
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                  )}
                  <div className="space-y-2 flex-1">
                    <h4 className="font-semibold">
                      {feedback === "correct" ? "Excelente!" : "Vamos tentar novamente"}
                    </h4>
                    {feedback === "correct" ? (
                      <p className="text-sm text-muted-foreground">
                        Sua pronúncia está perfeita! Continue assim.
                      </p>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Atenção aos seguintes pontos:
                        </p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Ênfase na sílaba "hel" de "hello"</li>
                          <li>O "r" em "are" deve ser mais suave</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <RotateCw className="h-4 w-4" />
                    Tentar Novamente
                  </Button>
                  <Button variant="outline" size="sm">
                    Próxima Frase
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Precisão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">85%</div>
            <p className="text-sm text-muted-foreground">Hoje</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Frases Praticadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">23</div>
            <p className="text-sm text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tempo de Prática</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">45min</div>
            <p className="text-sm text-muted-foreground">Hoje</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
