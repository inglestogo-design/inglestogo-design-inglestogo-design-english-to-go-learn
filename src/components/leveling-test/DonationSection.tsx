import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

export const DonationSection = () => {
  return (
    <Card className="border-2 border-pink-500/50 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
        </div>
        <CardTitle className="text-2xl">
          Ajude uma criança a estudar inglês 🎓
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Help a child study English
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg text-center space-y-2">
          <p className="text-base leading-relaxed">
            <strong>Sua participação faz a diferença!</strong> Ajude mães solo a pagar aulas de inglês para crianças que sonham em aprender.
          </p>
          <p className="text-sm text-muted-foreground">
            Cada contribuição transforma vidas! 💝
          </p>
          <p className="text-sm italic">
            Your participation makes a difference! Help single mothers pay for English classes for children who dream of learning.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <span className="text-4xl">👧</span>
          <span className="text-4xl">📚</span>
          <span className="text-4xl">❤️</span>
        </div>

        <div className="bg-pink-100/50 dark:bg-pink-900/20 p-4 rounded-lg text-center">
          <p className="text-sm font-medium text-pink-700 dark:text-pink-300">
            🌟 Obrigado por fazer parte desta comunidade!
          </p>
          <p className="text-xs text-pink-600 dark:text-pink-400 mt-1">
            Thank you for being part of this community!
          </p>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Juntos transformamos vidas através da educação! ✨
          <br />
          Together we transform lives through education!
        </p>
      </CardContent>
    </Card>
  );
};
