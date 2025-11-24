import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Volume2, Sparkles } from "lucide-react";
import { useVoicePreference } from "@/hooks/useVoicePreference";
import { speakText } from "@/utils/speechUtils";
import { useToast } from "@/hooks/use-toast";

interface VoiceSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VoiceSettingsDialog = ({ open, onOpenChange }: VoiceSettingsDialogProps) => {
  const { toast } = useToast();
  const {
    preferredVoiceName,
    availableVoices,
    setPreferredVoice,
    clearPreferredVoice,
  } = useVoicePreference();

  const [selectedVoice, setSelectedVoice] = useState<string>(
    preferredVoiceName || "auto"
  );

  const handleTestVoice = async (voiceName: string) => {
    if (voiceName === "auto") {
      await speakText("Hello! This is an automatic voice selection.", { gender: 'female' });
    } else {
      const voice = availableVoices.find(v => v.name === voiceName);
      if (voice) {
        await speakText("Hello! This is your selected voice.", { voiceName: voice.name });
      }
    }
  };

  const handleSave = () => {
    if (selectedVoice === "auto") {
      clearPreferredVoice();
      toast({
        title: "✅ Configuração salva",
        description: "Usando seleção automática de voz feminina americana.",
      });
    } else {
      setPreferredVoice(selectedVoice);
      const voice = availableVoices.find(v => v.name === selectedVoice);
      toast({
        title: "✅ Configuração salva",
        description: `Voz preferida: ${voice?.name}`,
      });
    }
    onOpenChange(false);
  };

  // Group voices by type (US, UK, other English)
  const usVoices = availableVoices.filter(v => v.lang === 'en-US' || v.lang === 'en_US');
  const ukVoices = availableVoices.filter(v => v.lang === 'en-GB' || v.lang === 'en_GB');
  const otherVoices = availableVoices.filter(
    v => !usVoices.includes(v) && !ukVoices.includes(v)
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Configurações de Voz / Voice Settings
          </DialogTitle>
          <DialogDescription>
            Escolha a voz que você prefere ouvir durante o aprendizado.
            <br />
            Choose your preferred voice for learning.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label htmlFor="voice-select" className="text-base font-semibold">
              Selecionar Voz / Select Voice
            </Label>
            <Select value={selectedVoice} onValueChange={setSelectedVoice}>
              <SelectTrigger id="voice-select" className="w-full bg-background">
                <SelectValue placeholder="Selecione uma voz / Select a voice" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px] bg-background border-2 z-50">
                <SelectItem value="auto" className="font-semibold">
                  🤖 Automático / Automatic (Recomendado)
                </SelectItem>
                
                {usVoices.length > 0 && (
                  <>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                      🇺🇸 Vozes Americanas / American Voices
                    </div>
                    {usVoices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name}>
                        {voice.name}
                      </SelectItem>
                    ))}
                  </>
                )}

                {ukVoices.length > 0 && (
                  <>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                      🇬🇧 Vozes Britânicas / British Voices
                    </div>
                    {ukVoices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name}>
                        {voice.name}
                      </SelectItem>
                    ))}
                  </>
                )}

                {otherVoices.length > 0 && (
                  <>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                      🌍 Outras Vozes / Other Voices
                    </div>
                    {otherVoices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => handleTestVoice(selectedVoice)}
              variant="outline"
              className="flex-1 gap-2"
            >
              <Volume2 className="h-4 w-4" />
              Testar Voz / Test Voice
            </Button>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium mb-2">💡 Dica / Tip:</p>
            <p>
              As vozes disponíveis dependem do seu navegador e sistema operacional. 
              Chrome geralmente tem as melhores vozes americanas.
            </p>
            <p className="mt-2">
              Available voices depend on your browser and operating system. 
              Chrome typically has the best American voices.
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar / Cancel
          </Button>
          <Button onClick={handleSave} className="gap-2">
            <Sparkles className="h-4 w-4" />
            Salvar / Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
