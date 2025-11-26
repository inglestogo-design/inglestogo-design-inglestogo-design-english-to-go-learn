import { Settings } from "lucide-react";
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
import { navigationItems } from "@/data/navigationItems";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { open } = useSidebar();
  const navigate = useNavigate();

  return (
    <Sidebar 
      className="border-r"
      collapsible="icon"
    >
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-sm font-semibold px-4 mb-2 transition-opacity duration-200",
            !open && "sr-only"
          )}>
            Menu Principal / Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onSectionChange(item.id)}
                      isActive={isActive}
                      className={cn(
                        "w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-all",
                        "hover:bg-primary/10 hover:scale-[1.02]",
                        isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground font-semibold"
                      )}
                      tooltip={!open ? item.label : undefined}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className={cn(
                        "text-sm whitespace-nowrap overflow-hidden transition-all duration-200",
                        !open && "w-0 opacity-0",
                        open && "w-auto opacity-100"
                      )}>
                        {item.label}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              
              {/* Settings Link - Always at bottom */}
              <SidebarMenuItem className="mt-6 pt-4 border-t">
                <SidebarMenuButton
                  onClick={() => navigate('/settings')}
                  className={cn(
                    "w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-all",
                    "hover:bg-primary/10 hover:scale-[1.02]"
                  )}
                  tooltip={!open ? "Configurações / Settings" : undefined}
                >
                  <Settings className="h-5 w-5 flex-shrink-0" />
                  <span className={cn(
                    "text-sm whitespace-nowrap overflow-hidden transition-all duration-200",
                    !open && "w-0 opacity-0",
                    open && "w-auto opacity-100"
                  )}>
                    Configurações / Settings
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
