import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { citizenshipLessons } from "@/data/citizenshipLessonsData";
import { MiniLesson } from "@/components/citizenship/MiniLesson";
import { N400Glossary } from "@/components/citizenship/N400Glossary";
import { InterviewSimulation } from "@/components/citizenship/InterviewSimulation";
import { Lock, CheckCircle2, Flag, BookOpen, GraduationCap, MessageSquare, PlayCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Progress } from "@/components/ui/progress";

export const CitizenshipPrep = () => {
  const { isPremium, isInTrialPeriod } = useAuth();
  const hasFullAccess = isPremium || isInTrialPeriod;
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showInterview, setShowInterview] = useState(false);

  const handleLessonComplete = () => {
    if (selectedLesson) {
      setCompletedLessons([...completedLessons, selectedLesson]);
      setSelectedLesson(null);
    }
  };

  const level1Lessons = citizenshipLessons.filter(l => l.level === 1);
  const level2Lessons = citizenshipLessons.filter(l => l.level === 2);
  const allLevel1Complete = level1Lessons.every(l => completedLessons.includes(l.id));
  const allLevel2Complete = level2Lessons.every(l => completedLessons.includes(l.id));
  const progressPercentage = (completedLessons.length / citizenshipLessons.length) * 100;

  if (showInterview) {
    return <InterviewSimulation onBack={() => setShowInterview(false)} />;
  }

  if (selectedLesson) {
    const lesson = citizenshipLessons.find(l => l.id === selectedLesson);
    if (lesson) {
      return (
        <MiniLesson
          lesson={lesson}
          onComplete={handleLessonComplete}
          onBack={() => setSelectedLesson(null)}
        />
      );
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Flag className="w-7 h-7 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">
            Cidadania Americana
          </h1>
        </div>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto px-4">
          Preparação completa para o teste N-400
        </p>
      </div>

      {/* Progress Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span>Progresso Geral</span>
            <span className="font-medium">{completedLessons.length}/{citizenshipLessons.length} aulas</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1">
          <TabsTrigger value="lessons" className="text-xs sm:text-sm py-2 px-2">
            <GraduationCap className="w-4 h-4 mr-1 hidden sm:inline" />
            Aulas
          </TabsTrigger>
          <TabsTrigger value="interview" className="text-xs sm:text-sm py-2 px-2">
            <MessageSquare className="w-4 h-4 mr-1 hidden sm:inline" />
            Simulação
          </TabsTrigger>
          <TabsTrigger value="glossary" className="text-xs sm:text-sm py-2 px-2">
            <BookOpen className="w-4 h-4 mr-1 hidden sm:inline" />
            Glossário
          </TabsTrigger>
        </TabsList>

        {/* Lessons Tab */}
        <TabsContent value="lessons" className="space-y-6 mt-6">
          {/* Level 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="default" className="text-sm">Nível 1</Badge>
              <span className="font-semibold">Civismo Básico</span>
              {allLevel1Complete && <CheckCircle2 className="w-5 h-5 text-green-500" />}
            </div>

            <div className="grid gap-3">
              {level1Lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                
                return (
                  <Card
                    key={lesson.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      isCompleted ? "bg-green-500/5 border-green-500/50" : ""
                    }`}
                    onClick={() => setSelectedLesson(lesson.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <span className="text-sm font-bold text-primary">{lesson.id}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm leading-tight mb-1 break-words">
                            {lesson.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 break-words">
                            {lesson.objective}
                          </p>
                        </div>
                        <PlayCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Level 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={allLevel1Complete ? "default" : "secondary"} className="text-sm">
                Nível 2
              </Badge>
              <span className="font-semibold">Procedimentos</span>
              {allLevel2Complete && <CheckCircle2 className="w-5 h-5 text-green-500" />}
              {!allLevel1Complete && <Lock className="w-4 h-4 text-muted-foreground" />}
            </div>

            {!allLevel1Complete ? (
              <Card className="p-6 text-center bg-muted/50">
                <Lock className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground">
                  Complete o Nível 1 para desbloquear
                </p>
              </Card>
            ) : (
              <div className="grid gap-3">
                {level2Lessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isLocked = !isPremium && lesson.id > 4;
                  
                  return (
                    <Card
                      key={lesson.id}
                      className={`transition-all ${
                        isLocked 
                          ? 'opacity-60' 
                          : 'cursor-pointer hover:shadow-md'
                      } ${isCompleted ? 'bg-green-500/5 border-green-500/50' : ''}`}
                      onClick={() => !isLocked && setSelectedLesson(lesson.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : isLocked ? (
                              <Lock className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <span className="text-sm font-bold text-primary">{lesson.id}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm leading-tight mb-1 break-words">
                              {lesson.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2 break-words">
                              {lesson.objective}
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
            )}
          </div>

          {/* Level 3 - Coming Soon */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-sm">Nível 3</Badge>
              <span className="font-semibold text-muted-foreground">Em Breve</span>
              <Lock className="w-4 h-4 text-muted-foreground" />
            </div>
            <Card className="p-6 text-center bg-muted/30">
              <p className="text-sm text-muted-foreground">
                Treinamento N-400 Completo - Em breve!
              </p>
            </Card>
          </div>
        </TabsContent>

        {/* Interview Tab */}
        <TabsContent value="interview" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-5xl">🎙️</div>
              <h3 className="text-xl font-bold">Simulação de Entrevista</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Pratique com um entrevistador virtual e prepare-se para a entrevista real.
              </p>
              <Button onClick={() => setShowInterview(true)} size="lg">
                Iniciar Simulação
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Glossary Tab */}
        <TabsContent value="glossary" className="mt-6">
          <N400Glossary />
        </TabsContent>
      </Tabs>
    </div>
  );
};
