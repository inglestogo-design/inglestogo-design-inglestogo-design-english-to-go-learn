import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-togo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Inglês To Go - A Sua Escola Digital" 
            className="h-14 md:h-16 w-auto drop-shadow-xl animate-fade-in hover:scale-105 transition-transform duration-300"
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
