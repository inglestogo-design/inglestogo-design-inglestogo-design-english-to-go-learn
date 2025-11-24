import { 
  Volume2, 
  Home, 
  School, 
  UtensilsCrossed, 
  Car, 
  HeartPulse, 
  Palette, 
  Trees, 
  ShirtIcon,
  PawPrint,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Lock,
  Users,
  Heart
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LockedContent } from "@/components/premium/LockedContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { speakText } from "@/utils/speechUtils";
import { vocabularyThemes } from "@/data/vocabularyData";

// Home images
import houseImg from "@/assets/vocabulary/home/house.png";
import doorImg from "@/assets/vocabulary/home/door.png";
import windowImg from "@/assets/vocabulary/home/window.png";
import kitchenImg from "@/assets/vocabulary/home/kitchen.png";
import bedroomImg from "@/assets/vocabulary/home/bedroom.png";
import bathroomImg from "@/assets/vocabulary/home/bathroom.png";
import livingRoomImg from "@/assets/vocabulary/home/living-room.png";
import gardenImg from "@/assets/vocabulary/home/garden.png";

// School images
import schoolImg from "@/assets/vocabulary/school/school.png";
import teacherImg from "@/assets/vocabulary/school/teacher.png";
import studentImg from "@/assets/vocabulary/school/student.png";
import bookImg from "@/assets/vocabulary/school/book.png";
import penImg from "@/assets/vocabulary/school/pen.png";
import pencilImg from "@/assets/vocabulary/school/pencil.png";
import notebookImg from "@/assets/vocabulary/school/notebook.png";
import classroomImg from "@/assets/vocabulary/school/classroom.png";

// Food images
import foodImg from "@/assets/vocabulary/food/food.png";
import waterImg from "@/assets/vocabulary/food/water.png";
import breadImg from "@/assets/vocabulary/food/bread.png";
import milkImg from "@/assets/vocabulary/food/milk.png";
import riceImg from "@/assets/vocabulary/food/rice.png";
import chickenImg from "@/assets/vocabulary/food/chicken.png";
import appleImg from "@/assets/vocabulary/food/apple.png";
import bananaImg from "@/assets/vocabulary/food/banana.png";

// Transportation images
import carImg from "@/assets/vocabulary/transportation/car.png";
import busImg from "@/assets/vocabulary/transportation/bus.png";
import trainImg from "@/assets/vocabulary/transportation/train.png";
import airplaneImg from "@/assets/vocabulary/transportation/airplane.png";
import bicycleImg from "@/assets/vocabulary/transportation/bicycle.png";
import motorcycleImg from "@/assets/vocabulary/transportation/motorcycle.png";
import boatImg from "@/assets/vocabulary/transportation/boat.png";
import subwayImg from "@/assets/vocabulary/transportation/subway.png";

// Body images
import headImg from "@/assets/vocabulary/body/head.png";
import eyeImg from "@/assets/vocabulary/body/eye.png";
import noseImg from "@/assets/vocabulary/body/nose.png";
import mouthImg from "@/assets/vocabulary/body/mouth.png";
import earImg from "@/assets/vocabulary/body/ear.png";
import handImg from "@/assets/vocabulary/body/hand.png";
import footImg from "@/assets/vocabulary/body/foot.png";
import armImg from "@/assets/vocabulary/body/arm.png";

// Colors images
import redImg from "@/assets/vocabulary/colors/red.png";
import blueImg from "@/assets/vocabulary/colors/blue.png";
import greenImg from "@/assets/vocabulary/colors/green.png";
import yellowImg from "@/assets/vocabulary/colors/yellow.png";
import blackImg from "@/assets/vocabulary/colors/black.png";
import whiteImg from "@/assets/vocabulary/colors/white.png";
import orangeImg from "@/assets/vocabulary/colors/orange.png";
import purpleImg from "@/assets/vocabulary/colors/purple.png";

// Nature images
import treeImg from "@/assets/vocabulary/nature/tree.png";
import flowerImg from "@/assets/vocabulary/nature/flower.png";
import sunImg from "@/assets/vocabulary/nature/sun.png";
import moonImg from "@/assets/vocabulary/nature/moon.png";
import starImg from "@/assets/vocabulary/nature/star.png";
import mountainImg from "@/assets/vocabulary/nature/mountain.png";
import riverImg from "@/assets/vocabulary/nature/river.png";
import oceanImg from "@/assets/vocabulary/nature/ocean.png";

// Clothes images
import shirtImg from "@/assets/vocabulary/clothes/shirt.png";
import pantsImg from "@/assets/vocabulary/clothes/pants.png";
import dressImg from "@/assets/vocabulary/clothes/dress.png";
import shoesImg from "@/assets/vocabulary/clothes/shoes.png";
import socksImg from "@/assets/vocabulary/clothes/socks.png";
import hatImg from "@/assets/vocabulary/clothes/hat.png";
import jacketImg from "@/assets/vocabulary/clothes/jacket.png";
import skirtImg from "@/assets/vocabulary/clothes/skirt.png";

