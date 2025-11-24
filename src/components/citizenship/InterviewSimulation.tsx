import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Volume2, Mic, Play, ChevronLeft, ChevronRight, StopCircle } from "lucide-react";
import { citizenshipDialogues, DialogueSection } from "@/data/citizenshipDialogues";
import { speakText } from "@/utils/speechUtils";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";
import { Badge } from "@/components/ui/badge";

interface InterviewSimulationProps {
  onBack: () => void;
}

export const InterviewSimulation = ({ onBack }: InterviewSimulationProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const { isRecording, audioURL, startRecording, stopRecording, playRecording, clearRecording } = useAudioRecorder();

  const currentSection = citizenshipDialogues[currentSectionIndex];
  const currentDialogue = currentSection.dialogues[currentDialogueIndex];
  const isLastDialogue = currentDialogueIndex === currentSection.dialogues.length - 1;
  const isLastSection = currentSectionIndex === citizenshipDialogues.length - 1;

  const handlePlayQuestion = async () => {
    if (currentDialogue.speaker === 'agent') {
      await speakText(currentDialogue.english, { rate: 0.8 });
    }
  };

  const handleNext = () => {
    clearRecording();
    if (isLastDialogue) {
      if (!isLastSection) {
        setCurrentSectionIndex(prev => prev + 1);
        setCurrentDialogueIndex(0);
      }
    } else {
      setCurrentDialogueIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    clearRecording();
    if (currentDialogueIndex === 0) {
      if (currentSectionIndex > 0) {
        setCurrentSectionIndex(prev => prev - 1);
        setCurrentDialogueIndex(citizenshipDialogues[currentSectionIndex - 1].dialogues.length - 1);
      }
    } else {
      setCurrentDialogueIndex(prev => prev - 1);
    }
  };

  const isFirstDialogue = currentSectionIndex === 0 && currentDialogueIndex === 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary">
            Simulação de Entrevista / Interview Simulation 🎙️
          </h2>
          <p className="text-muted-foreground">
            Pratique os diálogos reais da entrevista N-400 / Practice real N-400 interview dialogues
          </p>
        </div>
      </div>

      <Card className="p-6 bg-secondary/20">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-lg px-4 py-2">
            {currentSection.title}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {currentDialogueIndex + 1} / {currentSection.dialogues.length}
          </span>
        </div>
      </Card>

      <Card className="p-8">
        <ScrollArea className="h-[500px]">
          <div className="space-y-8">
            {/* Current Dialogue Display */}
            <div className="space-y-6">
              {/* Speaker Badge */}
              <div className="flex items-center gap-3">
                <div className={`text-4xl ${currentDialogue.speaker === 'agent' ? '👔' : '🙋'}`}>
                  {currentDialogue.speaker === 'agent' ? '👔' : '🙋'}
                </div>
                <Badge variant={currentDialogue.speaker === 'agent' ? 'default' : 'secondary'} className="text-lg px-4 py-2">
                  {currentDialogue.speaker === 'agent' ? 'USCIS Officer' : 'Applicant (You)'}
                </Badge>
              </div>

              {/* English Text */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-foreground">English:</h3>
                  {currentDialogue.speaker === 'agent' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePlayQuestion}
                      className="gap-2"
                    >
                      <Volume2 className="h-4 w-4" />
                      Ouvir / Listen
                    </Button>
                  )}
                </div>
                <p className="text-lg text-foreground bg-muted/50 p-4 rounded-lg">
                  {currentDialogue.english}
                </p>
              </div>

              {/* Pronunciation */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Pronúncia:</h3>
                <p className="text-lg text-primary/90 bg-primary/5 p-4 rounded-lg font-medium">
                  {currentDialogue.pronunciation}
                </p>
              </div>

              {/* Recording Section for Applicant Lines */}
              {currentDialogue.speaker === 'applicant' && (
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Sua Vez / Your Turn:
                  </h3>
                  <p className="text-muted-foreground">
                    Grave sua resposta e ouça como você pronunciou / Record your answer and listen to how you pronounced it
                  </p>
                  
                  <div className="flex gap-3">
                    {!isRecording && !audioURL && (
                      <Button
                        onClick={startRecording}
                        variant="default"
                        size="lg"
                        className="gap-2"
                      >
                        <Mic className="h-5 w-5" />
                        Começar Gravação / Start Recording
                      </Button>
                    )}

                    {isRecording && (
                      <Button
                        onClick={stopRecording}
                        variant="destructive"
                        size="lg"
                        className="gap-2 animate-pulse"
                      >
                        <StopCircle className="h-5 w-5" />
                        Parar Gravação / Stop Recording
                      </Button>
                    )}

                    {audioURL && (
                      <>
                        <Button
                          onClick={playRecording}
                          variant="secondary"
                          size="lg"
                          className="gap-2"
                        >
                          <Play className="h-5 w-5" />
                          Ouvir Gravação / Play Recording
                        </Button>
                        <Button
                          onClick={() => {
                            clearRecording();
                            startRecording();
                          }}
                          variant="outline"
                          size="lg"
                          className="gap-2"
                        >
                          <Mic className="h-5 w-5" />
                          Gravar Novamente / Record Again
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={isFirstDialogue}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior / Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          Seção {currentSectionIndex + 1} de {citizenshipDialogues.length}
        </div>

        <Button
          variant="default"
          onClick={handleNext}
          disabled={isLastSection && isLastDialogue}
          className="gap-2"
        >
          Próximo / Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
