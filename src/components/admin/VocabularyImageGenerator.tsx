import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Download, Loader2 } from "lucide-react";
import { vocabularyThemes } from "@/data/vocabularyData";

export const VocabularyImageGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("");

  const generateImagesForTheme = async (themeId: string, startIndex: number = 8) => {
    const themeWords = vocabularyThemes[themeId as keyof typeof vocabularyThemes];
    const wordsToGenerate = themeWords.slice(startIndex).map(w => ({
      word: w.word,
      theme: themeId
    }));

    const { data, error } = await supabase.functions.invoke('generate-vocabulary-images', {
      body: { words: wordsToGenerate }
    });

    if (error) throw error;
    return data;
  };

  const handleGenerateAll = async () => {
    setGenerating(true);
    setProgress(0);
    
    const themes = Object.keys(vocabularyThemes);
    const totalThemes = themes.length;
    
    try {
      for (let i = 0; i < themes.length; i++) {
        const themeId = themes[i];
        setCurrentTheme(themeId);
        
        toast.info(`Gerando imagens para ${themeId}...`);
        
        const result = await generateImagesForTheme(themeId);
        
        const successCount = result.results.filter((r: any) => r.success).length;
        const failCount = result.results.filter((r: any) => !r.success).length;
        
        toast.success(`${themeId}: ${successCount} geradas, ${failCount} falharam`);
        
        setProgress(((i + 1) / totalThemes) * 100);
      }
      
      toast.success("Todas as imagens foram geradas! Baixe o JSON abaixo.");
      
    } catch (error: any) {
      console.error('Error generating images:', error);
      if (error.message.includes('Rate limit')) {
        toast.error("Limite de requisições atingido. Aguarde alguns minutos.");
      } else if (error.message.includes('Payment required')) {
        toast.error("Créditos insuficientes. Adicione créditos ao Lovable AI.");
      } else {
        toast.error("Erro ao gerar imagens: " + error.message);
      }
    } finally {
      setGenerating(false);
      setCurrentTheme("");
    }
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle>Gerador de Imagens AI - Vocabulário</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Gera ilustrações AI para as palavras 9-20 de cada tema usando Lovable AI.
          </p>
          <p className="text-sm font-semibold">
            Total: 144 imagens | Custo estimado: 2-4 créditos Lovable AI
          </p>
        </div>

        {generating && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Gerando {currentTheme}...</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <Button 
          onClick={handleGenerateAll}
          disabled={generating}
          className="w-full"
        >
          {generating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Gerando...
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Gerar Todas (144 imagens)
            </>
          )}
        </Button>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>⚠️ As imagens geradas virão em formato base64</p>
          <p>💡 Após geração, será necessário salvar manualmente no código</p>
          <p>⏱️ Tempo estimado: 5-10 minutos</p>
        </div>
      </CardContent>
    </Card>
  );
};
