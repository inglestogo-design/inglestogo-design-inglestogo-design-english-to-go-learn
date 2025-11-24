import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-smile.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container flex h-24 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Inglês To Go - Inglês que se move com você" 
            className="h-20 w-auto drop-shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <p className="text-sm md:text-base text-foreground font-fredoka font-bold tracking-wide italic">
              "Inglês que se move com você"
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
