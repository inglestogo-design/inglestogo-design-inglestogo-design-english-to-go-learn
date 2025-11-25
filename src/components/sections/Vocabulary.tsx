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
import { useUserProgress } from "@/hooks/useUserProgress";
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
import garageImg from "@/assets/vocabulary/home/garage.png";
import roofImg from "@/assets/vocabulary/home/roof.png";
import floorImg from "@/assets/vocabulary/home/floor.png";
import wallImg from "@/assets/vocabulary/home/wall.png";
import ceilingImg from "@/assets/vocabulary/home/ceiling.png";
import stairsImg from "@/assets/vocabulary/home/stairs.png";
import balconyImg from "@/assets/vocabulary/home/balcony.png";
import furnitureImg from "@/assets/vocabulary/home/furniture.png";
import tableImg from "@/assets/vocabulary/home/table.png";
import chairImg from "@/assets/vocabulary/home/chair.png";
import bedImg from "@/assets/vocabulary/home/bed.png";
import sofaImg from "@/assets/vocabulary/home/sofa.png";

// School images
import schoolImg from "@/assets/vocabulary/school/school.png";
import teacherImg from "@/assets/vocabulary/school/teacher.png";
import studentImg from "@/assets/vocabulary/school/student.png";
import bookImg from "@/assets/vocabulary/school/book.png";
import penImg from "@/assets/vocabulary/school/pen.png";
import pencilImg from "@/assets/vocabulary/school/pencil.png";
import notebookImg from "@/assets/vocabulary/school/notebook.png";
import classroomImg from "@/assets/vocabulary/school/classroom.png";
import blackboardImg from "@/assets/vocabulary/school/blackboard.png";
import deskImg from "@/assets/vocabulary/school/desk.png";
import eraserImg from "@/assets/vocabulary/school/eraser.png";
import rulerImg from "@/assets/vocabulary/school/ruler.png";
import backpackImg from "@/assets/vocabulary/school/backpack.png";
import homeworkImg from "@/assets/vocabulary/school/homework.png";
import testImg from "@/assets/vocabulary/school/test.png";
import gradeImg from "@/assets/vocabulary/school/grade.png";
import libraryImg from "@/assets/vocabulary/school/library.png";
import cafeteriaImg from "@/assets/vocabulary/school/cafeteria.png";
import principalImg from "@/assets/vocabulary/school/principal.png";
import lessonImg from "@/assets/vocabulary/school/lesson.png";

// Food images
import foodImg from "@/assets/vocabulary/food/food.png";
import waterImg from "@/assets/vocabulary/food/water.png";
import breadImg from "@/assets/vocabulary/food/bread.png";
import milkImg from "@/assets/vocabulary/food/milk.png";
import riceImg from "@/assets/vocabulary/food/rice.png";
import chickenImg from "@/assets/vocabulary/food/chicken.png";
import appleImg from "@/assets/vocabulary/food/apple.png";
import bananaImg from "@/assets/vocabulary/food/banana.png";
import orangeFoodImg from "@/assets/vocabulary/food/orange.png";
import eggImg from "@/assets/vocabulary/food/egg.png";
import cheeseImg from "@/assets/vocabulary/food/cheese.png";
import meatImg from "@/assets/vocabulary/food/meat.png";
import fishFoodImg from "@/assets/vocabulary/food/fish-food.png";
import vegetableImg from "@/assets/vocabulary/food/vegetable.png";
import fruitImg from "@/assets/vocabulary/food/fruit.png";
import juiceImg from "@/assets/vocabulary/food/juice.png";
import coffeeImg from "@/assets/vocabulary/food/coffee.png";
import teaImg from "@/assets/vocabulary/food/tea.png";
import sugarImg from "@/assets/vocabulary/food/sugar.png";
import saltImg from "@/assets/vocabulary/food/salt.png";

