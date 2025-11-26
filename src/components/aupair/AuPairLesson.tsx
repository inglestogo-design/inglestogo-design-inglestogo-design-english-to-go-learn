import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { speakText } from "@/utils/speechUtils";
import { AuPairLesson as LessonType } from "@/data/auPairLessonsData";
import { useToast } from "@/hooks/use-toast";

interface AuPairLessonProps {
  lesson: LessonType;
  onComplete: () => void;
}

export const AuPairLesson = ({ lesson, onComplete }: AuPairLessonProps) => {
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAudio = (text: string) => {
    speakText(text);
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    if (quizAnswers.length !== lesson.quiz.length) {
      toast({
        title: "Responda todas as perguntas / Answer all questions",
        variant: "destructive",
      });
      return;
    }

    const correctCount = lesson.quiz.filter(
      (q, idx) => q.correct === quizAnswers[idx]
    ).length;

    const score = Math.round((correctCount / lesson.quiz.length) * 100);

    setShowResults(true);

    if (score >= 70) {
      toast({
        title: "🎉 Parabéns! / Congratulations!",
        description: `Você acertou ${correctCount} de ${lesson.quiz.length} perguntas (${score}%)`,
      });
      setTimeout(() => {
        onComplete();
      }, 2000);
    } else {
      toast({
        title: "Continue praticando / Keep practicing",
        description: `Você acertou ${correctCount} de ${lesson.quiz.length} perguntas (${score}%). Tente novamente!`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <span>{lesson.title}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleAudio(lesson.title)}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
          </CardTitle>
          <p className="text-muted-foreground">{lesson.titlePt}</p>
          <p className="text-sm text-primary">{lesson.pronunciation}</p>
        </CardHeader>
      </Card>

      {/* Learning Objective */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🎯 Objetivo / Objective</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pt">Português</TabsTrigger>
              <TabsTrigger value="en">English</TabsTrigger>
            </TabsList>
            <TabsContent value="pt">
              <p className="text-muted-foreground">{lesson.objectivePt}</p>
            </TabsContent>
            <TabsContent value="en">
              <div className="flex items-start gap-2">
                <p className="flex-1">{lesson.objective}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleAudio(lesson.objective)}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">📚 Conteúdo / Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pt">Português</TabsTrigger>
              <TabsTrigger value="en">English</TabsTrigger>
            </TabsList>
            <TabsContent value="pt" className="space-y-4">
              {lesson.content.map((item, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-muted-foreground">{item.textPt}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="en" className="space-y-4">
              {lesson.content.map((item, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <p className="flex-1">{item.text}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleAudio(item.text)}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.textPt}</p>
                  <p className="text-sm text-primary">{item.pronunciation}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quiz */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">✅ Quiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {lesson.quiz.map((question, qIdx) => (
            <div key={qIdx} className="space-y-3">
              <div className="space-y-1">
                <p className="font-medium">{question.question}</p>
                <p className="text-sm text-muted-foreground">{question.questionPt}</p>
              </div>
              <div className="space-y-2">
                {question.options.map((option, oIdx) => {
                  const isSelected = quizAnswers[qIdx] === oIdx;
                  const isCorrect = question.correct === oIdx;
                  const showCorrection = showResults && isSelected && !isCorrect;
                  const showSuccess = showResults && isCorrect;

                  return (
                    <Button
                      key={oIdx}
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full justify-start text-left h-auto py-3 ${
                        showCorrection ? "border-destructive" : ""
                      } ${showSuccess ? "border-green-500 bg-green-500/10" : ""}`}
                      onClick={() => handleQuizAnswer(qIdx, oIdx)}
                      disabled={showResults}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className="flex-1">{option}</span>
                        {showResults && isCorrect && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {showCorrection && (
                          <XCircle className="h-5 w-5 text-destructive" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}

          <Button
            onClick={handleSubmitQuiz}
            className="w-full"
            size="lg"
            disabled={showResults}
          >
            {showResults ? (
              <>
                <Trophy className="mr-2 h-5 w-5" />
                Aula Concluída / Lesson Completed
              </>
            ) : (
              "Enviar Respostas / Submit Answers"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Summary */}
      {showResults && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-lg">📝 Resumo / Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pt">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pt">Português</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
              <TabsContent value="pt">
                <p className="text-muted-foreground">{lesson.summaryPt}</p>
              </TabsContent>
              <TabsContent value="en">
                <div className="flex items-start gap-2">
                  <p className="flex-1">{lesson.summary}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleAudio(lesson.summary)}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
