import { Home, Mic, BookText, BookA, GraduationCap, TrendingUp, BookOpen, Hash, Radio, Zap, Bot, Lightbulb, Flag, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Início", icon: Home },
  { id: "leveling-test", label: "Teste de Nível", icon: Zap },
  { id: "pronunciation", label: "Pronúncia", icon: Mic },
  { id: "vocabulary", label: "Vocabulário", icon: BookText },
  { id: "verbs", label: "Verbos", icon: BookOpen },
  { id: "alphabet", label: "Alfabeto", icon: BookA },
  { id: "numbers", label: "Números", icon: Hash },
  { id: "lessons", label: "Lições", icon: GraduationCap },
  { id: "citizenship", label: "Cidadania", icon: Flag },
  { id: "radio", label: "Rádio 24h", icon: Radio },
  { id: "progress", label: "Progresso", icon: TrendingUp },
  { id: "survivalEnglish", label: "Survival English", icon: Lightbulb },
  { id: "virtualCoach", label: "Coach Virtual", icon: Bot },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { open } = useSidebar();
  const navigate = useNavigate();

  return (
    <Sidebar className={cn("border-r", open ? "w-60" : "w-16")} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(!open && "opacity-0")}>
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onSectionChange(item.id)}
                      isActive={isActive}
                      className={cn(
                        "transition-smooth",
                        isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                      tooltip={item.label}
                    >
                      <Icon className="h-4 w-4" />
                      {open && <span>{item.label}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              
              {/* Settings Link - Always at bottom */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate('/settings')}
                  className="transition-smooth mt-4 border-t pt-4"
                  tooltip="Configurações"
                >
                  <Settings className="h-4 w-4" />
                  {open && <span>Configurações</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