// Transportation images
import carImg from "@/assets/vocabulary/transportation/car.png";
import busImg from "@/assets/vocabulary/transportation/bus.png";
import trainImg from "@/assets/vocabulary/transportation/train.png";
import airplaneImg from "@/assets/vocabulary/transportation/airplane.png";
import bicycleImg from "@/assets/vocabulary/transportation/bicycle.png";
import motorcycleImg from "@/assets/vocabulary/transportation/motorcycle.png";
import boatImg from "@/assets/vocabulary/transportation/boat.png";
import subwayImg from "@/assets/vocabulary/transportation/subway.png";
import taxiImg from "@/assets/vocabulary/transportation/taxi.png";
import truckImg from "@/assets/vocabulary/transportation/truck.png";
import helicopterImg from "@/assets/vocabulary/transportation/helicopter.png";
import shipImg from "@/assets/vocabulary/transportation/ship.png";
import scooterImg from "@/assets/vocabulary/transportation/scooter.png";
import vanImg from "@/assets/vocabulary/transportation/van.png";
import ambulanceImg from "@/assets/vocabulary/transportation/ambulance.png";
import fireTruckImg from "@/assets/vocabulary/transportation/fire-truck.png";
import policeCarImg from "@/assets/vocabulary/transportation/police-car.png";
import tramImg from "@/assets/vocabulary/transportation/tram.png";
import ferryImg from "@/assets/vocabulary/transportation/ferry.png";
import rocketImg from "@/assets/vocabulary/transportation/rocket.png";

// Body images
import headImg from "@/assets/vocabulary/body/head.png";
import eyeImg from "@/assets/vocabulary/body/eye.png";
import noseImg from "@/assets/vocabulary/body/nose.png";
import mouthImg from "@/assets/vocabulary/body/mouth.png";
import earImg from "@/assets/vocabulary/body/ear.png";
import handImg from "@/assets/vocabulary/body/hand.png";
import footImg from "@/assets/vocabulary/body/foot.png";
import armImg from "@/assets/vocabulary/body/arm.png";
import legImg from "@/assets/vocabulary/body/leg.png";
import fingerImg from "@/assets/vocabulary/body/finger.png";
import toeImg from "@/assets/vocabulary/body/toe.png";
import neckImg from "@/assets/vocabulary/body/neck.png";
import shoulderImg from "@/assets/vocabulary/body/shoulder.png";
import kneeImg from "@/assets/vocabulary/body/knee.png";
import elbowImg from "@/assets/vocabulary/body/elbow.png";
import chestImg from "@/assets/vocabulary/body/chest.png";
import backImg from "@/assets/vocabulary/body/back.png";
import stomachImg from "@/assets/vocabulary/body/stomach.png";
import hairImg from "@/assets/vocabulary/body/hair.png";
import skinImg from "@/assets/vocabulary/body/skin.png";

// Colors images
import redImg from "@/assets/vocabulary/colors/red.png";
import blueImg from "@/assets/vocabulary/colors/blue.png";
import greenImg from "@/assets/vocabulary/colors/green.png";
import yellowImg from "@/assets/vocabulary/colors/yellow.png";
import blackImg from "@/assets/vocabulary/colors/black.png";
import whiteImg from "@/assets/vocabulary/colors/white.png";
import orangeImg from "@/assets/vocabulary/colors/orange.png";
import purpleImg from "@/assets/vocabulary/colors/purple.png";
import pinkImg from "@/assets/vocabulary/colors/pink.png";
import brownImg from "@/assets/vocabulary/colors/brown.png";
import grayImg from "@/assets/vocabulary/colors/gray.png";
import goldImg from "@/assets/vocabulary/colors/gold.png";
import silverImg from "@/assets/vocabulary/colors/silver.png";
import beigeImg from "@/assets/vocabulary/colors/beige.png";
import turquoiseImg from "@/assets/vocabulary/colors/turquoise.png";
import navyImg from "@/assets/vocabulary/colors/navy.png";
import limeImg from "@/assets/vocabulary/colors/lime.png";
import magentaImg from "@/assets/vocabulary/colors/magenta.png";
import cyanImg from "@/assets/vocabulary/colors/cyan.png";
import violetImg from "@/assets/vocabulary/colors/violet.png";

