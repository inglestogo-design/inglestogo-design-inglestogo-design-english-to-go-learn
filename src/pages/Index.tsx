import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Dashboard } from "@/components/sections/Dashboard";
import { Pronunciation } from "@/components/sections/Pronunciation";
import { Vocabulary } from "@/components/sections/Vocabulary";
import { ImportantVerbs } from "@/components/sections/ImportantVerbs";
import { Alphabet } from "@/components/sections/Alphabet";
import { Lessons } from "@/components/sections/Lessons";
import { ProgressSection } from "@/components/sections/Progress";
import { Numbers } from "@/components/sections/Numbers";
import { Radio } from "@/components/sections/Radio";
import { QuoteOfTheDay } from "@/components/sections/QuoteOfTheDay";
import { LevelingTest } from "@/components/leveling-test/LevelingTest";
import { VirtualCoach } from "@/components/sections/VirtualCoach";
import { SurvivalEnglish } from "@/components/sections/SurvivalEnglish";
import { OnboardingQuiz } from "@/components/onboarding/OnboardingQuiz";
import { StudyPlan } from "@/components/onboarding/StudyPlan";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { user, onboardingCompleted, loading } = useAuth();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [headerFont, setHeaderFont] = useState("font-fredoka");
  const [showStudyPlan, setShowStudyPlan] = useState(false);
  const [userAnswers, setUserAnswers] = useState<any>(null);

  const handleQuizComplete = async () => {
    // Fetch user answers to show in study plan
    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('english_level, motivation, main_difficulties')
        .eq('id', user.id)
        .single();
      
      if (data) {
        setUserAnswers(data);
        setShowStudyPlan(true);
      }
    }
  };

  const handleStartApp = () => {
    setShowStudyPlan(false);
    setActiveSection("home");
  };

  // Show loading while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  // Show onboarding quiz if not completed
  if (user && !onboardingCompleted && !showStudyPlan) {
    return <OnboardingQuiz onComplete={handleQuizComplete} />;
  }

  // Show study plan after quiz completion
  if (showStudyPlan && userAnswers) {
    return (
      <StudyPlan
        userLevel={userAnswers.english_level}
        motivation={userAnswers.motivation}
        difficulties={userAnswers.main_difficulties || []}
        onStart={handleStartApp}
      />
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveSection} />;
      case "leveling-test":
        return <LevelingTest />;
      case "pronunciation":
        return <Pronunciation />;
      case "vocabulary":
        return <Vocabulary />;
      case "verbs":
        return <ImportantVerbs />;
      case "alphabet":
        return <Alphabet />;
      case "numbers":
        return <Numbers />;
      case "lessons":
        return <Lessons />;
      case "progress":
        return <ProgressSection />;
      case "radio":
        return <Radio />;
      case "virtualCoach":
        return <VirtualCoach />;
      case "survivalEnglish":
        return <SurvivalEnglish />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header fontClass={headerFont} />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container px-4 py-8 flex-1">
        {renderSection()}
      </main>
      <Footer />
      <QuoteOfTheDay />
    </div>
  );
};

export default Index;
