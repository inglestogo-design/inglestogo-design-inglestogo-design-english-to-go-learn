import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Star, Trophy } from "lucide-react";

interface LessonCardProps {
  number: number;
  title: string;
  titleEn: string;
  description: string;
  stars: number;
  completed: boolean;
  locked: boolean;
  points: number;
  onClick: () => void;
}

export const LessonCard = ({
  number,
  title,
  titleEn,
  description,
  stars,
  completed,
  locked,
  points,
  onClick,
}: LessonCardProps) => {
  return (
    <Card 
      className={`transition-smooth hover:shadow-md border-2 ${
        locked ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary/50 cursor-pointer'
      } ${completed ? 'border-success/50 bg-success/5' : ''}`}
      onClick={!locked ? onClick : undefined}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg font-bold text-xl ${
                completed ? 'bg-success text-white' : locked ? 'bg-muted text-muted-foreground' : 'bg-gradient-primary text-white'
              }`}>
                {locked ? <Lock className="h-6 w-6" /> : number}
              </div>
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{titleEn}</p>
              </div>
            </div>
            {completed && (
              <Badge variant="default" className="bg-success">
                <Trophy className="h-3 w-3 mr-1" />
                {points}
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground">{description}</p>

          {/* Stars */}
          {completed && (
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i <= stars ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Action Button */}
          <Button 
            className="w-full" 
            variant={completed ? "outline" : "default"}
            disabled={locked}
          >
            {locked ? 'Bloqueada' : completed ? 'Revisar' : 'Começar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
