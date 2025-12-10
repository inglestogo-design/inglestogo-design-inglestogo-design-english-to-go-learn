import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { speakText } from "@/utils/speechUtils";

interface IdiomItem {
  emoji: string;
  english: string;
  portuguese: string;
  pronunciation: string;
  example: string;
}

interface MedicineItem {
  emoji: string;
  english: string;
  portuguese: string;
  pronunciation: string;
}

const idioms: IdiomItem[] = [
  { emoji: "🧊", english: "Break the ice", portuguese: "Começar uma conversa", pronunciation: "breik di áis", example: "He told a joke to break the ice." },
  { emoji: "🍰", english: "Piece of cake", portuguese: "Muito fácil", pronunciation: "píss óv kêik", example: "This test is a piece of cake." },
  { emoji: "🌧️", english: "Under the weather", portuguese: "Se sentir mal", pronunciation: "ândâr dâ uédhâr", example: "I'm feeling a bit under the weather today." },
  { emoji: "💰", english: "Cost an arm and a leg", portuguese: "Muito caro", pronunciation: "kóst ân árm ênd ã lég", example: "That phone costs an arm and a leg." },
  { emoji: "🐱", english: "Let the cat out of the bag", portuguese: "Revelar um segredo", pronunciation: "lét dâ két aut óv dâ bég", example: "She let the cat out of the bag about the surprise." },
  { emoji: "🔫", english: "Bite the bullet", portuguese: "Encarar algo difícil", pronunciation: "báit dâ búllet", example: "I have to bite the bullet and go to the dentist." },
  { emoji: "✂️", english: "Cut corners", portuguese: "Fazer algo de qualquer jeito / Economizar", pronunciation: "kât kórnârs", example: "Don't cut corners on this project." },
  { emoji: "🛏️", english: "Hit the sack", portuguese: "Ir dormir", pronunciation: "rít dâ sék", example: "I'm going to hit the sack, I'm so tired." },
  { emoji: "🦵", english: "Pull someone's leg", portuguese: "Brincar / Fazer piada", pronunciation: "pul sâmwâns lég", example: "Relax, I'm just pulling your leg." },
  { emoji: "💪", english: "Keep your chin up", portuguese: "Fique positivo", pronunciation: "kíp iór tchin âp", example: "Keep your chin up, things will get better." },
  { emoji: "👁️", english: "See eye to eye", portuguese: "Concordar com alguém", pronunciation: "sí ái tchu ái", example: "I don't see eye to eye with him on this." },
  { emoji: "🛣️", english: "Hit the road", portuguese: "Ir embora / Partir", pronunciation: "rít dâ rôud", example: "We should hit the road before it gets dark." },
  { emoji: "🦷", english: "By the skin of your teeth", portuguese: "Quase não conseguiu", pronunciation: "bái dâ skín óv iór títh", example: "He passed the exam by the skin of his teeth." },
  { emoji: "🏃", english: "Go the extra mile", portuguese: "Fazer esforço a mais", pronunciation: "gôu dê ékstrâ máil", example: "She always goes the extra mile for her clients." },
  { emoji: "☁️", english: "Up in the air", portuguese: "Incerto / Não decidido", pronunciation: "âp in dê érr", example: "Our vacation plans are still up in the air." },
  { emoji: "🏳️", english: "Throw in the towel", portuguese: "Desistir", pronunciation: "thrôu in dâ táuel", example: "After trying for hours, he finally threw in the towel." },
  { emoji: "🎁", english: "A blessing in disguise", portuguese: "Algo bom que parecia ruim", pronunciation: "ã bléssing in disgáiz", example: "Losing that job was a blessing in disguise." },
  { emoji: "📄", english: "On the same page", portuguese: "Estar de acordo / Entender a mesma coisa", pronunciation: "ón dâ sêim pêidj", example: "Let's make sure we're on the same page before starting." },
  { emoji: "🔥", english: "In hot water", portuguese: "Em apuros / Problemas", pronunciation: "in rót uótâr", example: "He's in hot water for being late again." },
  { emoji: "🏦", english: "Break the bank", portuguese: "Gastar muito dinheiro", pronunciation: "breik dâ bénk", example: "This vacation won't break the bank." },
  { emoji: "🔨", english: "Hit the nail on the head", portuguese: "Acertar em cheio / Identificar o problema", pronunciation: "rít dâ nêil ón dâ réd", example: "You hit the nail on the head with your comment." },
  { emoji: "🤸", english: "Bend over backwards", portuguese: "Fazer um esforço extra para ajudar", pronunciation: "bénd ôuvâr békuârds", example: "She bent over backwards to help me." },
  { emoji: "📅", english: "Call it a day", portuguese: "Encerrar o trabalho por hoje", pronunciation: "kól it ã dêi", example: "Let's call it a day and finish tomorrow." },
  { emoji: "🚨", english: "Get out of hand", portuguese: "Fugir do controle", pronunciation: "guét aut óv rénd", example: "The party got out of hand last night." },
  { emoji: "👀", english: "Keep an eye on", portuguese: "Ficar de olho em algo", pronunciation: "kíp ân ái ón", example: "Keep an eye on the kids while I cook." },
  { emoji: "⛵", english: "Miss the boat", portuguese: "Perder a oportunidade", pronunciation: "míss dâ bôut", example: "I missed the boat on that investment." },
  { emoji: "⚡", english: "Out of the blue", portuguese: "Do nada / De repente", pronunciation: "aut óv dâ blú", example: "She called me out of the blue yesterday." },
  { emoji: "👃", english: "Under your nose", portuguese: "Bem na sua frente / Óbvio", pronunciation: "ândâr iór nôuz", example: "The mistake was right under your nose." },
  { emoji: "📆", english: "Up to date", portuguese: "Atualizado", pronunciation: "âp tchu dêit", example: "I need to keep my software up to date." },
  { emoji: "🤷", english: "Your guess is as good as mine", portuguese: "Não sei / Não tenho certeza", pronunciation: "iór guéss iz éz gud éz máin", example: "Who will win? Your guess is as good as mine." },
];

