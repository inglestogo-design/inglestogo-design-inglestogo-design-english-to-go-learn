import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target } from "lucide-react";
import { LessonCard } from "@/components/lessons/LessonCard";
import { LessonContent } from "@/components/lessons/LessonContent";
import { lessons } from "@/data/lessonsData";

interface LessonProgress {
  completed: boolean;
  stars: number;
  points: number;
}

export const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [progress, setProgress] = useState<Record<number, LessonProgress>>({});

  const handleLessonComplete = (lessonNumber: number, score: number, stars: number) => {
    setProgress(prev => ({
      ...prev,
      [lessonNumber]: {
        completed: true,
        stars,
        points: score
      }
    }));
    setSelectedLesson(null);
  };

  const totalLessons = lessons.length;
  const completedLessons = Object.values(progress).filter(p => p.completed).length;
  const totalPoints = Object.values(progress).reduce((sum, p) => sum + (p.points || 0), 0);
  const totalStars = Object.values(progress).reduce((sum, p) => sum + (p.stars || 0), 0);
  const progressPercentage = (completedLessons / totalLessons) * 100;

  // Check if lesson is locked (previous lesson not completed)
  const isLessonLocked = (lessonNumber: number) => {
    if (lessonNumber === 1) return false;
    return !progress[lessonNumber - 1]?.completed;
  };

  if (selectedLesson !== null) {
    const lesson = lessons.find(l => l.number === selectedLesson);
    if (lesson) {
      return (
        <LessonContent
          lesson={lesson}
          onComplete={(score, stars) => handleLessonComplete(lesson.number, score, stars)}
          onBack={() => setSelectedLesson(null)}
        />
      );
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Lições</h2>
        <p className="text-muted-foreground mt-1">Complete as lições e ganhe pontos</p>
      </div>

      {/* Overall Progress */}
      <Card className="border-2 border-primary/20 bg-gradient-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Seu Progresso
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-background">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">{totalPoints}</div>
              <p className="text-sm text-muted-foreground">Pontos Totais</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-3xl font-bold text-primary">{completedLessons}/{totalLessons}</div>
              <p className="text-sm text-muted-foreground">Lições Completas</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-3xl font-bold text-yellow-400">⭐ {totalStars}</div>
              <p className="text-sm text-muted-foreground">Estrelas</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progresso Geral</span>
              <span className="font-semibold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" indicatorClassName="bg-gradient-primary" />
          </div>
        </CardContent>
      </Card>

      {/* Lesson Level Badge */}
      <div className="flex justify-center">
        <Badge variant="default" className="text-lg px-6 py-3 bg-gradient-primary">
          📚 Nível 1: Básico
        </Badge>
      </div>

      {/* Lessons Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => {
          const lessonProgress = progress[lesson.number];
          return (
            <LessonCard
              key={lesson.number}
              number={lesson.number}
              title={lesson.title}
              titleEn={lesson.titleEn}
              description={lesson.objective}
              stars={lessonProgress?.stars || 0}
              completed={lessonProgress?.completed || false}
              locked={isLessonLocked(lesson.number)}
              points={lessonProgress?.points || 0}
              onClick={() => setSelectedLesson(lesson.number)}
            />
          );
        })}
      </div>

      {/* Coming Soon Badge */}
      <Card className="border-dashed border-2 border-muted-foreground/30">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground text-lg">
            🚀 Níveis 2 e 3 em breve...
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Complete o Nível 1 para desbloquear mais lições!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
