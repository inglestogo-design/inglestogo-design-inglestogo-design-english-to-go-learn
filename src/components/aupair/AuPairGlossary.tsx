import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, Search } from "lucide-react";
import { auPairGlossary } from "@/data/auPairGlossaryData";
import { speakText } from "@/utils/speechUtils";

export const AuPairGlossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(auPairGlossary.map((term) => term.category)))];

  const filteredTerms = auPairGlossary.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definitionPt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || term.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAudio = (text: string) => {
    speakText(text);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            📖 Glossário Au Pair / Au Pair Glossary
          </CardTitle>
          <p className="text-muted-foreground">
            Termos essenciais do programa Au Pair / Essential Au Pair program terms
          </p>
        </CardHeader>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar termo / Search term..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "Todos / All" : category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              Nenhum termo encontrado / No terms found
            </CardContent>
          </Card>
        ) : (
          filteredTerms.map((term, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAudio(term.term)}
                      >
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-primary">{term.pronunciation}</p>
                    <p className="text-xs text-muted-foreground">
                      {term.category}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pt">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="pt">Português</TabsTrigger>
                    <TabsTrigger value="en">English</TabsTrigger>
                  </TabsList>
                  <TabsContent value="pt" className="space-y-2">
                    <p className="text-muted-foreground">{term.definitionPt}</p>
                  </TabsContent>
                  <TabsContent value="en" className="space-y-2">
                    <div className="flex items-start gap-2">
                      <p className="flex-1">{term.definition}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAudio(term.definition)}
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
