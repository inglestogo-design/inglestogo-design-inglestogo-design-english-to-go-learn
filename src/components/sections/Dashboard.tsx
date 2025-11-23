import { Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Dashboard = () => {
  const progressData = [
    { label: "Pronúncia", value: 75, color: "primary" as const },
    { label: "Vocabulário", value: 60, color: "secondary" as const },
    { label: "Fluência", value: 45, color: "accent" as const },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Olá, Estudante! 👋</h2>
        <p className="text-muted-foreground mt-1">Continue sua jornada de aprendizado</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Nível Atual"
          value="Intermediário"
          icon={Award}
          trend="Nível 2 de 5"
          variant="primary"
        />
        <StatsCard
          title="Palavras Aprendidas"
          value="847"
          icon={BookOpen}
          trend="+23 esta semana"
          variant="secondary"
        />
        <StatsCard
          title="Tempo de Prática"
          value="12h"
          icon={Clock}
          trend="Este mês"
        />
        <StatsCard
          title="Sequência Diária"
          value="7 dias"
          icon={TrendingUp}
          trend="Continue assim!"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressChart title="Seu Progresso" items={progressData} />
        
        <Card className="gradient-hero text-white">
          <CardHeader>
            <CardTitle>Prática Diária</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/90">
              Você já praticou por <span className="font-bold">15 minutos</span> hoje!
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Meta diária: 30 minutos</span>
                <span>50%</span>
              </div>
              <div className="h-2 rounded-full bg-white/20">
                <div className="h-full w-1/2 rounded-full bg-white"></div>
              </div>
            </div>
            <Button variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90">
              Continuar Praticando
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Atividades Recomendadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Prática de Pronúncia", desc: "5 minutos", color: "primary" },
              { title: "Novo Vocabulário", desc: "10 palavras", color: "secondary" },
              { title: "Exercício Rápido", desc: "3 minutos", color: "accent" },
            ].map((activity, i) => (
              <div
                key={i}
                className="rounded-lg border border-border p-4 transition-smooth hover:shadow-md hover:border-primary/50 cursor-pointer"
              >
                <h4 className="font-semibold mb-1">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
