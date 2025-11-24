import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { n400Glossary, categories } from "@/data/n400GlossaryData";
import { Search, Volume2, BookOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const N400Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredQuestions = n400Glossary.filter(q => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.questionPronunciation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Glossário N-400</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          N-400 Glossary - Interview Questions
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          90 perguntas e respostas essenciais para sua entrevista de cidadania / 
          90 essential questions and answers for your citizenship interview
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pergunta ou resposta / Search question or answer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">
          {filteredQuestions.length} perguntas encontradas / questions found
        </div>
      </Card>

      {/* Questions List */}
      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <Card key={question.id} className="p-6 hover:shadow-lg transition-all">
              <div className="space-y-4">
                {/* Question Number and Category */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">#{question.id}</Badge>
                    {question.category && (
                      <Badge variant="secondary">{question.category}</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAudio(question.question)}
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Question */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-primary">
                        Q: {question.question}
                      </p>
                      <p className="text-sm text-muted-foreground italic mt-1">
                        {question.questionPronunciation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div className="bg-green-500/10 p-4 rounded-lg space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-medium text-green-700 dark:text-green-400">
                        A: {question.answer}
                      </p>
                      <p className="text-sm text-muted-foreground italic mt-1">
                        {question.answerPronunciation}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playAudio(question.answer)}
                    >
                      <Volume2 className="w-4 h-4 text-green-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {filteredQuestions.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">
            Nenhuma pergunta encontrada. Tente outro termo de busca. /
            No questions found. Try a different search term.
          </p>
        </Card>
      )}
    </div>
  );
};
