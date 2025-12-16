import { User, LogOut, Settings, Menu, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { PremiumBadge } from "@/components/premium/PremiumBadge";
import { VoiceSettingsDialog } from "@/components/settings/VoiceSettingsDialog";
import { useState } from "react";
import logo from "@/assets/english-to-go-logo.png";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface HeaderProps {
  fontClass?: string;
}

export const Header = ({ fontClass = "font-baloo" }: HeaderProps) => {
  const { user, signOut, isPremium } = useAuth();
  const navigate = useNavigate();
  const [voiceSettingsOpen, setVoiceSettingsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Sidebar Toggle Button - Always visible */}
          <SidebarTrigger className="h-10 w-10 hover:bg-primary/10 hover:scale-110 transition-all duration-300 ease-in-out hover:rotate-180">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <img 
            src={logo} 
            alt="English To Go - English that moves with you" 
            className="h-12 md:h-14 w-auto drop-shadow-xl animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <h1 className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black ${fontClass} bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight leading-tight`}>
              ENGLISH TO GO
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-fredoka font-medium tracking-wide italic">
              English that moves with you
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {isPremium && <PremiumBadge />}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background z-50">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Minha Conta / My Account</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações / Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setVoiceSettingsOpen(true)}>
                  <Settings className="mr-2 h-4 w-4" />
                  Configurar Voz / Voice Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/support")}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Suporte / Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair / Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="default" 
              onClick={() => navigate("/auth")}
              className="font-medium"
            >
              Entrar / Login
            </Button>
          )}
        </div>
      </div>
      
      <VoiceSettingsDialog 
        open={voiceSettingsOpen} 
        onOpenChange={setVoiceSettingsOpen} 
      />
    </header>
  );
};