// Animals images
import dogImg from "@/assets/vocabulary/animals/dog.png";
import catImg from "@/assets/vocabulary/animals/cat.png";
import birdImg from "@/assets/vocabulary/animals/bird.png";
import fishImg from "@/assets/vocabulary/animals/fish.png";
import horseImg from "@/assets/vocabulary/animals/horse.png";
import cowImg from "@/assets/vocabulary/animals/cow.png";
import lionImg from "@/assets/vocabulary/animals/lion.png";
import elephantImg from "@/assets/vocabulary/animals/elephant.png";

// Jobs images
import doctorImg from "@/assets/vocabulary/jobs/doctor.png";
import teacherJobImg from "@/assets/vocabulary/jobs/teacher.png";
import engineerImg from "@/assets/vocabulary/jobs/engineer.png";
import nurseImg from "@/assets/vocabulary/jobs/nurse.png";
import policeImg from "@/assets/vocabulary/jobs/police.png";
import chefImg from "@/assets/vocabulary/jobs/chef.png";
import artistImg from "@/assets/vocabulary/jobs/artist.png";
import lawyerImg from "@/assets/vocabulary/jobs/lawyer.png";

interface VocabularyWord {
  word: string;
  pronunciation: string;
  translation: string;
  image: string;
}

interface VocabularyTheme {
  id: string;
  title: string;
  titleEn: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  words: VocabularyWord[];
}

