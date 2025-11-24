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

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [headerFont, setHeaderFont] = useState("font-fredoka");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveSection} />;
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
