import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DesktopBlockScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Smartphone className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            📱 App Exclusivo para Mobile
          </h1>
          <p className="text-muted-foreground text-lg">
            O English to Go foi desenvolvido para ser usado no seu celular ou tablet para a melhor experiência de aprendizado.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-foreground flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Baixe o App
          </h2>
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://apps.apple.com', '_blank')}
            >
              🍎 App Store (iPhone/iPad)
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://play.google.com', '_blank')}
            >
              🤖 Google Play (Android)
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Ou acesse este link no navegador do seu celular
        </p>
      </div>
    </div>
  );
};