export const Vocabulary = () => {
  const [openSections, setOpenSections] = useState<string[]>(["home"]);
  const [loadingAudio, setLoadingAudio] = useState<string | null>(null);
  const { toast } = useToast();
  const { isPremium } = useAuth();
  const FREE_THEMES = ['home', 'school'];

  // Load voices when component mounts
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices
      speechSynthesis.getVoices();
      // Some browsers need this event to fully load voices
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  const playAudio = async (word: string, themeId: string) => {
    const audioKey = `${themeId}-${word}`;
    setLoadingAudio(audioKey);
    
    try {
      // Apply voice gender preference by theme for variety
      const maleThemes = ['home', 'food', 'body', 'nature', 'animals'];
      const gender = maleThemes.includes(themeId) ? 'male' : 'female';
      
      await speakText(word, { 
        gender, 
        rate: 0.85, 
        pitch: 1.05,
        volume: 0.9
      });
      
      setLoadingAudio(null);
    } catch (error) {
      console.error('Error playing audio:', error);
      toast({
        title: "Erro ao reproduzir áudio",
        description: "Não foi possível reproduzir o áudio.",
        variant: "destructive",
      });
      setLoadingAudio(null);
    }
  };

  // Map existing images to first 8 words of each theme
  const themeImages: Record<string, string[]> = {
    home: [houseImg, doorImg, windowImg, kitchenImg, bedroomImg, bathroomImg, livingRoomImg, gardenImg],
    school: [schoolImg, teacherImg, studentImg, bookImg, penImg, pencilImg, notebookImg, classroomImg],
    food: [foodImg, waterImg, breadImg, milkImg, riceImg, chickenImg, appleImg, bananaImg],
    transportation: [carImg, busImg, trainImg, airplaneImg, bicycleImg, motorcycleImg, boatImg, subwayImg],
    body: [headImg, eyeImg, noseImg, mouthImg, earImg, handImg, footImg, armImg],
    colors: [redImg, blueImg, greenImg, yellowImg, blackImg, whiteImg, orangeImg, purpleImg],
    nature: [treeImg, flowerImg, sunImg, moonImg, starImg, mountainImg, riverImg, oceanImg],
    clothes: [shirtImg, pantsImg, dressImg, shoesImg, socksImg, hatImg, jacketImg, skirtImg],
    animals: [dogImg, catImg, birdImg, fishImg, horseImg, cowImg, lionImg, elephantImg],
    jobs: [doctorImg, teacherJobImg, engineerImg, nurseImg, policeImg, chefImg, artistImg, lawyerImg],
  };

  const themeConfig = {
    home: { icon: Home, color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200", title: "Casa", titleEn: "Home" },
    school: { icon: School, color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200", title: "Escola", titleEn: "School" },
    food: { icon: UtensilsCrossed, color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200", title: "Comida", titleEn: "Food" },
    transportation: { icon: Car, color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200", title: "Transporte", titleEn: "Transportation" },
    body: { icon: HeartPulse, color: "text-pink-600", bgColor: "bg-pink-50", borderColor: "border-pink-200", title: "Corpo", titleEn: "Body" },
    colors: { icon: Palette, color: "text-indigo-600", bgColor: "bg-indigo-50", borderColor: "border-indigo-200", title: "Cores", titleEn: "Colors" },
    nature: { icon: Trees, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200", title: "Natureza", titleEn: "Nature" },
    clothes: { icon: ShirtIcon, color: "text-teal-600", bgColor: "bg-teal-50", borderColor: "border-teal-200", title: "Roupas", titleEn: "Clothes" },
    animals: { icon: PawPrint, color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-amber-200", title: "Animais", titleEn: "Animals" },
    jobs: { icon: Briefcase, color: "text-slate-600", bgColor: "bg-slate-50", borderColor: "border-slate-200", title: "Profissões", titleEn: "Jobs" },
    family: { icon: Users, color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200", title: "Família", titleEn: "Family" },
    emotions: { icon: Heart, color: "text-rose-600", bgColor: "bg-rose-50", borderColor: "border-rose-200", title: "Emoções", titleEn: "Emotions" },
  };

  const themes: VocabularyTheme[] = Object.entries(vocabularyThemes).map(([themeId, words]) => {
    const config = themeConfig[themeId as keyof typeof themeConfig];
    const images = themeImages[themeId] || [];
    
    return {
      id: themeId,
      title: config.title,
      titleEn: config.titleEn,
      icon: config.icon,
      color: config.color,
      bgColor: config.bgColor,
      borderColor: config.borderColor,
      words: words.map((word, index) => ({
        ...word,
        image: images[index] || `https://via.placeholder.com/150/CCCCCC/666666?text=${encodeURIComponent(word.word)}`
      }))
    };
  });

  const totalWords = themes.reduce((acc, theme) => acc + theme.words.length, 0);
  const learnedWords = Math.floor(totalWords * 0.65);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Vocabulário por Temas</h2>
        <p className="text-muted-foreground mt-1">Aprenda palavras organizadas por categorias</p>
      </div>

      <Card className="border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Progresso Total</h3>
              <p className="text-sm text-muted-foreground">{totalWords} palavras disponíveis</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{learnedWords}</div>
              <p className="text-sm text-muted-foreground">palavras aprendidas</p>
            </div>
          </div>
          <Progress value={(learnedWords / totalWords) * 100} className="h-2" indicatorClassName="bg-primary" />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {themes.map((theme) => {
          const ThemeIcon = theme.icon;
          const isOpen = openSections.includes(theme.id);
          const isLocked = !isPremium && !FREE_THEMES.includes(theme.id);
          
          return (
            <Collapsible key={theme.id} open={isOpen && !isLocked} onOpenChange={() => !isLocked && toggleSection(theme.id)}>
              <Card className={`transition-smooth hover:shadow-md border-2 ${theme.borderColor} ${isLocked ? 'opacity-60' : ''}`}>
                <CollapsibleTrigger className="w-full" disabled={isLocked}>
                  <CardHeader className={isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${theme.bgColor}`}>
                          {isLocked && <Lock className="absolute h-5 w-5 text-muted-foreground" />}
                          <ThemeIcon className={`h-6 w-6 ${theme.color}`} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl">
                            {theme.title} / {theme.titleEn}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {theme.words.length} palavras {isLocked && '🔒'}
                          </p>
                        </div>
                      </div>
                      {!isLocked && (isOpen ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      ))}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                {!isLocked && (
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {theme.words.map((word, index) => (
                        <div
                          key={index}
                          className={`rounded-lg border-2 ${theme.borderColor} ${theme.bgColor} p-4 transition-smooth hover:shadow-md hover:scale-105 cursor-pointer`}
                        >
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="flex h-24 w-24 items-center justify-center rounded-lg overflow-hidden bg-white">
                              <img 
                                src={word.image} 
                                alt={word.word}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="space-y-1 w-full">
                              <div className="flex items-center justify-center gap-2">
                                <p className="font-bold text-lg">{word.word}</p>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(word.word, theme.id);
                                  }}
                                  disabled={loadingAudio === `${theme.id}-${word.word}`}
                                >
                                  <Volume2 className={`h-3 w-3 ${loadingAudio === `${theme.id}-${word.word}` ? 'animate-pulse' : ''}`} />
                                </Button>
                              </div>
                              <p className={`text-sm font-mono ${theme.color} font-semibold`}>
                                {word.pronunciation}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {word.translation}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
                )}
              </Card>
            </Collapsible>
          );
        })}
        {!isPremium && (
          <LockedContent 
            message="🔒 Desbloqueie todos os 12 temas de vocabulário (240 palavras) com áudio e tradução"
          />
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estatísticas por Tema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {themes.slice(0, 5).map((theme) => {
              const ThemeIcon = theme.icon;
              const learned = Math.floor(theme.words.length * (Math.random() * 0.4 + 0.5));
              return (
                <div key={theme.id} className={`text-center p-4 rounded-lg ${theme.bgColor} border ${theme.borderColor}`}>
                  <ThemeIcon className={`h-6 w-6 ${theme.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold">{learned}/{theme.words.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">{theme.title}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};