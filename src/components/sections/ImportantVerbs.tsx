import { Volume2, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ImportantVerbs = () => {
  const verbs = [
    { english: "Be", pronunciation: "bi", translation: "ser, estar" },
    { english: "Have", pronunciation: "rév", translation: "ter" },
    { english: "Do", pronunciation: "du", translation: "fazer" },
    { english: "Say", pronunciation: "sêi", translation: "dizer" },
    { english: "Go", pronunciation: "gou", translation: "ir" },
    { english: "Get", pronunciation: "guét", translation: "conseguir, obter" },
    { english: "Make", pronunciation: "mêik", translation: "fazer, criar" },
    { english: "Know", pronunciation: "nóu", translation: "saber, conhecer" },
    { english: "Think", pronunciation: "tínk", translation: "pensar" },
    { english: "Take", pronunciation: "têik", translation: "pegar, levar" },
    { english: "See", pronunciation: "síi", translation: "ver" },
    { english: "Come", pronunciation: "kâm", translation: "vir" },
    { english: "Want", pronunciation: "uónt", translation: "querer" },
    { english: "Look", pronunciation: "lúk", translation: "olhar" },
    { english: "Use", pronunciation: "iúz", translation: "usar" },
    { english: "Find", pronunciation: "fáind", translation: "encontrar" },
    { english: "Give", pronunciation: "guív", translation: "dar" },
    { english: "Tell", pronunciation: "tél", translation: "contar, dizer" },
    { english: "Work", pronunciation: "uôrk", translation: "trabalhar" },
    { english: "Call", pronunciation: "kól", translation: "chamar, ligar" },
    { english: "Try", pronunciation: "tráai", translation: "tentar" },
    { english: "Ask", pronunciation: "ásk", translation: "perguntar" },
    { english: "Need", pronunciation: "níid", translation: "precisar" },
    { english: "Feel", pronunciation: "fíil", translation: "sentir" },
    { english: "Become", pronunciation: "bikâm", translation: "tornar-se" },
    { english: "Leave", pronunciation: "líiv", translation: "deixar, sair" },
    { english: "Put", pronunciation: "pút", translation: "colocar" },
    { english: "Mean", pronunciation: "míin", translation: "significar" },
    { english: "Keep", pronunciation: "kíip", translation: "manter" },
    { english: "Let", pronunciation: "lét", translation: "permitir" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">30 Verbos Importantes</h2>
        <p className="text-muted-foreground mt-1">
          Verbos essenciais do inglês com pronúncia em alfabeto brasileiro
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Lista Completa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Inglês</TableHead>
                  <TableHead className="font-bold">Pronúncia (alfabeto brasileiro)</TableHead>
                  <TableHead className="font-bold">Tradução</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {verbs.map((verb, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-semibold text-secondary">
                      {verb.english}
                    </TableCell>
                    <TableCell className="font-mono text-primary">
                      {verb.pronunciation}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {verb.translation}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white flex-shrink-0">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Dica de Estudo</h3>
              <p className="text-sm text-muted-foreground">
                Pratique 5 verbos por dia! Repita a pronúncia em voz alta várias vezes e
                tente criar frases usando cada verbo. A repetição é fundamental para fixar
                a pronúncia correta.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Verbos Estudados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">18/30</div>
            <p className="text-sm text-muted-foreground">60% completo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pronúncia Correta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">85%</div>
            <p className="text-sm text-muted-foreground">Precisão média</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Meta de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">5</div>
            <p className="text-sm text-muted-foreground">verbos novos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
