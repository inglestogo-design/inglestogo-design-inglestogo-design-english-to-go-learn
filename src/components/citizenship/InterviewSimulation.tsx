import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface InterviewSimulationProps {
  onBack: () => void;
}

export const InterviewSimulation = ({ onBack }: InterviewSimulationProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { toast } = useToast();

  const startInterview = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('citizenship-interview', {
        body: { messages: [] }
      });

      if (error) throw error;

      setMessages([{ role: 'assistant', content: data.message }]);
      setHasStarted(true);
    } catch (error: any) {
      console.error('Error starting interview:', error);
      toast({
        title: "Erro / Error",
        description: error.message || "Não foi possível iniciar a entrevista / Could not start interview",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('citizenship-interview', {
        body: { messages: [...messages, userMessage] }
      });

      if (error) throw error;

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro / Error",
        description: error.message || "Não foi possível enviar mensagem / Could not send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Simulação de Entrevista / Interview Simulation 🎙️
          </h2>
          <p className="text-muted-foreground">
            Pratique com um entrevistador virtual do USCIS / Practice with a virtual USCIS officer
          </p>
        </div>
      </div>

      {!hasStarted ? (
        <Card className="p-8 text-center space-y-4">
          <div className="text-6xl mb-4">🎙️</div>
          <h3 className="text-xl font-semibold">Bem-vindo à Simulação de Entrevista N-400</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Esta simulação replica a experiência real de uma entrevista de cidadania americana.
            Um oficial virtual do USCIS fará perguntas sobre sua aplicação, histórico e conhecimento cívico.
          </p>
          <div className="pt-4">
            <Button onClick={startInterview} disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Iniciando...
                </>
              ) : (
                <>Iniciar Entrevista / Start Interview</>
              )}
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="p-4">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-4 rounded-lg">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </Card>

          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Digite sua resposta em inglês... / Type your answer in English..."
              className="min-h-[80px]"
              disabled={isLoading}
            />
            <Button 
              onClick={sendMessage} 
              disabled={isLoading || !input.trim()}
              size="icon"
              className="h-[80px] w-[80px]"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};