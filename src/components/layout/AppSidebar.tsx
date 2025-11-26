import { Settings, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigationItems";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter navigation items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return navigationItems;
    
    const query = searchQuery.toLowerCase();
    return navigationItems.filter(item => 
      item.label.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <Sidebar 
      className="border-r !bg-white shadow-xl"
      collapsible="icon"
    >
      <SidebarContent className="pt-4">
        <SidebarGroup>
          {/* Search Input - Only visible when sidebar is open */}
          {open && (
            <div className="px-3 pb-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar / Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9 bg-background"
                />
              </div>
            </div>
          )}
          
          <SidebarGroupLabel className={cn(
            "text-sm font-semibold px-4 mb-2 transition-opacity duration-200",
            !open && "sr-only"
          )}>
            Menu Principal / Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => {
                          onSectionChange(item.id);
                          setSearchQuery(""); // Clear search after selection
                        }}
                        isActive={isActive}
                        className={cn(
                          "w-full justify-start gap-3 px-4 py-3 rounded-lg transition-all text-base",
                          "hover:bg-primary/10 hover:scale-[1.02]",
                          isActive && "bg-primary text-white hover:bg-primary/90 shadow-lg scale-[1.03] font-bold",
                          !isActive && "!text-[#3D3F92] font-semibold"
                        )}
                        tooltip={!open ? item.label : undefined}
                      >
                        <Icon className="h-6 w-6 flex-shrink-0" />
                        {open && (
                          <span className="text-base font-bold">
                            {item.label}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })
              ) : (
                // Show "no results" message when search has no matches
                open && (
                  <div className="px-3 py-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Nenhum resultado / No results
                    </p>
                  </div>
                )
              )}
              
              {/* Settings Link - Always at bottom */}
              <SidebarMenuItem className="mt-6 pt-4 border-t">
                <SidebarMenuButton
                  onClick={() => navigate('/settings')}
                  className={cn(
                    "w-full justify-start gap-3 px-4 py-3 rounded-lg transition-all text-base",
                    "hover:bg-primary/10 hover:scale-[1.02]",
                    "!text-[#3D3F92] font-semibold"
                  )}
                  tooltip={!open ? "Configurações / Settings" : undefined}
                >
                  <Settings className="h-6 w-6 flex-shrink-0" />
                  {open && (
                    <span className="text-base font-bold">
                      Configurações / Settings
                    </span>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
