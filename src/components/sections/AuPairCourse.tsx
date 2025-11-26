import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle2, PlayCircle, BookOpen } from "lucide-react";
import { auPairLessons } from "@/data/auPairLessonsData";
import { AuPairLesson } from "@/components/aupair/AuPairLesson";
import { AuPairGlossary } from "@/components/aupair/AuPairGlossary";
import { useAuth } from "@/contexts/AuthContext";
import { LockedContent } from "@/components/premium/LockedContent";
import { useUserProgress } from "@/hooks/useUserProgress";

export const AuPairCourse = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [showGlossary, setShowGlossary] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const { isPremium } = useAuth();
  const { trackActivity } = useUserProgress();

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("auPairCompletedLessons");
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  const handleLessonComplete = (lessonId: number) => {
    const newCompleted = [...completedLessons, lessonId];
    setCompletedLessons(newCompleted);
    localStorage.setItem("auPairCompletedLessons", JSON.stringify(newCompleted));
    
    // Track activity
    trackActivity("lesson", 1);
    
    setSelectedLesson(null);
  };

  const handleLessonSelect = (lessonId: number) => {
    // Lesson 1 is always free
    if (lessonId === 1 || isPremium) {
      setSelectedLesson(lessonId);
      setShowGlossary(false);
    }
  };

  const handleGlossaryOpen = () => {
    if (isPremium) {
      setShowGlossary(true);
      setSelectedLesson(null);
    }
  };

  const progressPercentage = (completedLessons.length / auPairLessons.length) * 100;

  // If a lesson is selected, show lesson component
  if (selectedLesson !== null) {
    const lesson = auPairLessons.find((l) => l.id === selectedLesson);
    if (lesson) {
      return (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => setSelectedLesson(null)}
          >
            ← Voltar para o Curso / Back to Course
          </Button>
          <AuPairLesson
            lesson={lesson}
            onComplete={() => handleLessonComplete(lesson.id)}
          />
        </div>
      );
    }
  }

  // If glossary is selected, show glossary component
  if (showGlossary) {
    return (
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => setShowGlossary(false)}
        >
          ← Voltar para o Curso / Back to Course
        </Button>
        <AuPairGlossary />
      </div>
    );
  }

  // Main course view
  return (
    <div className="space-y-6">
      {/* Course Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            ✈️ Au Pair do Zero / Au Pair From Zero
          </CardTitle>
          <p className="text-muted-foreground">
            Curso completo para se tornar Au Pair / Complete course to become an Au Pair
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso / Progress</span>
              <span>{completedLessons.length} / {auPairLessons.length} aulas</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Glossary Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Glossário / Glossary
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            50+ termos essenciais do programa Au Pair / 50+ essential Au Pair program terms
          </p>
        </CardHeader>
        <CardContent>
          {isPremium ? (
            <Button onClick={handleGlossaryOpen} className="w-full" size="lg">
              Acessar Glossário / Access Glossary
            </Button>
          ) : (
            <LockedContent
              title="Glossário Premium / Premium Glossary"
              description="Desbloqueie mais de 50 termos essenciais do programa Au Pair / Unlock 50+ essential Au Pair program terms"
            />
          )}
        </CardContent>
      </Card>

      {/* Lessons List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Aulas / Lessons</h2>
        {auPairLessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isLocked = lesson.id > 1 && !isPremium;

          return (
            <Card key={lesson.id} className={isCompleted ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {lesson.id}
                    </span>
                    <div>
                      <p className="text-lg">{lesson.title}</p>
                      <p className="text-sm text-muted-foreground font-normal">
                        {lesson.titlePt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    )}
                    {isLocked && <Lock className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {lesson.objectivePt}
                </p>
                {isLocked ? (
                  <LockedContent
                    title="Aula Premium / Premium Lesson"
                    description="Faça upgrade para acessar todas as aulas / Upgrade to access all lessons"
                  />
                ) : (
                  <Button
                    onClick={() => handleLessonSelect(lesson.id)}
                    className="w-full"
                    variant={isCompleted ? "outline" : "default"}
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    {isCompleted
                      ? "Revisar Aula / Review Lesson"
                      : "Iniciar Aula / Start Lesson"}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
