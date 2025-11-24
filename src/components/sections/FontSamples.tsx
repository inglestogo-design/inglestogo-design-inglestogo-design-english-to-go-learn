import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export const FontSamples = () => {
  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  const fonts = [
    { name: "Fredoka", class: "font-fredoka", style: "Suave e arredondada - muito amigável!" },
    { name: "Nunito", class: "font-nunito", style: "Leve e moderna - super legível" },
    { name: "Quicksand", class: "font-quicksand", style: "Geométrica e divertida" },
    { name: "Comfortaa", class: "font-comfortaa", style: "Confortável e única" },
    { name: "Baloo 2", class: "font-baloo", style: "Alegre e jovial - cheia de personalidade!" },
    { name: "Righteous", class: "font-righteous", style: "Bold e descolada" },
    { name: "Bubblegum Sans", class: "font-bubblegum", style: "Fofa e brincalhona" },
    { name: "Luckiest Guy", class: "font-luckiest", style: "Super animada e vibrante!" },
    { name: "Pacifico", class: "font-pacifico", style: "Estilo surf - relaxada e cool" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">
          <strong>Escolha sua Fonte Favorita</strong> / Choose Your Font
        </h2>
        <p className="text-muted-foreground mt-1">
          Clique na fonte que mais combina com você! / Click on your favorite font!
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fonts.map((font) => (
          <Card
            key={font.name}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              selectedFont === font.name
                ? "border-2 border-primary bg-primary/5"
                : "border-2 border-transparent hover:border-primary/30"
            }`}
            onClick={() => setSelectedFont(font.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-base">{font.name}</span>
                {selectedFont === font.name && (
                  <Check className="h-5 w-5 text-primary animate-scale-in" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className={`${font.class} text-2xl md:text-3xl font-bold text-secondary italic text-center py-4`}>
                "Inglês que se move com você"
              </p>
              <p className="text-xs text-muted-foreground text-center">{font.style}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedFont && (
        <Card className="border-2 border-primary/50 bg-primary/5 animate-scale-in">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                ✨ Você selecionou: <strong>{selectedFont}</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                Me avise qual fonte você escolheu para eu aplicar no app! 🎯
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
