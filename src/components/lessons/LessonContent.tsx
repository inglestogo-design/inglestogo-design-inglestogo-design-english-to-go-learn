import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Volume2, Mic, ChevronRight, Trophy, Star, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { speakText } from "@/utils/speechUtils";

interface FillBlankQuestion {
  sentence: string;
  blank: string;
  options: string[];
  correct: string;
}

interface MultipleChoiceQuestion {
  question: string;
  options: string[];
  correct: string;
}

interface PronunciationPhrase {
  text: string;
  pronunciation: string;
  translation: string;
}

export interface LessonData {
  number: number;
  title: string;
  titleEn: string;
  objective: string;
  modelPhrase: PronunciationPhrase;
  fillBlanks: FillBlankQuestion[];
  multipleChoice: MultipleChoiceQuestion[];
  finalPractice: PronunciationPhrase[];
}

interface LessonContentProps {
  lesson: LessonData;
  onComplete: (score: number, stars: number) => void;
  onBack: () => void;
}

type Step = 'intro' | 'model' | 'fillBlank' | 'multipleChoice' | 'practice' | 'summary';

export const LessonContent = ({ lesson, onComplete, onBack }: LessonContentProps) => {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const totalQuestions = lesson.fillBlanks.length + lesson.multipleChoice.length + lesson.finalPractice.length;
  const progress = ((Object.keys(answers).length / totalQuestions) * 100);

  const playAudio = async (text: string) => {
    setLoadingAudio(true);
    
    try {
      await speakText(text, { 
        rate: 0.85, 
        pitch: 1.05,
        volume: 0.9
      });
      setLoadingAudio(false);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível reproduzir o áudio.",
        variant: "destructive",
      });
      setLoadingAudio(false);
    }
  };

  const recordPronunciation = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Não suportado",
        description: "Reconhecimento de voz não disponível neste navegador.",
        variant: "destructive",
      });
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      
      if (confidence > 0.7) {
        toast({
          title: "Ótima pronúncia! ✅",
          description: `Você disse: "${transcript}"`,
        });
        setScore(prev => prev + 20);
      } else {
        toast({
          title: "Continue praticando 📚",
          description: "Tente novamente para melhorar!",
          variant: "destructive",
        });
      }
    };

    recognition.start();
  };

  const handleFillBlankAnswer = (answer: string, correct: string, index: number) => {
    const isCorrect = answer === correct;
    const key = `fill-${index}`;
    
    setAnswers(prev => ({ ...prev, [key]: isCorrect }));
    if (isCorrect) setScore(prev => prev + 10);
    
    toast({
      title: isCorrect ? "Correto! ✅" : "Incorreto ❌",
      description: isCorrect ? "+10 pontos" : `A resposta correta é: ${correct}`,
      variant: isCorrect ? "default" : "destructive",
    });

    setTimeout(() => {
      if (currentQuestion < lesson.fillBlanks.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setCurrentQuestion(0);
        setStep('multipleChoice');
      }
    }, 1500);
  };

  const handleMultipleChoiceAnswer = (answer: string, correct: string, index: number) => {
    const isCorrect = answer === correct;
    const key = `multi-${index}`;
    
    setAnswers(prev => ({ ...prev, [key]: isCorrect }));
    if (isCorrect) setScore(prev => prev + 10);
    
    toast({
      title: isCorrect ? "Correto! ✅" : "Incorreto ❌",
      description: isCorrect ? "+10 pontos" : `A resposta correta é: ${correct}`,
      variant: isCorrect ? "default" : "destructive",
    });

    setTimeout(() => {
      if (currentQuestion < lesson.multipleChoice.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setCurrentQuestion(0);
        setStep('practice');
      }
    }, 1500);
  };

  const calculateStars = () => {
    if (score >= 80) return 3;
    if (score >= 60) return 2;
    return 1;
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">
                Lição {lesson.number}: {lesson.title}
              </CardTitle>
              <p className="text-muted-foreground">{lesson.titleEn}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold text-lg">🎯 Objetivo:</p>
                <p className="mt-2">{lesson.objective}</p>
              </div>
              <Button onClick={() => setStep('model')} className="w-full" size="lg">
                Começar Lição <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        );

      case 'model':
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Frase Modelo</CardTitle>
              <Progress value={progress} className="mt-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 p-6 bg-gradient-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-center">{lesson.modelPhrase.text}</p>
                <p className="text-xl text-center font-mono text-primary">{lesson.modelPhrase.pronunciation}</p>
                <p className="text-center text-muted-foreground">{lesson.modelPhrase.translation}</p>
                
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => playAudio(lesson.modelPhrase.text)} disabled={loadingAudio}>
                    <Volume2 className="mr-2" /> Ouvir
                  </Button>
                  <Button onClick={recordPronunciation} disabled={isRecording} variant="outline">
                    <Mic className={`mr-2 ${isRecording ? 'animate-pulse' : ''}`} /> 
                    {isRecording ? 'Gravando...' : 'Praticar'}
                  </Button>
                </div>
              </div>
              
              <Button onClick={() => setStep('fillBlank')} className="w-full">
                Continuar <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        );

      case 'fillBlank':
        const currentFill = lesson.fillBlanks[currentQuestion];
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Complete a Frase</CardTitle>
              <Progress value={progress} className="mt-2" />
              <p className="text-sm text-muted-foreground">
                Questão {currentQuestion + 1} de {lesson.fillBlanks.length}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-muted rounded-lg">
                <p className="text-xl text-center font-semibold">
                  {currentFill.sentence.replace('___', `___`)}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {currentFill.options.map((option, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="lg"
                    className="h-auto py-4"
                    onClick={() => handleFillBlankAnswer(option, currentFill.correct, currentQuestion)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'multipleChoice':
        const currentMulti = lesson.multipleChoice[currentQuestion];
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Múltipla Escolha</CardTitle>
              <Progress value={progress} className="mt-2" />
              <p className="text-sm text-muted-foreground">
                Questão {currentQuestion + 1} de {lesson.multipleChoice.length}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-muted rounded-lg">
                <p className="text-xl font-semibold">{currentMulti.question}</p>
              </div>
              
              <div className="space-y-3">
                {currentMulti.options.map((option, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="lg"
                    className="w-full h-auto py-4 justify-start text-left"
                    onClick={() => handleMultipleChoiceAnswer(option, currentMulti.correct, currentQuestion)}
                  >
                    <span className="font-bold mr-3">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'practice':
        const currentPractice = lesson.finalPractice[currentQuestion];
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Prática Final</CardTitle>
              <Progress value={progress} className="mt-2" />
              <p className="text-sm text-muted-foreground">
                Frase {currentQuestion + 1} de {lesson.finalPractice.length}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 p-6 bg-gradient-secondary/10 rounded-lg">
                <p className="text-2xl font-bold text-center">{currentPractice.text}</p>
                <p className="text-xl text-center font-mono text-primary">{currentPractice.pronunciation}</p>
                <p className="text-center text-muted-foreground">{currentPractice.translation}</p>
                
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => playAudio(currentPractice.text)} disabled={loadingAudio}>
                    <Volume2 className="mr-2" /> Ouvir
                  </Button>
                  <Button onClick={recordPronunciation} disabled={isRecording} variant="outline">
                    <Mic className={`mr-2 ${isRecording ? 'animate-pulse' : ''}`} /> 
                    Gravar
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={() => {
                  if (currentQuestion < lesson.finalPractice.length - 1) {
                    setCurrentQuestion(prev => prev + 1);
                  } else {
                    setStep('summary');
                  }
                }}
                className="w-full"
              >
                {currentQuestion < lesson.finalPractice.length - 1 ? 'Próxima Frase' : 'Ver Resultado'}
                <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        );

      case 'summary':
        const stars = calculateStars();
        return (
          <Card className="animate-scale-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-yellow-400" />
              </div>
              <CardTitle className="text-3xl">Lição Concluída!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-2">
                  {[1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      className={`h-12 w-12 ${
                        i <= stars ? 'fill-yellow-400 text-yellow-400 animate-scale-in' : 'text-muted-foreground'
                      }`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                
                <div className="p-6 bg-primary/10 rounded-lg">
                  <p className="text-5xl font-bold text-primary">{score}</p>
                  <p className="text-muted-foreground">pontos</p>
                </div>

                <Badge variant="default" className="text-lg px-6 py-2">
                  {stars === 3 ? '🏆 Perfeito!' : stars === 2 ? '👍 Muito bom!' : '📚 Continue praticando!'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={onBack}>
                  <ArrowLeft className="mr-2" /> Voltar
                </Button>
                <Button onClick={() => onComplete(score, stars)}>
                  Próxima Lição <ChevronRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2" /> Voltar
      </Button>
      {renderStep()}
    </div>
  );
};
