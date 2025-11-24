import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { citizenshipLessons } from "@/data/citizenshipLessonsData";
import { MiniLesson } from "@/components/citizenship/MiniLesson";
import { N400Glossary } from "@/components/citizenship/N400Glossary";
import { Lock, CheckCircle2, Flag, BookOpen, GraduationCap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LockedContent } from "@/components/premium/LockedContent";

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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Flag className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">
            Teste Preparatório Cidadania
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Citizenship Prep Test
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mini-aulas e glossário completo para preparação do teste de cidadania americana / 
          Mini-lessons and complete glossary for U.S. citizenship test preparation
        </p>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto">
          <TabsTrigger value="lessons" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Mini-Aulas / Lessons
          </TabsTrigger>
          <TabsTrigger value="glossary" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Glossário N-400
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-8 mt-8">

      {/* Progress Overview */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">{completedLessons.length}</p>
            <p className="text-sm text-muted-foreground">Aulas Completas / Lessons Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{currentLevel}</p>
            <p className="text-sm text-muted-foreground">Nível Atual / Current Level</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">
              {Math.round((completedLessons.length / citizenshipLessons.length) * 100)}%
            </p>
            <p className="text-sm text-muted-foreground">Progresso Total / Total Progress</p>
          </div>
        </div>
      </Card>

      {/* Level 1 - Basic Civics */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="default" className="text-lg px-4 py-1">
            Nível 1 / Level 1
          </Badge>
          <h2 className="text-2xl font-bold">Civismo Básico / Basic Civics</h2>
          {allLevel1Complete && (
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {level1Lessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            
            return (
              <Card
                key={lesson.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isCompleted ? "bg-green-500/10 border-green-500" : ""
                }`}
                onClick={() => setSelectedLesson(lesson.id)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Aula {lesson.id}</Badge>
                      {isCompleted && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground">{lesson.objective}</p>
                  
                  <Button variant="outline" className="w-full">
                    {isCompleted ? "Revisar / Review" : "Começar / Start"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Level 2 - Interview Procedures */}
      <div className={`space-y-4 ${!allLevel1Complete ? 'opacity-60' : ''}`}>
        <div className="flex items-center gap-3">
          <Badge variant={allLevel1Complete ? "default" : "secondary"} className="text-lg px-4 py-1">
            Nível 2 / Level 2
          </Badge>
          <h2 className="text-2xl font-bold">Procedimentos da Entrevista / Interview Procedures</h2>
          {allLevel2Complete && <CheckCircle2 className="w-6 h-6 text-green-500" />}
          {!allLevel1Complete && <Lock className="w-6 h-6 text-muted-foreground" />}
        </div>

        {!allLevel1Complete ? (
          <Card className="p-6 text-center">
            <Lock className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Complete todas as aulas do Nível 1 para desbloquear / 
              Complete all Level 1 lessons to unlock
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {level2Lessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const isLocked = !isPremium && lesson.id > 4; // First 2 free for premium check
              
              return (
                <Card
                  key={lesson.id}
                  className={`p-6 transition-all ${
                    isLocked 
                      ? 'opacity-60 cursor-not-allowed' 
                      : 'cursor-pointer hover:shadow-lg'
                  } ${isCompleted ? 'bg-green-500/10 border-green-500' : ''}`}
                  onClick={() => !isLocked && setSelectedLesson(lesson.id)}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Aula {lesson.id}</Badge>
                        {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                        {isLocked && <Lock className="w-5 h-5 text-muted-foreground" />}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground">{lesson.objective}</p>
                    
                    {isLocked ? (
                      <Button variant="outline" className="w-full" disabled>
                        <Lock className="w-4 h-4 mr-2" />
                        Premium
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        {isCompleted ? "Revisar / Review" : "Começar / Start"}
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Level 3 - Coming Soon (Locked) */}
      <div className="space-y-4 opacity-60">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-lg px-4 py-1">
            Nível 3 / Level 3
          </Badge>
          <h2 className="text-2xl font-bold">Treinamento N-400 Completo</h2>
          <Lock className="w-6 h-6 text-muted-foreground" />
        </div>
        
        <LockedContent message="Conteúdo Premium - Complete os Níveis 1 e 2 para desbloquear / Premium Content - Complete Levels 1 and 2 to unlock" />
      </div>
        </TabsContent>

        <TabsContent value="interview" className="mt-8">
          <Card className="p-8 text-center space-y-6">
            <div className="text-6xl mb-4">🎙️</div>
            <h3 className="text-2xl font-bold">Simulação de Entrevista N-400</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pratique com um entrevistador virtual do USCIS. Receba feedback personalizado, 
              adaptado ao seu nível, e prepare-se para a entrevista real.
            </p>
            <Button onClick={() => setShowInterview(true)} size="lg" className="mt-4">
              Iniciar Simulação / Start Interview Simulation
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="glossary" className="mt-8">
          <N400Glossary />
        </TabsContent>
      </Tabs>
    </div>
  );
};
