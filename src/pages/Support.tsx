import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, HelpCircle, ArrowLeft, BookOpen, Headphones, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Como faço para criar uma conta?",
      questionEn: "How do I create an account?",
      answer: "Na tela inicial, clique em 'Criar Conta' e preencha seu email e senha.",
      answerEn: "On the main screen, click 'Create Account' and fill in your email and password."
    },
    {
      question: "Como funciona o aprendizado?",
      questionEn: "How does learning work?",
      answer: "O app oferece lições interativas, prática de pronúncia, vocabulário e muito mais para aprender inglês de forma eficiente.",
      answerEn: "The app offers interactive lessons, pronunciation practice, vocabulary and much more to learn English efficiently."
    },
    {
      question: "Como excluo minha conta?",
      questionEn: "How do I delete my account?",
      answer: "Vá em Configurações > Excluir Conta. A exclusão é permanente e remove todos os seus dados.",
      answerEn: "Go to Settings > Delete Account. Deletion is permanent and removes all your data."
    },
    {
      question: "O app é gratuito?",
      questionEn: "Is the app free?",
      answer: "Sim! Todas as funcionalidades do app são 100% gratuitas.",
      answerEn: "Yes! All app features are 100% free."
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

        {/* Contact Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Entre em Contato / Contact Us
            </CardTitle>
            <CardDescription>
              Envie suas dúvidas ou sugestões / Send your questions or suggestions
            </CardDescription>
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
              Respondemos em até 48 horas úteis. / We respond within 48 business hours.
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
