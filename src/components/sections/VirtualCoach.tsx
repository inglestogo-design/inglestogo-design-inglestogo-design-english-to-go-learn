import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, Volume2, RefreshCw, CheckCircle, XCircle, Bot } from "lucide-react";
import { getRandomPhrase, coachPhrases, type CoachPhrase } from "@/data/coachPhrases";
import { speakText } from "@/utils/speechUtils";
import { Badge } from "@/components/ui/badge";

interface Message {
  role: "user" | "assistant";
  content: string;
  isCorrect?: boolean;
}

export const VirtualCoach = () => {
  const [currentPhrase, setCurrentPhrase] = useState<CoachPhrase | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<Message | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    loadNewPhrase();
  }, []);

  const loadNewPhrase = () => {
    const phrase = getRandomPhrase(true);
    setCurrentPhrase(phrase);
    setUserAnswer("");
    setFeedback(null);
  };

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:]/g, '')
      .replace(/\s+/g, ' ');
  };

  const checkAnswer = () => {
    if (!currentPhrase || !userAnswer.trim()) return;

    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(currentPhrase.english);
    const isCorrect = normalizedUser === normalizedCorrect;

    let feedbackContent = "";
    if (isCorrect) {
      feedbackContent = `✅ **Perfeito!** / **Perfect!**\n\n**Sua resposta:** ${userAnswer}\n**Your answer:** ${userAnswer}\n\n🎯 Você acertou! Continue assim!\n🎯 You got it right! Keep it up!\n\n📘 **Pronúncia:** ${currentPhrase.pronunciation}`;
      speakText(currentPhrase.english);
    } else {
      feedbackContent = `🔴 **Ops! Vamos corrigir** / **Oops! Let's correct**\n\n**Sua resposta:** ${userAnswer}\n**Your answer:** ${userAnswer}\n\n**Resposta correta:** ${currentPhrase.english}\n**Correct answer:** ${currentPhrase.english}\n\n💡 **Dica:** Compare sua resposta com a correta e tente novamente!\n💡 **Tip:** Compare your answer with the correct one and try again!\n\n📘 **Pronúncia:** ${currentPhrase.pronunciation}`;
      speakText(currentPhrase.english);
    }

    setFeedback({ role: "assistant", content: feedbackContent, isCorrect });
    setAttemptCount(prev => prev + 1);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      checkAnswer();
    }
  };

  const playPronunciation = () => {
    if (currentPhrase) {
      speakText(currentPhrase.english);
    }
  };

  if (!currentPhrase) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-glow">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          💬 Virtual Coach
        </h2>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            🎯 <strong>Como funciona:</strong> Traduza a frase do português para o inglês e receba correção instantânea com pronúncia!<br/>
            🎯 <strong>How it works:</strong> Translate the phrase from Portuguese to English and get instant correction with pronunciation!
          </p>
        </CardContent>
      </Card>

      <Card className="border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Traduza / Translate
            </CardTitle>
            <Badge variant="outline" className="text-xs">{currentPhrase.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">
              🇧🇷 Como você diria em inglês? / How would you say in English?
            </p>
            <p className="text-2xl font-bold text-primary mb-2">{currentPhrase.portuguese}</p>
            <Button variant="ghost" size="sm" onClick={playPronunciation} className="text-xs text-accent hover:text-accent/80">
              <Volume2 className="w-4 h-4 mr-1" />
              Ouvir pronúncia / Listen
            </Button>
          </div>

          {feedback && (
            <Card className={`border-2 ${feedback.isCorrect ? 'border-green-500 bg-green-500/5' : 'border-orange-500 bg-orange-500/5'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${feedback.isCorrect ? 'bg-green-500' : 'bg-orange-500'} flex items-center justify-center`}>
                    {feedback.isCorrect ? <CheckCircle className="w-5 h-5 text-white" /> : <XCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div className="flex-1 text-sm whitespace-pre-wrap">{feedback.content}</div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">✍️ Sua resposta / Your answer:</label>
            <Textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua tradução em inglês... / Type your translation in English..."
              className="min-h-[80px] resize-none"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={checkAnswer} disabled={!userAnswer.trim()} className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Send className="w-4 h-4 mr-2" />
              Verificar / Check
            </Button>
            <Button onClick={loadNewPhrase} variant="outline" className="border-primary/20">
              <RefreshCw className="w-4 h-4 mr-2" />
              Nova frase / New phrase
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">📊 Suas Estatísticas / Your Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <p className="text-2xl font-bold text-primary">{attemptCount}</p>
              <p className="text-muted-foreground">Tentativas / Attempts</p>
            </div>
            <div className="text-center p-3 bg-accent/10 rounded-lg">
              <p className="text-2xl font-bold text-accent">
                {coachPhrases.length}
              </p>
              <p className="text-muted-foreground">
                Frases disponíveis / Available phrases
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
