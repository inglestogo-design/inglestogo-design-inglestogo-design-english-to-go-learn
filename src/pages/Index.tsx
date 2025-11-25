import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Dashboard } from "@/components/sections/Dashboard";
import { Pronunciation } from "@/components/sections/Pronunciation";
import { Dictionary } from "@/components/sections/Dictionary";
import { Vocabulary } from "@/components/sections/Vocabulary";
import { ImportantVerbs } from "@/components/sections/ImportantVerbs";
import { Alphabet } from "@/components/sections/Alphabet";
import { Lessons } from "@/components/sections/Lessons";
import { ProgressSection } from "@/components/sections/Progress";
import { Numbers } from "@/components/sections/Numbers";
import { Radio } from "@/components/sections/Radio";
import { CitizenshipPrep } from "@/components/sections/CitizenshipPrep";
import { QuoteOfTheDay } from "@/components/sections/QuoteOfTheDay";
import { LevelingTest } from "@/components/leveling-test/LevelingTest";
import { VirtualCoach } from "@/components/sections/VirtualCoach";
import { SurvivalEnglish } from "@/components/sections/SurvivalEnglish";
import { OnboardingQuiz } from "@/components/onboarding/OnboardingQuiz";
import { StudyPlan } from "@/components/onboarding/StudyPlan";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [headerFont, setHeaderFont] = useState("font-fredoka");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [loading, user, navigate]);

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

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveSection} />;
      case "leveling-test":
        return <LevelingTest />;
      case "pronunciation":
        return <Pronunciation />;
      case "dictionary":
        return <Dictionary />;
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
      case "citizenship":
        return <CitizenshipPrep />;
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 flex flex-col">
          <Header fontClass={headerFont} />
          <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="container px-4 py-8 flex-1">
            {renderSection()}
          </main>
          <Footer />
        </div>
      </div>
      <QuoteOfTheDay />
    </SidebarProvider>
  );
};

export default Index;
