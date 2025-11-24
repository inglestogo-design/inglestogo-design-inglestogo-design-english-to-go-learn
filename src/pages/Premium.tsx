import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UpgradeToPremium } from "@/components/premium/UpgradeToPremium";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Premium = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container px-4 py-8 flex-1">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar / Back
        </Button>

        <div className="max-w-2xl mx-auto">
          <UpgradeToPremium />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Premium;
