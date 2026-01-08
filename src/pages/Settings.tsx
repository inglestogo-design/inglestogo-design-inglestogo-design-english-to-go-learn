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
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Save, Bell, ArrowLeft, Trash2, AlertTriangle, Mic } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppSidebar } from "@/components/layout/AppSidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Settings() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [micTesting, setMicTesting] = useState(false);
  const [micResult, setMicResult] = useState<string | null>(null);

  // Settings state
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
        .select('notification_settings')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error loading settings:', error);
        return;
      }

      if (data && data.notification_settings) {
        setNotificationSettings(data.notification_settings as any);
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

  const handleDeleteAccount = async () => {
    if (!user) return;

    setDeleting(true);
    try {
      // Delete profile first (this will cascade delete related data due to RLS)
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', user.id);

      if (profileError) {
        console.error('Error deleting profile:', profileError);
        throw profileError;
      }

      // Sign out the user
      await signOut();

      toast({
        title: "Conta excluída / Account deleted",
        description: "Sua conta foi excluída com sucesso. / Your account has been successfully deleted.",
      });

      // Redirect to auth page
      navigate('/auth');
    } catch (error) {
      console.error('Error deleting account:', error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível excluir sua conta. Tente novamente. / Could not delete your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
    }
  };

  const handleRequestMicrophone = async () => {
    setMicTesting(true);
    setMicResult(null);

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        setMicResult("getUserMedia não disponível neste dispositivo.");
        toast({
          title: "Não suportado / Not supported",
          description: "Seu dispositivo não suporta acesso ao microfone pelo app.",
          variant: "destructive",
        });
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());

      setMicResult("✅ Permissão OK. Microfone liberado.");
      toast({
        title: "Microfone liberado! / Microphone enabled!",
        description: "Agora o iPhone deve mostrar o app em Ajustes > Privacidade > Microfone.",
      });
    } catch (err: any) {
      const name = err?.name || "Unknown";
      const msg = err?.message || "";

      setMicResult(`❌ Falhou (${name}) ${msg ? `- ${msg}` : ""}`);
      toast({
        title: "Microfone bloqueado / Microphone blocked",
        description: `Erro: ${name}. Se for iPhone/iPad: Ajustes > Privacidade e Segurança > Microfone.`,
        variant: "destructive",
      });
    } finally {
      setMicTesting(false);
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
    <SidebarProvider defaultOpen={!isMobile}>
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

          {/* Microphone Diagnostics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-primary" />
                Microfone / Microphone
              </CardTitle>
              <CardDescription>
                Use isto para forçar o pedido de permissão e ver o erro real. / Use this to force the permission prompt and see the real error.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  getUserMedia: <span className="font-medium text-foreground">{navigator.mediaDevices?.getUserMedia ? "OK" : "N/A"}</span>
                </p>
                <p>
                  MediaRecorder: <span className="font-medium text-foreground">{typeof (window as any).MediaRecorder !== "undefined" ? "OK" : "N/A"}</span>
                </p>
                <p>
                  SecureContext: <span className="font-medium text-foreground">{(window as any).isSecureContext ? "OK" : "N/A"}</span>
                </p>
              </div>

              <Button
                onClick={handleRequestMicrophone}
                disabled={micTesting}
                className="w-full sm:w-auto"
              >
                {micTesting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Testando... / Testing...
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Pedir permissão do microfone / Request mic permission
                  </>
                )}
              </Button>

              {micResult && (
                <div className="rounded-lg border bg-muted/40 p-3 text-sm">
                  {micResult}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Delete Account - Apple Requirement 5.1.1(v) */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Trash2 className="h-5 w-5" />
                Excluir Conta / Delete Account
              </CardTitle>
              <CardDescription>
                Exclua permanentemente sua conta e todos os dados / Permanently delete your account and all data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-destructive">
                    <p className="font-semibold mb-1">Atenção! Esta ação é irreversível.</p>
                    <p>Warning! This action cannot be undone.</p>
                  </div>
                </div>
              </div>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="w-full sm:w-auto"
                    disabled={deleting}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir Minha Conta / Delete My Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Confirmar Exclusão / Confirm Deletion
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-2">
                      <p>
                        Tem certeza que deseja excluir sua conta? Esta ação é permanente e não pode ser desfeita.
                      </p>
                      <p>
                        Are you sure you want to delete your account? This action is permanent and cannot be undone.
                      </p>
                      <p className="font-semibold text-destructive">
                        Todos os seus dados, progresso e configurações serão perdidos.
                        <br />
                        All your data, progress, and settings will be lost.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar / Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      disabled={deleting}
                    >
                      {deleting ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Excluindo... / Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Sim, Excluir / Yes, Delete
                        </>
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
