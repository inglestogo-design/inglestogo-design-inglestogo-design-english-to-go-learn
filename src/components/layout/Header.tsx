import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.jpg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Inglês To Go - A Sua Escola Digital" 
            className="h-16 w-auto drop-shadow-lg animate-fade-in"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
              INGLÊS TO GO
            </h1>
            <p className="text-xs text-muted-foreground font-medium">A Sua Escola Digital</p>
          </div>
        </div>
        
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};
