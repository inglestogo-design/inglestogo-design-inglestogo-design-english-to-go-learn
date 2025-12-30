import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppErrorBoundary } from "@/components/system/AppErrorBoundary";
import { AppLoading } from "@/components/system/AppFallback";

const Index = lazy(() => import("./pages/Index"));
const Auth = lazy(() => import("./pages/Auth"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LogoOptions = lazy(() => import("./pages/LogoOptions"));
const Support = lazy(() => import("./pages/Support"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppErrorBoundary>
          <AuthProvider>
            <Suspense fallback={<AppLoading />}>
              <Routes>
                {/* SEMPRE redireciona para /auth - app vai direto para login */}
                <Route path="/" element={<Navigate to="/auth" replace />} />
                <Route path="/app" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/support" element={<Support />} />
                <Route path="/logo-options" element={<LogoOptions />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </AppErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
