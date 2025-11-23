import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "primary" | "secondary";
}

export const StatsCard = ({ title, value, icon: Icon, trend, variant = "default" }: StatsCardProps) => {
  return (
    <Card className={cn(
      "transition-smooth hover:shadow-md",
      variant === "primary" && "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10",
      variant === "secondary" && "border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10"
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <p className="text-xs text-muted-foreground">{trend}</p>
            )}
          </div>
          <div className={cn(
            "rounded-lg p-3",
            variant === "primary" && "bg-primary/10",
            variant === "secondary" && "bg-secondary/10",
            variant === "default" && "bg-muted"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              variant === "primary" && "text-primary",
              variant === "secondary" && "text-secondary",
              variant === "default" && "text-foreground"
            )} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
