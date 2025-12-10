import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle2, PlayCircle, BookOpen } from "lucide-react";
import { toeflLessons } from "@/data/toeflLessonsData";
import { ToeflLesson } from "@/components/toefl/ToeflLesson";
import { ToeflGlossary } from "@/components/toefl/ToeflGlossary";
import { useAuth } from "@/contexts/AuthContext";
export const ToeflCourse = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [showGlossary, setShowGlossary] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const { isPremium, isInTrialPeriod } = useAuth();
  const hasFullAccess = isPremium || isInTrialPeriod;

  useEffect(() => {
    const saved = localStorage.getItem("toeflCompletedLessons");
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  const handleLessonComplete = (lessonId: number) => {
    const newCompleted = [...completedLessons, lessonId];
    setCompletedLessons(newCompleted);
    localStorage.setItem("toeflCompletedLessons", JSON.stringify(newCompleted));
    setSelectedLesson(null);
  };

  const handleLessonSelect = (lessonId: number) => {
    if (lessonId === 1 || hasFullAccess) {
      setSelectedLesson(lessonId);
      setShowGlossary(false);
    }
  };

  const handleGlossaryOpen = () => {
    if (hasFullAccess) {
      setShowGlossary(true);
      setSelectedLesson(null);
    }
  };

  const progressPercentage = (completedLessons.length / toeflLessons.length) * 100;

  if (selectedLesson !== null) {
    const lesson = toeflLessons.find((l) => l.id === selectedLesson);
    if (lesson) {
      return (
        <div className="space-y-4 max-w-4xl mx-auto">
          <Button variant="outline" onClick={() => setSelectedLesson(null)}>
            ← Voltar / Back
          </Button>
          <ToeflLesson
            lesson={lesson}
            onComplete={() => handleLessonComplete(lesson.id)}
          />
        </div>
      );
    }
  }

  if (showGlossary) {
    return (
      <div className="space-y-4 max-w-4xl mx-auto">
        <Button variant="outline" onClick={() => setShowGlossary(false)}>
          ← Voltar / Back
        </Button>
        <ToeflGlossary />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl">
            📝 TOEFL 360°
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Preparação completa para o exame TOEFL
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Progresso</span>
            <span className="font-medium">{completedLessons.length}/{toeflLessons.length}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      {/* Glossary */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">Glossário / Glossary</p>
              <p className="text-xs text-muted-foreground">45+ termos essenciais</p>
            </div>
            {hasFullAccess ? (
              <Button onClick={handleGlossaryOpen} size="sm">
                Acessar
              </Button>
            ) : (
              <Lock className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold">Aulas / Lessons</h2>
        
        {toeflLessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isLocked = lesson.id > 1 && !hasFullAccess;

          return (
            <Card 
              key={lesson.id} 
              className={`transition-all ${
                isLocked ? 'opacity-60' : 'cursor-pointer hover:shadow-md'
              } ${isCompleted ? 'border-primary/50 bg-primary/5' : ''}`}
              onClick={() => !isLocked && handleLessonSelect(lesson.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : isLocked ? (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground">{lesson.id}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-tight mb-1 break-words">
                      {lesson.title}
                    </p>
                    <p className="text-xs text-muted-foreground break-words">
                      {lesson.titlePt}
                    </p>
                  </div>
                  {isLocked ? (
                    <Badge variant="outline" className="text-xs flex-shrink-0">Premium</Badge>
                  ) : (
                    <PlayCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
