import { Volume2, BookOpen, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Vocabulary = () => {
  const dailyWords = [
    {
      word: "Achievement",
      phonetic: "/əˈtʃiːvmənt/",
      translation: "Conquista, realização",
      example: "Graduating was a great achievement.",
      examplePt: "Formar-se foi uma grande conquista.",
      category: "Substantivo",
      difficulty: "Intermediário",
    },
    {
      word: "Resilient",
      phonetic: "/rɪˈzɪliənt/",
      translation: "Resiliente",
      example: "She remained resilient despite difficulties.",
      examplePt: "Ela permaneceu resiliente apesar das dificuldades.",
      category: "Adjetivo",
      difficulty: "Avançado",
    },
    {
      word: "Encourage",
      phonetic: "/ɪnˈkʌrɪdʒ/",
      translation: "Encorajar, incentivar",
      example: "Teachers encourage students to ask questions.",
      examplePt: "Professores encorajam alunos a fazer perguntas.",
      category: "Verbo",
      difficulty: "Intermediário",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Treino de Vocabulário</h2>
        <p className="text-muted-foreground mt-1">Aprenda novas palavras todos os dias</p>
      </div>

      <Card className="border-2 border-secondary/20 gradient-secondary text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Meta Diária</h3>
              <p className="text-white/80 text-sm">10 palavras novas</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">7/10</div>
              <p className="text-white/80 text-sm">palavras</p>
            </div>
          </div>
          <Progress value={70} className="h-2 bg-white/20" indicatorClassName="bg-white" />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {dailyWords.map((item, index) => (
          <Card key={index} className="transition-smooth hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {item.word}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <p className="text-muted-foreground">{item.phonetic}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge variant="outline">{item.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-primary">Tradução:</p>
                <p className="text-lg">{item.translation}</p>
              </div>
              
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <p className="font-semibold text-secondary flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Exemplo:
                </p>
                <p className="italic">&ldquo;{item.example}&rdquo;</p>
                <p className="text-sm text-muted-foreground">{item.examplePt}</p>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <Star className="h-4 w-4" />
                  Adicionar aos Favoritos
                </Button>
                <Button variant="outline" className="gap-2">
                  Praticar
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estatísticas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-primary/5">
              <div className="text-2xl font-bold text-primary">847</div>
              <p className="text-sm text-muted-foreground">Total de Palavras</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/5">
              <div className="text-2xl font-bold text-secondary">156</div>
              <p className="text-sm text-muted-foreground">Palavras Favoritas</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/5">
              <div className="text-2xl font-bold text-accent">92%</div>
              <p className="text-sm text-muted-foreground">Taxa de Retenção</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
