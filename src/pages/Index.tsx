import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Dashboard } from "@/components/sections/Dashboard";
import { Pronunciation } from "@/components/sections/Pronunciation";
import { Vocabulary } from "@/components/sections/Vocabulary";
import { Alphabet } from "@/components/sections/Alphabet";
import { Lessons } from "@/components/sections/Lessons";
import { ProgressSection } from "@/components/sections/Progress";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "pronunciation":
        return <Pronunciation />;
      case "vocabulary":
        return <Vocabulary />;
      case "alphabet":
        return <Alphabet />;
      case "lessons":
        return <Lessons />;
      case "progress":
        return <ProgressSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
