import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-togo.png";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const [transparentLogo, setTransparentLogo] = useState<string>(logo);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const processLogo = async () => {
      // Check if we already have a processed logo in localStorage
      const cachedLogo = localStorage.getItem('transparent-logo');
      if (cachedLogo) {
        setTransparentLogo(cachedLogo);
        return;
      }

      setIsProcessing(true);
      try {
        // Fetch the logo image
        const response = await fetch(logo);
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        // Remove background
        const transparentBlob = await removeBackground(img);
        const transparentUrl = URL.createObjectURL(transparentBlob);
        
        // Convert to base64 for localStorage
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          localStorage.setItem('transparent-logo', base64);
          setTransparentLogo(base64);
        };
        reader.readAsDataURL(transparentBlob);
        
        setTransparentLogo(transparentUrl);
      } catch (error) {
        console.error('Error processing logo:', error);
        toast({
          title: "Aviso / Warning",
          description: "Não foi possível processar o logo transparente / Could not process transparent logo",
          variant: "destructive",
        });
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [toast]);
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img 
            src={transparentLogo} 
            alt="Inglês To Go - A Sua Escola Digital" 
            className={`h-14 md:h-16 w-auto drop-shadow-xl hover:scale-105 transition-transform duration-300 ${isProcessing ? 'opacity-50 animate-pulse' : 'animate-fade-in'}`}
          />
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-muted-foreground font-fredoka font-semibold tracking-wide">
              ✨ A Sua Escola Digital
            </p>
          </div>
        </div>
        
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};
