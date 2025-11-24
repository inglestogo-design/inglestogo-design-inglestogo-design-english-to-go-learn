import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface LockedContentProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const LockedContent = ({ 
  message = "Conteúdo Premium / Premium Content",
  size = "md" 
}: LockedContentProps) => {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center text-center gap-4`}>
      <Lock className={`${iconSizes[size]} text-muted-foreground/50`} />
      <div>
        <p className="font-medium text-muted-foreground mb-2">{message}</p>
        <Button 
          variant="outline" 
          size={size === "sm" ? "sm" : "default"}
          onClick={() => navigate("/premium")}
        >
          Desbloquear / Unlock
        </Button>
      </div>
    </div>
  );
};
