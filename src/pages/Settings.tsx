import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Save, Languages, Bell, ArrowLeft } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function Settings() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);

  // Settings state
  const [languagePreference, setLanguagePreference] = useState("pt-BR");
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    dailyReminder: true,
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [loading, user, navigate]);

  // Load current settings
  useEffect(() => {
    const loadSettings = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('language_preference, notification_settings')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error loading settings:', error);
        return;
      }

      if (data) {
        if (data.language_preference) {
          setLanguagePreference(data.language_preference);
        }
        if (data.notification_settings) {
          setNotificationSettings(data.notification_settings as any);
        }
      }
    };

    loadSettings();
  }, [user]);

  const handleSaveSettings = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          language_preference: languagePreference,
          notification_settings: notificationSettings,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Configurações salvas! / Settings saved!",
        description: "Suas preferências foram atualizadas com sucesso. / Your preferences have been updated successfully.",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível salvar as configurações. / Could not save settings.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleResetOnboarding = async () => {
    if (!user) return;

    setResetting(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ onboarding_completed: false })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Quiz reiniciado! / Quiz reset!",
        description: "Você será redirecionado para o quiz inicial. / You will be redirected to the initial quiz.",
      });

      // Reload page to trigger onboarding flow
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error) {
      console.error('Error resetting onboarding:', error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível reiniciar o quiz. / Could not reset the quiz.",
        variant: "destructive",
      });
    } finally {
      setResetting(false);
    }
  };

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

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeSection="settings" onSectionChange={() => navigate('/')} />
        <div className="flex-1 flex flex-col min-w-0">
          <Header fontClass="font-fredoka" />
          
          <main className="container px-4 py-8 flex-1 max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar / Back
        </Button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Configurações / Settings
            </h1>
            <p className="text-muted-foreground">
              Personalize sua experiência de aprendizado / Customize your learning experience
            </p>
          </div>

          {/* Language Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Idioma / Language
              </CardTitle>
              <CardDescription>
                Escolha o idioma da interface / Choose the interface language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">
                  Idioma preferido / Preferred Language
                </Label>
                <Select value={languagePreference} onValueChange={setLanguagePreference}>
                  <SelectTrigger id="language" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notificações / Notifications
              </CardTitle>
              <CardDescription>
                Gerencie como você recebe notificações / Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">
                    Notificações por Email / Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receba atualizações por email / Receive email updates
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notificationSettings.email}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, email: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">
                    Notificações Push / Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações no navegador / Receive browser notifications
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={notificationSettings.push}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, push: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="daily-reminder">
                    Lembrete Diário / Daily Reminder
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receba lembretes para praticar / Receive practice reminders
                  </p>
                </div>
                <Switch
                  id="daily-reminder"
                  checked={notificationSettings.dailyReminder}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, dailyReminder: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Onboarding Reset */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                Refazer Quiz / Reset Quiz
              </CardTitle>
              <CardDescription>
                Refaça o quiz inicial para atualizar seu plano de estudos / Retake the initial quiz to update your study plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={handleResetOnboarding}
                disabled={resetting}
                className="w-full sm:w-auto"
              >
                {resetting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Reiniciando... / Resetting...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refazer Quiz Inicial / Reset Initial Quiz
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleSaveSettings}
              disabled={saving}
              size="lg"
            >
              {saving ? (
                <>
                  <Save className="mr-2 h-4 w-4 animate-pulse" />
                  Salvando... / Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Configurações / Save Settings
                </>
              )}
            </Button>
          </div>
        </div>
          </main>

          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
