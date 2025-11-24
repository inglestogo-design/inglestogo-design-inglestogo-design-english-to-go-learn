import { Mic, Volume2, RotateCw, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { pronunciationPhrases } from "@/data/pronunciationPhrases";
import { useToast } from "@/hooks/use-toast";

export const Pronunciation = () => {
  const [selectedLevel, setSelectedLevel] = useState<'basic' | 'intermediate' | 'advanced'>('basic');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [accuracyScore, setAccuracyScore] = useState<number | null>(null);
  const { isRecording, transcript, startRecording, stopRecording, isSupported } = useSpeechRecognition();
  const { toast } = useToast();

  const filteredPhrases = pronunciationPhrases.filter(p => p.level === selectedLevel);
  const currentPhrase = filteredPhrases[currentPhraseIndex];

  useEffect(() => {
    setCurrentPhraseIndex(0);
    setFeedback(null);
  }, [selectedLevel]);

  useEffect(() => {
    if (transcript && !isRecording) {
      checkPronunciation(transcript);
    }
  }, [transcript, isRecording]);

  const checkPronunciation = (spokenText: string) => {
    const normalized = (text: string) => text.toLowerCase().replace(/[.,!?]/g, '').trim();
    const spokenNormalized = normalized(spokenText);
    const expectedNormalized = normalized(currentPhrase.english);

    const words = expectedNormalized.split(' ');
    const spokenWords = spokenNormalized.split(' ');
    
    let matchCount = 0;
    words.forEach(word => {
      if (spokenWords.some(sw => sw.includes(word) || word.includes(sw))) {
        matchCount++;
      }
    });

    const accuracy = Math.round((matchCount / words.length) * 100);
    setAccuracyScore(accuracy);

    if (accuracy >= 70) {
      setFeedback("correct");
      toast({
        title: "Excelente! / Excellent!",
        description: `${accuracy}% de precisão / accuracy`,
      });
    } else {
      setFeedback("incorrect");
      toast({
        title: "Vamos tentar novamente / Let's try again",
        description: `${accuracy}% de precisão / accuracy`,
        variant: "destructive",
      });
    }
  };

  const handleRecord = () => {
    if (!isSupported) {
      toast({
        title: "Não suportado / Not supported",
        description: "Seu navegador não suporta reconhecimento de voz / Your browser does not support speech recognition",
        variant: "destructive",
      });
      return;
    }

    if (isRecording) {
      stopRecording();
    } else {
      setFeedback(null);
      setAccuracyScore(null);
      startRecording();
    }
  };

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentPhrase.english);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextPhrase = () => {
    setCurrentPhraseIndex((prev) => (prev + 1) % filteredPhrases.length);
    setFeedback(null);
    setAccuracyScore(null);
  };

  const handleTryAgain = () => {
    setFeedback(null);
    setAccuracyScore(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary"><strong>Prática de Pronúncia</strong> / Pronunciation Practice</h2>
        <p className="text-muted-foreground mt-1">Grave sua voz e receba feedback em tempo real / Record your voice and get real-time feedback</p>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Total:</strong> {pronunciationPhrases.length} frases / phrases 
          ({pronunciationPhrases.filter(p => p.level === 'basic').length} básicas, 
          {pronunciationPhrases.filter(p => p.level === 'intermediate').length} intermediárias, 
          {pronunciationPhrases.filter(p => p.level === 'advanced').length} avançadas)
        </p>
      </div>

      <Tabs value={selectedLevel} onValueChange={(v) => setSelectedLevel(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">
            <strong>Básico</strong> / Basic
          </TabsTrigger>
          <TabsTrigger value="intermediate">
            <strong>Intermediário</strong> / Intermediate
          </TabsTrigger>
          <TabsTrigger value="advanced">
            <strong>Avançado</strong> / Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedLevel} className="mt-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span><strong>Frase</strong> {currentPhraseIndex + 1} / {filteredPhrases.length}</span>
                <Badge variant="secondary">
                  {selectedLevel === 'basic' && '<strong>Básico</strong> / Basic'}
                  {selectedLevel === 'intermediate' && '<strong>Intermediário</strong> / Intermediate'}
                  {selectedLevel === 'advanced' && '<strong>Avançado</strong> / Advanced'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4 py-8">
                <p className="text-3xl font-bold text-secondary">{currentPhrase.english}</p>
                <p className="text-lg text-muted-foreground">{currentPhrase.phonetic}</p>
                
                <Button variant="outline" size="lg" className="gap-2" onClick={playAudio}>
                  <Volume2 className="h-5 w-5" />
                  <strong>Ouvir Pronúncia</strong> / Listen
                </Button>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant={isRecording ? "destructive" : "default"}
                  onClick={handleRecord}
                  disabled={!isSupported}
                  className={`h-24 w-24 rounded-full ${isRecording ? "animate-pulse-soft" : ""}`}
                >
                  <Mic className="h-8 w-8" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {isRecording ? (
                    <><strong>Gravando...</strong> / Recording...</>
                  ) : (
                    <><strong>Clique para gravar</strong> / Click to record</>
                  )}
                </p>
                {transcript && (
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Você disse:</strong> {transcript}
                  </p>
                )}
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
                          {feedback === "correct" ? (
                            <><strong>Excelente!</strong> / Excellent! ({accuracyScore}% precisão)</>
                          ) : (
                            <><strong>Vamos tentar novamente</strong> / Let's try again ({accuracyScore}% precisão)</>
                          )}
                        </h4>
                        {feedback === "correct" ? (
                          <p className="text-sm text-muted-foreground">
                            Sua pronúncia está ótima! Continue praticando. / Your pronunciation is great! Keep practicing.
                          </p>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              Ouça novamente e tente prestar atenção na pronúncia de cada palavra. / Listen again and try to pay attention to the pronunciation of each word.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2" onClick={handleTryAgain}>
                        <RotateCw className="h-4 w-4" />
                        <strong>Tentar Novamente</strong> / Try Again
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleNextPhrase}>
                        <strong>Próxima Frase</strong> / Next Phrase
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base"><strong>Precisão</strong> / Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">85%</div>
            <p className="text-sm text-muted-foreground"><strong>Hoje</strong> / Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base"><strong>Frases Praticadas</strong> / Practiced Phrases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">23</div>
            <p className="text-sm text-muted-foreground"><strong>Esta semana</strong> / This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base"><strong>Tempo de Prática</strong> / Practice Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">45min</div>
            <p className="text-sm text-muted-foreground"><strong>Hoje</strong> / Today</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
