import { TrendingUp, Award, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const ProgressSection = () => {
  const weeklyData = [
    { day: "Seg", value: 80 },
    { day: "Ter", value: 65 },
    { day: "Qua", value: 90 },
    { day: "Qui", value: 75 },
    { day: "Sex", value: 85 },
    { day: "Sáb", value: 60 },
    { day: "Dom", value: 70 },
  ];

  const achievements = [
    { title: "Primeira Semana", description: "Complete 7 dias consecutivos", unlocked: true },
    { title: "100 Palavras", description: "Aprenda 100 palavras novas", unlocked: true },
    { title: "Pronúncia Perfeita", description: "10 pronúncias perfeitas seguidas", unlocked: false },
    { title: "Mestre da Fluência", description: "Alcance 90% de fluência", unlocked: false },
  ];

  const maxValue = Math.max(...weeklyData.map((d) => d.value));

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Seu Progresso</h2>
        <p className="text-muted-foreground mt-1">Acompanhe sua evolução no aprendizado</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolução Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+15%</div>
            <p className="text-sm text-muted-foreground">vs. semana passada</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-5 w-5 text-secondary" />
              Meta Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">78%</div>
            <p className="text-sm text-muted-foreground">23/30 dias completos</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Sequência Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">7 dias</div>
            <p className="text-sm text-muted-foreground">Melhor: 12 dias</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Atividade Semanal</CardTitle>
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
            Conquistas
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
                      Desbloqueado
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
          <CardTitle>Habilidades</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { skill: "Pronúncia", level: 75, color: "primary" },
            { skill: "Vocabulário", level: 60, color: "secondary" },
            { skill: "Gramática", level: 55, color: "accent" },
            { skill: "Fluência", level: 45, color: "info" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.skill}</span>
                <span className="text-sm text-muted-foreground">Nível {item.level}</span>
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