// Nature images
import treeImg from "@/assets/vocabulary/nature/tree.png";
import flowerImg from "@/assets/vocabulary/nature/flower.png";
import sunImg from "@/assets/vocabulary/nature/sun.png";
import moonImg from "@/assets/vocabulary/nature/moon.png";
import starImg from "@/assets/vocabulary/nature/star.png";
import mountainImg from "@/assets/vocabulary/nature/mountain.png";
import riverImg from "@/assets/vocabulary/nature/river.png";
import oceanImg from "@/assets/vocabulary/nature/ocean.png";
import skyImg from "@/assets/vocabulary/nature/sky.png";
import cloudImg from "@/assets/vocabulary/nature/cloud.png";
import rainImg from "@/assets/vocabulary/nature/rain.png";
import windImg from "@/assets/vocabulary/nature/wind.png";
import snowImg from "@/assets/vocabulary/nature/snow.png";
import beachImg from "@/assets/vocabulary/nature/beach.png";
import forestImg from "@/assets/vocabulary/nature/forest.png";
import lakeImg from "@/assets/vocabulary/nature/lake.png";
import grassImg from "@/assets/vocabulary/nature/grass.png";
import stoneImg from "@/assets/vocabulary/nature/stone.png";
import sandImg from "@/assets/vocabulary/nature/sand.png";
import leafImg from "@/assets/vocabulary/nature/leaf.png";

// Clothes images
import shirtImg from "@/assets/vocabulary/clothes/shirt.png";
import pantsImg from "@/assets/vocabulary/clothes/pants.png";
import dressImg from "@/assets/vocabulary/clothes/dress.png";
import shoesImg from "@/assets/vocabulary/clothes/shoes.png";
import socksImg from "@/assets/vocabulary/clothes/socks.png";
import hatImg from "@/assets/vocabulary/clothes/hat.png";
import jacketImg from "@/assets/vocabulary/clothes/jacket.png";
import skirtImg from "@/assets/vocabulary/clothes/skirt.png";
import sweaterImg from "@/assets/vocabulary/clothes/sweater.png";
import coatImg from "@/assets/vocabulary/clothes/coat.png";
import glovesImg from "@/assets/vocabulary/clothes/gloves.png";
import scarfImg from "@/assets/vocabulary/clothes/scarf.png";
import tieImg from "@/assets/vocabulary/clothes/tie.png";
import beltImg from "@/assets/vocabulary/clothes/belt.png";
import shortsImg from "@/assets/vocabulary/clothes/shorts.png";
import jeansImg from "@/assets/vocabulary/clothes/jeans.png";
import tshirtImg from "@/assets/vocabulary/clothes/t-shirt.png";
import bootsImg from "@/assets/vocabulary/clothes/boots.png";
import sandalsImg from "@/assets/vocabulary/clothes/sandals.png";
import suitImg from "@/assets/vocabulary/clothes/suit.png";

// Animals images
import dogImg from "@/assets/vocabulary/animals/dog.png";
import catImg from "@/assets/vocabulary/animals/cat.png";
import birdImg from "@/assets/vocabulary/animals/bird.png";
import fishImg from "@/assets/vocabulary/animals/fish.png";
import horseImg from "@/assets/vocabulary/animals/horse.png";
import cowImg from "@/assets/vocabulary/animals/cow.png";
import lionImg from "@/assets/vocabulary/animals/lion.png";
import elephantImg from "@/assets/vocabulary/animals/elephant.png";
import tigerImg from "@/assets/vocabulary/animals/tiger.png";
import bearImg from "@/assets/vocabulary/animals/bear.png";
import monkeyImg from "@/assets/vocabulary/animals/monkey.png";
import rabbitImg from "@/assets/vocabulary/animals/rabbit.png";
import duckImg from "@/assets/vocabulary/animals/duck.png";
import chickenAnimalImg from "@/assets/vocabulary/animals/chicken.png";
import pigImg from "@/assets/vocabulary/animals/pig.png";
import sheepImg from "@/assets/vocabulary/animals/sheep.png";
import goatImg from "@/assets/vocabulary/animals/goat.png";
import turtleImg from "@/assets/vocabulary/animals/turtle.png";
import snakeImg from "@/assets/vocabulary/animals/snake.png";
import frogImg from "@/assets/vocabulary/animals/frog.png";

