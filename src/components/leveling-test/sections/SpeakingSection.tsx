import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Volume2 } from "lucide-react";
import { speakText } from "@/utils/speechUtils";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useToast } from "@/hooks/use-toast";

interface SpeakingSectionProps {
  onComplete: (score: number) => void;
}

const prompts = [
  {
    text: "Introduce yourself. Say your name and where you are from.",
    example: "My name is Maria and I am from Brazil.",
    level: "basic"
  },
  {
    text: "Describe your daily routine. What do you do in the morning?",
    example: "In the morning, I wake up at 7 AM, have breakfast, and go to work.",
    level: "intermediate"
  },
  {
    text: "Express your opinion: Do you think technology has improved our lives? Why or why not?",
    example: "I believe technology has significantly improved our lives by making communication faster and information more accessible.",
    level: "advanced"
  }
];

export const SpeakingSection = ({ onComplete }: SpeakingSectionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [recordings, setRecordings] = useState<string[]>([]);
  const { isRecording, transcript, startRecording, stopRecording } = useSpeechRecognition();
  const { toast } = useToast();

  const playExample = async () => {
    await speakText(prompts[currentPrompt].example, { 
      rate: 0.85, 
      pitch: 1.0,
      volume: 0.9
    });
  };

  const handleRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleNext = () => {
    if (!transcript || transcript.trim().length < 5) {
      toast({
        title: "Gravação muito curta / Recording too short",
        description: "Por favor, grave uma resposta mais completa. / Please record a more complete answer.",
        variant: "destructive"
      });
      return;
    }

    const newRecordings = [...recordings, transcript];
    setRecordings(newRecordings);

    if (currentPrompt < prompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      // Simple scoring based on transcript length and word count
      const avgWords = newRecordings.reduce((sum, rec) => sum + rec.split(' ').length, 0) / newRecordings.length;
      const score = Math.min(100, (avgWords / 15) * 100); // 15 words = 100%
      onComplete(score);
    }
  };

  const prompt = prompts[currentPrompt];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="w-6 h-6" />
          Fala / Speaking
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Questão {currentPrompt + 1} de {prompts.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-accent/30 p-4 rounded-lg space-y-4">
          <p className="font-medium">{prompt.text}</p>
          <Button onClick={playExample} variant="outline" size="sm" className="gap-2">
            <Volume2 className="w-4 h-4" />
            Ouvir Exemplo / Listen Example
          </Button>
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-4">
            <Button
              onClick={handleRecord}
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              className="w-full gap-2"
            >
              <Mic className="w-5 h-5" />
              {isRecording ? "Parar Gravação / Stop" : "Começar Gravação / Start"}
            </Button>
            
            {transcript && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Sua gravação / Your recording:</p>
                <p className="text-sm italic">{transcript}</p>
              </div>
            )}
          </div>
        </div>

        <Button 
          onClick={handleNext} 
          disabled={!transcript || transcript.trim().length < 5}
          className="w-full"
        >
          {currentPrompt < prompts.length - 1 ? "Próxima / Next" : "Finalizar Seção / Finish Section"}
        </Button>
      </CardContent>
    </Card>
  );
};
