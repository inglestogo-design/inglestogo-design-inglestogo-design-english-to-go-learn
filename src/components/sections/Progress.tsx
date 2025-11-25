import { TrendingUp, Award, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUserProgress } from "@/hooks/useUserProgress";

export const ProgressSection = () => {
  const { weeklyActivity, stats, loading } = useUserProgress();

  // Generate last 7 days including today
  const getLast7Days = () => {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const result = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = days[date.getDay()];
      
      const activity = weeklyActivity.find(a => a.activity_date === dateStr);
      const value = activity 
        ? (activity.pronunciation_count + activity.vocabulary_count + activity.lessons_completed) * 10
        : 0;
      
      result.push({ day: dayName, value });
    }
    return result;
  };

  const weeklyData = getLast7Days();
  const maxValue = Math.max(...weeklyData.map(d => d.value), 1);

  // Calculate achievements
  const achievements = [
    { 
      title: "Primeira Semana", 
      description: "Complete 7 dias consecutivos", 
      unlocked: (stats?.current_streak || 0) >= 7 
    },
    { 
      title: "100 Palavras", 
      description: "Aprenda 100 palavras novas", 
      unlocked: (stats?.total_words_learned || 0) >= 100 
    },
    { 
      title: "Pronúncia Perfeita", 
      description: "Alcance 75% em pronúncia", 
      unlocked: (stats?.pronunciation_skill || 0) >= 75 
    },
    { 
      title: "Mestre da Fluência", 
      description: "Alcance 90% de fluência", 
      unlocked: (stats?.fluency_skill || 0) >= 90 
    },
  ];

  // Calculate weekly progress
  const thisWeekTotal = weeklyActivity.reduce((sum, day) => 
    sum + day.pronunciation_count + day.vocabulary_count + day.lessons_completed, 0
  );
  const avgDaily = thisWeekTotal / 7;
  const weeklyProgress = Math.round(avgDaily * 10);

  // Calculate monthly goal (assuming 30 days/month)
  const daysCompleted = weeklyActivity.filter(day => 
    day.pronunciation_count + day.vocabulary_count + day.lessons_completed > 0
  ).length;
  const monthlyGoal = Math.round((daysCompleted / 30) * 100);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando progresso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Seu Progresso / Your Progress</h2>
        <p className="text-muted-foreground mt-1">Acompanhe sua evolução no aprendizado / Track your learning evolution</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolução Semanal / Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+{weeklyProgress}%</div>
            <p className="text-sm text-muted-foreground">atividades esta semana / activities this week</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-5 w-5 text-secondary" />
              Meta Mensal / Monthly Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">{monthlyGoal}%</div>
            <p className="text-sm text-muted-foreground">{daysCompleted}/30 dias completos / completed days</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Sequência Atual / Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{stats?.current_streak || 0} dias / days</div>
            <p className="text-sm text-muted-foreground">Melhor / Best: {stats?.best_streak || 0} dias / days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Atividade Semanal / Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-2 h-48">
            {weeklyData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="relative w-full">
                  <div
                    className="w-full bg-gradient-primary rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(item.value / maxValue) * 160}px` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Conquistas / Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg border p-4 transition-smooth ${
                  achievement.unlocked
                    ? "border-primary/50 bg-primary/5 hover:shadow-md"
                    : "border-border bg-muted/30 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{achievement.title}</h4>
                  {achievement.unlocked && (
                    <Badge variant="default" className="bg-primary">
                      Desbloqueado / Unlocked
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Habilidades / Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { skill: "Pronúncia / Pronunciation", level: stats?.pronunciation_skill || 0, color: "primary" },
            { skill: "Vocabulário / Vocabulary", level: stats?.vocabulary_skill || 0, color: "secondary" },
            { skill: "Gramática / Grammar", level: stats?.grammar_skill || 0, color: "accent" },
            { skill: "Fluência / Fluency", level: stats?.fluency_skill || 0, color: "info" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.skill}</span>
                <span className="text-sm text-muted-foreground">Nível / Level {item.level}</span>
              </div>
              <Progress
                value={item.level}
                className="h-2"
                indicatorClassName={`bg-${item.color}`}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
