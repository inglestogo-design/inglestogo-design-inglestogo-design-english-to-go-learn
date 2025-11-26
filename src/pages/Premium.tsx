import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UpgradeToPremium } from "@/components/premium/UpgradeToPremium";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const Premium = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeSection="premium" onSectionChange={() => navigate('/')} />
        <div className="flex-1 flex flex-col min-w-0">
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
      </div>
    </SidebarProvider>
  );
};

export default Premium;
