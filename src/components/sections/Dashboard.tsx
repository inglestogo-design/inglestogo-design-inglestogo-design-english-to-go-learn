import { Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteOfTheDay } from "./QuoteOfTheDay";

interface DashboardProps {
  onNavigate?: (section: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  const progressData = [
    { label: "Pronúncia / Pronunciation", value: 75, color: "primary" as const },
    { label: "Vocabulário / Vocabulary", value: 60, color: "secondary" as const },
    { label: "Fluência / Fluency", value: 45, color: "accent" as const },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Olá, Estudante! / Hello, Student! 👋</h2>
        <p className="text-muted-foreground mt-1">Continue sua jornada de aprendizado / Continue your learning journey</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Nível Atual / Current Level"
          value="Intermediário / Intermediate"
          icon={Award}
          trend="Nível 2 de 5 / Level 2 of 5"
          variant="primary"
        />
        <StatsCard
          title="Palavras Aprendidas / Words Learned"
          value="847"
          icon={BookOpen}
          trend="+23 esta semana / this week"
          variant="secondary"
        />
        <StatsCard
          title="Tempo de Prática / Practice Time"
          value="12h"
          icon={Clock}
          trend="Este mês / This month"
        />
        <StatsCard
          title="Sequência Diária / Daily Streak"
          value="7 dias / days"
          icon={TrendingUp}
          trend="Continue assim! / Keep it up!"
        />
      </div>

      <QuoteOfTheDay />

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressChart title="Seu Progresso / Your Progress" items={progressData} />
        
        <Card className="gradient-hero text-white">
          <CardHeader>
            <CardTitle>Prática Diária / Daily Practice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/90">
              Você já praticou por <span className="font-bold">15 minutos</span> hoje! / You've practiced for <span className="font-bold">15 minutes</span> today!
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Meta diária: 30 minutos / Daily goal: 30 minutes</span>
                <span>50%</span>
              </div>
              <div className="h-2 rounded-full bg-white/20">
                <div className="h-full w-1/2 rounded-full bg-white"></div>
              </div>
            </div>
            <Button variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90">
              Continuar Praticando / Continue Practicing
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Atividades Recomendadas / Recommended Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Prática de Pronúncia / Pronunciation Practice", desc: "5 minutos / minutes", color: "primary" },
              { title: "Novo Vocabulário / New Vocabulary", desc: "10 palavras / words", color: "secondary" },
              { title: "Exercício Rápido / Quick Exercise", desc: "3 minutos / minutes", color: "accent" },
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
