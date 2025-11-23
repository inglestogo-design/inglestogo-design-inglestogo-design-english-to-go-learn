import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur mt-12">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <img 
            src={logo} 
            alt="Inglês To Go - A Sua Escola Digital" 
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Inglês To Go - A Sua Escola Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};