// Jobs images
import doctorImg from "@/assets/vocabulary/jobs/doctor.png";
import teacherJobImg from "@/assets/vocabulary/jobs/teacher.png";
import engineerImg from "@/assets/vocabulary/jobs/engineer.png";
import nurseImg from "@/assets/vocabulary/jobs/nurse.png";
import policeImg from "@/assets/vocabulary/jobs/police.png";
import chefImg from "@/assets/vocabulary/jobs/chef.png";
import artistImg from "@/assets/vocabulary/jobs/artist.png";
import lawyerImg from "@/assets/vocabulary/jobs/lawyer.png";
import pilotImg from "@/assets/vocabulary/jobs/pilot.png";
import firefighterImg from "@/assets/vocabulary/jobs/firefighter.png";
import scientistImg from "@/assets/vocabulary/jobs/scientist.png";
import dentistImg from "@/assets/vocabulary/jobs/dentist.png";
import musicianImg from "@/assets/vocabulary/jobs/musician.png";
import writerImg from "@/assets/vocabulary/jobs/writer.png";
import driverImg from "@/assets/vocabulary/jobs/driver.png";
import mechanicImg from "@/assets/vocabulary/jobs/mechanic.png";
import actorImg from "@/assets/vocabulary/jobs/actor.png";
import farmerImg from "@/assets/vocabulary/jobs/farmer.png";
import waiterImg from "@/assets/vocabulary/jobs/waiter.png";
import photographerImg from "@/assets/vocabulary/jobs/photographer.png";

// Family images
import motherImg from "@/assets/vocabulary/family/mother.png";
import fatherImg from "@/assets/vocabulary/family/father.png";
import sisterImg from "@/assets/vocabulary/family/sister.png";
import brotherImg from "@/assets/vocabulary/family/brother.png";
import grandmotherImg from "@/assets/vocabulary/family/grandmother.png";
import grandfatherImg from "@/assets/vocabulary/family/grandfather.png";
import babyImg from "@/assets/vocabulary/family/baby.png";
import uncleImg from "@/assets/vocabulary/family/uncle.png";
import auntImg from "@/assets/vocabulary/family/aunt.png";
import cousinImg from "@/assets/vocabulary/family/cousin.png";
import sonImg from "@/assets/vocabulary/family/son.png";
import daughterImg from "@/assets/vocabulary/family/daughter.png";
import nephewImg from "@/assets/vocabulary/family/nephew.png";
import nieceImg from "@/assets/vocabulary/family/niece.png";
import husbandImg from "@/assets/vocabulary/family/husband.png";
import wifeImg from "@/assets/vocabulary/family/wife.png";
import grandchildImg from "@/assets/vocabulary/family/grandchild.png";
import twinImg from "@/assets/vocabulary/family/twin.png";
import stepfatherImg from "@/assets/vocabulary/family/stepfather.png";
import stepmotherImg from "@/assets/vocabulary/family/stepmother.png";

