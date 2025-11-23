import { Play, Lock, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Introdução ao Inglês",
      description: "Aprenda os conceitos básicos e primeiras frases",
      duration: "15 min",
      progress: 100,
      level: "Básico",
      status: "completed",
    },
    {
      id: 2,
      title: "Apresentações Pessoais",
      description: "Como se apresentar em inglês",
      duration: "20 min",
      progress: 100,
      level: "Básico",
      status: "completed",
    },
    {
      id: 3,
      title: "Vocabulário do Dia a Dia",
      description: "Palavras essenciais para conversações",
      duration: "25 min",
      progress: 60,
      level: "Intermediário",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Tempos Verbais Básicos",
      description: "Present Simple e Present Continuous",
      duration: "30 min",
      progress: 0,
      level: "Intermediário",
      status: "locked",
    },
    {
      id: 5,
      title: "Conversação Avançada",
      description: "Pratique diálogos complexos",
      duration: "35 min",
      progress: 0,
      level: "Avançado",
      status: "locked",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Lições</h2>
        <p className="text-muted-foreground mt-1">Siga seu caminho de aprendizado estruturado</p>
      </div>

      <Card className="border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Progresso Geral</h3>
              <p className="text-sm text-muted-foreground">3 de 5 lições completadas</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">60%</div>
            </div>
          </div>
          <Progress value={60} className="h-2" indicatorClassName="bg-primary" />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className={`transition-smooth ${
              lesson.status !== "locked"
                ? "hover:shadow-md hover:border-primary/50 cursor-pointer"
                : "opacity-60"
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{lesson.title}</CardTitle>
                    {lesson.status === "completed" && (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{lesson.description}</p>
                </div>
                <div className="flex gap-2">
                  <Badge
                    variant={
                      lesson.level === "Básico"
                        ? "default"
                        : lesson.level === "Intermediário"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {lesson.level}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {lesson.status === "in-progress" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{lesson.progress}%</span>
                  </div>
                  <Progress value={lesson.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {lesson.duration}
                  </div>
                </div>

                {lesson.status === "completed" ? (
                  <Button variant="outline" className="gap-2">
                    <Play className="h-4 w-4" />
                    Revisar
                  </Button>
                ) : lesson.status === "in-progress" ? (
                  <Button className="gap-2">
                    <Play className="h-4 w-4" />
                    Continuar
                  </Button>
                ) : (
                  <Button variant="secondary" disabled className="gap-2">
                    <Lock className="h-4 w-4" />
                    Bloqueado
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
