import logo from "@/assets/logo-final.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur mt-12">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <img 
            src={logo} 
            alt="Inglês To Go - Inglês que se move com você" 
            className="h-20 w-auto opacity-40 hover:opacity-60 transition-opacity duration-300"
          />
          <div className="text-center space-y-1">
            <p className="text-sm font-fredoka font-medium text-muted-foreground italic">
              "Inglês que se move com você"
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Inglês To Go. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
