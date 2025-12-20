import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, HelpCircle, ArrowLeft, BookOpen, Headphones, Settings, Send, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Support = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast.error("Por favor, preencha todos os campos / Please fill all fields");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate sending - in production this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    toast.success("Mensagem enviada! Responderemos em breve. / Message sent! We'll respond soon.");
  };

  const faqs = [
    {
      question: "Como faço para criar uma conta?",
      questionEn: "How do I create an account?",
      answer: "Na tela inicial, clique em 'Criar Conta' e preencha seu email e senha. Você receberá acesso imediato ao app.",
      answerEn: "On the main screen, click 'Create Account' and fill in your email and password. You'll get immediate access to the app."
    },
    {
      question: "Como funciona o aprendizado?",
      questionEn: "How does learning work?",
      answer: "O app oferece lições interativas, prática de pronúncia com reconhecimento de voz, vocabulário visual e muito mais para aprender inglês de forma eficiente.",
      answerEn: "The app offers interactive lessons, pronunciation practice with voice recognition, visual vocabulary and much more to learn English efficiently."
    },
    {
      question: "Como excluo minha conta?",
      questionEn: "How do I delete my account?",
      answer: "Vá em Configurações > Excluir Conta. A exclusão é permanente e remove todos os seus dados imediatamente.",
      answerEn: "Go to Settings > Delete Account. Deletion is permanent and removes all your data immediately."
    },
    {
      question: "O app é gratuito?",
      questionEn: "Is the app free?",
      answer: "Sim! Todas as funcionalidades principais do app são 100% gratuitas. Não há cobranças escondidas.",
      answerEn: "Yes! All main app features are 100% free. There are no hidden charges."
    },
    {
      question: "Como reporto um problema?",
      questionEn: "How do I report a problem?",
      answer: "Use o formulário de contato nesta página ou envie um email para support@inglestogo.com com detalhes do problema.",
      answerEn: "Use the contact form on this page or send an email to support@inglestogo.com with problem details."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar / Back
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Suporte / Support
          </h1>
          <p className="text-muted-foreground">
            Estamos aqui para ajudar! / We're here to help!
          </p>
        </div>

        {/* Contact Form Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Formulário de Contato / Contact Form
            </CardTitle>
            <CardDescription>
              Preencha o formulário abaixo e responderemos em até 48 horas / Fill out the form below and we'll respond within 48 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mensagem Enviada! / Message Sent!</h3>
                <p className="text-muted-foreground">
                  Obrigado por entrar em contato. Responderemos em breve.
                  <br />
                  Thank you for contacting us. We'll respond soon.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => { setSubmitted(false); setContactForm({ name: "", email: "", message: "" }); }}
                >
                  Enviar outra mensagem / Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome / Name *</label>
                  <Input
                    type="text"
                    placeholder="Seu nome / Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem / Message *</label>
                  <Textarea
                    placeholder="Descreva sua dúvida ou sugestão... / Describe your question or suggestion..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando... / Sending..." : "Enviar Mensagem / Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Direct Contact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contato Direto / Direct Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Email de Suporte / Support Email</p>
                <a 
                  href="mailto:support@inglestogo.com" 
                  className="text-primary hover:underline"
                >
                  support@inglestogo.com
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Tempo de resposta: até 48 horas úteis. / Response time: up to 48 business hours.
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Perguntas Frequentes / FAQ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-foreground mb-1">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 italic">
                  {faq.questionEn}
                </p>
                <p className="text-foreground">
                  {faq.answer}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {faq.answerEn}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recursos do App / App Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <Headphones className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Pronúncia / Pronunciation</p>
                  <p className="text-sm text-muted-foreground">
                    Pratique sua pronúncia com feedback em tempo real
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Lições / Lessons</p>
                  <p className="text-sm text-muted-foreground">
                    Lições interativas para todos os níveis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Coach Virtual / Virtual Coach</p>
                  <p className="text-sm text-muted-foreground">
                    Pratique conversação com IA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <Settings className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Configurações / Settings</p>
                  <p className="text-sm text-muted-foreground">
                    Gerencie sua conta e preferências
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">English to Go</p>
              <p className="text-sm">Versão / Version: 1.0</p>
              <p className="text-sm mt-2">
                © 2025 English to Go Language School Inc.
              </p>
              <p className="text-sm">Todos os direitos reservados / All rights reserved</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