// Emotions images
import happyImg from "@/assets/vocabulary/emotions/happy.png";
import sadImg from "@/assets/vocabulary/emotions/sad.png";
import angryImg from "@/assets/vocabulary/emotions/angry.png";
import scaredImg from "@/assets/vocabulary/emotions/scared.png";
import surprisedImg from "@/assets/vocabulary/emotions/surprised.png";
import excitedImg from "@/assets/vocabulary/emotions/excited.png";
import loveImg from "@/assets/vocabulary/emotions/love.png";
import confusedImg from "@/assets/vocabulary/emotions/confused.png";
import boredImg from "@/assets/vocabulary/emotions/bored.png";
import tiredImg from "@/assets/vocabulary/emotions/tired.png";
import calmImg from "@/assets/vocabulary/emotions/calm.png";
import nervousImg from "@/assets/vocabulary/emotions/nervous.png";
import proudImg from "@/assets/vocabulary/emotions/proud.png";
import jealousImg from "@/assets/vocabulary/emotions/jealous.png";
import embarrassedImg from "@/assets/vocabulary/emotions/embarrassed.png";
import disappointedImg from "@/assets/vocabulary/emotions/disappointed.png";
import gratefulImg from "@/assets/vocabulary/emotions/grateful.png";
import lonelyImg from "@/assets/vocabulary/emotions/lonely.png";
import curiousImg from "@/assets/vocabulary/emotions/curious.png";
import confidentImg from "@/assets/vocabulary/emotions/confident.png";

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
  const { trackActivity } = useUserProgress();
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
      
      trackActivity('vocabulary', 1);
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

  // Map existing images to all 20 words of each theme
  const themeImages: Record<string, string[]> = {
    home: [houseImg, doorImg, windowImg, kitchenImg, bedroomImg, bathroomImg, livingRoomImg, gardenImg, garageImg, roofImg, floorImg, wallImg, ceilingImg, stairsImg, balconyImg, furnitureImg, tableImg, chairImg, bedImg, sofaImg],
    school: [schoolImg, teacherImg, studentImg, bookImg, penImg, pencilImg, notebookImg, classroomImg, blackboardImg, deskImg, eraserImg, rulerImg, backpackImg, homeworkImg, testImg, gradeImg, libraryImg, cafeteriaImg, principalImg, lessonImg],
    food: [foodImg, waterImg, breadImg, milkImg, riceImg, chickenImg, appleImg, bananaImg, orangeFoodImg, eggImg, cheeseImg, meatImg, fishFoodImg, vegetableImg, fruitImg, juiceImg, coffeeImg, teaImg, sugarImg, saltImg],
    transportation: [carImg, busImg, trainImg, airplaneImg, bicycleImg, motorcycleImg, boatImg, subwayImg, taxiImg, truckImg, helicopterImg, shipImg, scooterImg, vanImg, ambulanceImg, fireTruckImg, policeCarImg, tramImg, ferryImg, rocketImg],
    body: [headImg, eyeImg, noseImg, mouthImg, earImg, handImg, footImg, armImg, legImg, fingerImg, toeImg, neckImg, shoulderImg, kneeImg, elbowImg, chestImg, backImg, stomachImg, hairImg, skinImg],
    colors: [redImg, blueImg, greenImg, yellowImg, blackImg, whiteImg, orangeImg, purpleImg, pinkImg, brownImg, grayImg, goldImg, silverImg, beigeImg, turquoiseImg, navyImg, limeImg, magentaImg, cyanImg, violetImg],
    nature: [treeImg, flowerImg, sunImg, moonImg, starImg, mountainImg, riverImg, oceanImg, skyImg, cloudImg, rainImg, windImg, snowImg, beachImg, forestImg, lakeImg, grassImg, stoneImg, sandImg, leafImg],
    clothes: [shirtImg, pantsImg, dressImg, shoesImg, socksImg, hatImg, jacketImg, skirtImg, sweaterImg, coatImg, glovesImg, scarfImg, tieImg, beltImg, shortsImg, jeansImg, tshirtImg, bootsImg, sandalsImg, suitImg],
    animals: [dogImg, catImg, birdImg, fishImg, horseImg, cowImg, lionImg, elephantImg, tigerImg, bearImg, monkeyImg, rabbitImg, duckImg, chickenAnimalImg, pigImg, sheepImg, goatImg, turtleImg, snakeImg, frogImg],
    jobs: [doctorImg, teacherJobImg, engineerImg, nurseImg, policeImg, chefImg, artistImg, lawyerImg, pilotImg, firefighterImg, scientistImg, dentistImg, musicianImg, writerImg, driverImg, mechanicImg, actorImg, farmerImg, waiterImg, photographerImg],
    family: [motherImg, fatherImg, sisterImg, brotherImg, grandmotherImg, grandfatherImg, babyImg, uncleImg, auntImg, cousinImg, sonImg, daughterImg, nephewImg, nieceImg, husbandImg, wifeImg, grandchildImg, twinImg, stepfatherImg, stepmotherImg],
    emotions: [happyImg, sadImg, angryImg, scaredImg, surprisedImg, excitedImg, loveImg, confusedImg, boredImg, tiredImg, calmImg, nervousImg, proudImg, jealousImg, embarrassedImg, disappointedImg, gratefulImg, lonelyImg, curiousImg, confidentImg],
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