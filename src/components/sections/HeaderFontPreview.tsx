import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-final.png";

interface HeaderFontPreviewProps {
  onSelect: (font: string) => void;
}

export const HeaderFontPreview = ({ onSelect }: HeaderFontPreviewProps) => {
  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  const fonts = [
    { name: "Baloo 2", class: "font-baloo", style: "Alegre e jovial - cheia de personalidade!" },
    { name: "Luckiest Guy", class: "font-luckiest", style: "Super animada e vibrante - máxima energia!" },
    { name: "Righteous", class: "font-righteous", style: "Bold e descolada - estilo urbano!" },
    { name: "Bubblegum Sans", class: "font-bubblegum", style: "Fofa e brincalhona - super amigável!" },
    { name: "Pacifico", class: "font-pacifico", style: "Estilo surf - relaxada e cool!" },
    { name: "Fredoka", class: "font-fredoka", style: "Suave e arredondada - moderna e acessível!" },
  ];

  const handleSelect = (fontName: string, fontClass: string) => {
    setSelectedFont(fontName);
    onSelect(fontClass);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">
          <strong>Escolha a Fonte do Título</strong> / Choose Title Font
        </h2>
        <p className="text-muted-foreground mt-1">
          Fontes mais divertidas e descontraídas para "INGLÊS TO GO"! / Most fun fonts for "INGLÊS TO GO"!
        </p>
      </div>

      <div className="grid gap-6">
        {fonts.map((font) => (
          <Card
            key={font.name}
            className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
              selectedFont === font.name
                ? "border-4 border-primary bg-primary/10 shadow-2xl"
                : "border-2 border-transparent hover:border-primary/30"
            }`}
            onClick={() => handleSelect(font.name, font.class)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{font.name}</span>
                {selectedFont === font.name && (
                  <Check className="h-6 w-6 text-primary animate-scale-in" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Preview do header completo */}
              <div className="bg-gradient-to-r from-card via-card to-primary/5 rounded-lg p-4 border-2 border-border">
                <div className="flex items-center gap-4">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-12 w-auto"
                  />
                  <div className="flex flex-col">
                    <h1 className={`text-2xl md:text-4xl font-black ${font.class} bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight leading-tight`}>
                      INGLÊS TO GO
                    </h1>
                    <p className="text-xs text-muted-foreground font-fredoka italic">
                      Inglês que se move com você
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center font-medium">
                {font.style}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedFont && (
        <Card className="border-4 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 animate-scale-in sticky bottom-4">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-lg font-bold">
                ✨ Você selecionou: <span className="text-primary">{selectedFont}</span>
              </p>
              <Button 
                size="lg" 
                className="w-full text-lg font-bold"
                onClick={() => {
                  // Aqui aplicaria a fonte no header real
                }}
              >
                Aplicar Esta Fonte! / Apply This Font!
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
