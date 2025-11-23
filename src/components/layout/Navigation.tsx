import { Home, Mic, BookText, BookA, GraduationCap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", label: "Início", icon: Home },
    { id: "pronunciation", label: "Pronúncia", icon: Mic },
    { id: "vocabulary", label: "Vocabulário", icon: BookText },
    { id: "alphabet", label: "Alfabeto", icon: BookA },
    { id: "lessons", label: "Lições", icon: GraduationCap },
    { id: "progress", label: "Progresso", icon: TrendingUp },
  ];

  return (
    <nav className="sticky top-16 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container px-4">
        <div className="flex gap-1 overflow-x-auto py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-smooth whitespace-nowrap",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
