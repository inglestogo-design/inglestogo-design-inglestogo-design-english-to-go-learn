import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressItem {
  label: string;
  value: number;
  color: "primary" | "secondary" | "accent";
}

interface ProgressChartProps {
  title: string;
  items: ProgressItem[];
}

export const ProgressChart = ({ title, items }: ProgressChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted-foreground">{item.value}%</span>
            </div>
            <Progress 
              value={item.value} 
              className="h-2"
              indicatorClassName={
                item.color === "primary" ? "bg-primary" :
                item.color === "secondary" ? "bg-secondary" :
                "bg-accent"
              }
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