const medicines: MedicineItem[] = [
  { emoji: "💊", english: "Painkiller", portuguese: "Analgésico", pronunciation: "pêin-kílâr" },
  { emoji: "💉", english: "Antibiotic", portuguese: "Antibiótico", pronunciation: "ênti-bai-ótik" },
  { emoji: "🧴", english: "Antiseptic", portuguese: "Antisséptico", pronunciation: "ênti-séptik" },
  { emoji: "🤧", english: "Antihistamine", portuguese: "Anti-histamínico", pronunciation: "ênti-rístâ-mín" },
  { emoji: "🩹", english: "Anti-inflammatory", portuguese: "Anti-inflamatório", pronunciation: "ênti-in-flémâ-tóri" },
  { emoji: "🤒", english: "Cold medicine", portuguese: "Remédio para resfriado", pronunciation: "kôuld médissin" },
  { emoji: "🍯", english: "Cough syrup", portuguese: "Xarope para tosse", pronunciation: "kóf sírâp" },
  { emoji: "🌡️", english: "Fever reducer", portuguese: "Redutor de febre", pronunciation: "fívâr ridússâr" },
  { emoji: "💊", english: "Vitamin", portuguese: "Vitamina", pronunciation: "váitâmin" },
  { emoji: "🥤", english: "Antacid", portuguese: "Antiácido", pronunciation: "êntésid" },
];

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const SurvivalEnglish = () => {
  const [activeTab, setActiveTab] = useState("idioms");
  const { isPremium, isInTrialPeriod } = useAuth();
  const hasFullAccess = isPremium || isInTrialPeriod;

  const playAudio = (text: string) => {
    speakText(text, { gender: 'female', rate: 0.85 });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          📚 Survival English
        </h2>
        <p className="text-lg text-muted-foreground">
          Inglês para o dia a dia / Everyday English
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="idioms">
            🗣️ Idiomas e Expressões / Idioms
          </TabsTrigger>
          <TabsTrigger value="words">
            💊 Palavras Solo / Solo Words
          </TabsTrigger>
        </TabsList>

        <TabsContent value="idioms" className="space-y-4 mt-6">
          <div className="grid gap-4">
            {idioms.map((idiom, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-lg transition-smooth border-2"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{idiom.emoji}</span>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {idiom.english}
                      </h3>
                      <button
                        onClick={() => playAudio(idiom.english)}
                        className="p-2 rounded-full hover:bg-muted transition-smooth"
                        title="Ouvir Pronúncia / Listen"
                      >
                        <Volume2 className="h-5 w-5 text-primary" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">
                      🗣️ {idiom.pronunciation}
                    </p>
                    
                    <p className="text-base font-medium text-foreground">
                      🇧🇷 {idiom.portuguese}
                    </p>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Exemplo / Example:</span> "{idiom.example}"
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="words" className="space-y-4 mt-6">
          <div className="mb-4 p-4 bg-muted rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-2">
              💊 Tipos de Medicamentos / Types of Medicine
            </h3>
            <p className="text-sm text-muted-foreground">
              Vocabulário essencial para farmácia e saúde / Essential pharmacy and health vocabulary
            </p>
          </div>
          
          <div className="grid gap-4">
            {medicines.map((medicine, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-lg transition-smooth border-2"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{medicine.emoji}</span>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {medicine.english}
                      </h3>
                      <button
                        onClick={() => playAudio(medicine.english)}
                        className="p-2 rounded-full hover:bg-muted transition-smooth"
                        title="Ouvir Pronúncia / Listen"
                      >
                        <Volume2 className="h-5 w-5 text-primary" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">
                      🗣️ {medicine.pronunciation}
                    </p>
                    
                    <p className="text-base font-medium text-foreground">
                      🇧🇷 {medicine.portuguese}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
