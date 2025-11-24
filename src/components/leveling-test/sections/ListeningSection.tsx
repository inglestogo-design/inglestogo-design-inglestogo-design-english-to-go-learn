import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Headphones, Volume2 } from "lucide-react";
import { speakText } from "@/utils/speechUtils";

interface ListeningSectionProps {
  onComplete: (score: number) => void;
}

const questions = [
  {
    audio: "Hi! My name is John. I am 25 years old. I live in New York.",
    question: "How old is John?",
    options: ["20", "25", "30", "35"],
    correct: 1,
    level: "basic"
  },
  {
    audio: "The meeting has been rescheduled to next Wednesday at 3 PM. Please confirm your attendance by email.",
    question: "When is the new meeting time?",
    options: [
      "This Wednesday at 3 PM",
      "Next Wednesday at 3 PM",
      "This Wednesday at 5 PM",
      "Next Friday at 3 PM"
    ],
    correct: 1,
    level: "intermediate"
  },
  {
    audio: "Despite the inclement weather, the outdoor event proceeded as planned, albeit with some minor adjustments to accommodate the conditions.",
    question: "What happened to the outdoor event?",
    options: [
      "It was cancelled",
      "It was moved indoors",
      "It continued with small changes",
      "It was postponed"
    ],
    correct: 2,
    level: "advanced"
  }
];

export const ListeningSection = ({ onComplete }: ListeningSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [hasPlayed, setHasPlayed] = useState(false);

  const playAudio = async () => {
    await speakText(questions[currentQuestion].audio, { 
      rate: 0.9, 
      pitch: 1.0,
      volume: 0.9
    });
    setHasPlayed(true);
  };

  const handleNext = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setHasPlayed(false);
    } else {
      const correctAnswers = newAnswers.filter((ans, idx) => ans === questions[idx].correct).length;
      const score = (correctAnswers / questions.length) * 100;
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Headphones className="w-6 h-6" />
          Escuta / Listening
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Questão {currentQuestion + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-accent/30 p-6 rounded-lg text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Clique no botão para ouvir o áudio / Click to listen
          </p>
          <Button onClick={playAudio} variant="outline" size="lg" className="gap-2">
            <Volume2 className="w-5 h-5" />
            Ouvir / Listen
          </Button>
        </div>

        <div className="space-y-2">
          <p className="font-medium">{question.question}</p>
        </div>

        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={!hasPlayed}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <Button 
          onClick={handleNext} 
          disabled={selectedAnswer === "" || !hasPlayed}
          className="w-full"
        >
          {currentQuestion < questions.length - 1 ? "Próxima / Next" : "Finalizar Seção / Finish Section"}
        </Button>
      </CardContent>
    </Card>
  );
};
