import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const PremiumBadge = ({ size = "default" }: { size?: "default" | "sm" | "lg" }) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    default: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2"
  };

  return (
    <Badge 
      className={`bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold ${sizeClasses[size]} flex items-center gap-1`}
    >
      <Crown className="h-3 w-3" />
      Premium
    </Badge>
  );
};
