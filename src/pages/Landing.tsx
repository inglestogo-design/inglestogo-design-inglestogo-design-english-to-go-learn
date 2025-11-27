import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Play, Star, Users, Clock, TrendingUp, Shield, Zap, HeadphonesIcon, Globe, BookOpen, Mic, Award, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import logo from "@/assets/logo-final.png";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Mic, text: "Pronúncia com IA" },
    { icon: BookOpen, text: "10 Níveis Progressivos" },
    { icon: Users, text: "Coach Virtual 24/7" },
    { icon: Globe, text: "Alfabeto Completo" },
    { icon: Star, text: "240+ Palavras" },
    { icon: Clock, text: "Lições de 5 Minutos" },
    { icon: TrendingUp, text: "Progresso Gamificado" },
    { icon: Shield, text: "Certificado N-400" },
    { icon: Zap, text: "Teste de Nível" },
    { icon: HeadphonesIcon, text: "Rádio 24h" },
    { icon: Award, text: "24 Verbos Essenciais" },
    { icon: BookOpen, text: "Dicionário A-Z" },
    { icon: Star, text: "Survival English" },
    { icon: Users, text: "Prep Cidadania" },
    { icon: Globe, text: "Au Pair Course" },
    { icon: Award, text: "TOEFL 360°" },
    { icon: Clock, text: "Números 1-100" },
    { icon: Heart, text: "Impacto Social" },
  ];

  const problems = [
    { problem: "Vergonha de falar?", solution: "Pratique sozinho com IA" },
    { problem: "Cursos caros?", solution: "Apenas R$9,90/mês" },
    { problem: "Sem tempo?", solution: "Lições de 5 minutos" },
  ];

  const courses = [
    { title: "👶 Au Pair do Zero", description: "Prepare-se para ser Au Pair nos EUA" },
    { title: "🇺🇸 Cidadania N-400", description: "Entrevista de cidadania americana" },
    { title: "📚 TOEFL 360°", description: "Preparação completa para o TOEFL" },
  ];

  const comparison = [
    { feature: "Pronúncia em português BR", us: true, others: false },
    { feature: "Acesso 24/7", us: true, others: false },
    { feature: "Coach com IA", us: true, others: false },
    { feature: "Preço acessível", us: true, others: false },
    { feature: "Certificação N-400", us: true, others: false },
    { feature: "Cursos especializados", us: true, others: false },
  ];

  const faqs = [
    { q: "Funciona offline?", a: "Sim! Após o primeiro acesso, você pode usar várias funcionalidades sem internet." },
    { q: "Posso cancelar a qualquer momento?", a: "Sim, sem burocracia. Cancele quando quiser pelo app." },
    { q: "Tem certificado?", a: "Sim! Ao completar os cursos, você recebe certificados digitais." },
    { q: "Funciona no celular?", a: "Perfeitamente! Disponível para Android e iOS." },
    { q: "Quanto tempo para ficar fluente?", a: "Depende da dedicação, mas com 15min/dia, resultados em 3-6 meses." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img src={logo} alt="Inglês to Go" className="h-16 w-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-fredoka font-bold text-primary-dark leading-tight">
                Aprenda Inglês<br />no Seu Ritmo
              </h1>
              <p className="text-xl text-muted-foreground">
                O único app com pronúncia guiada em português brasileiro
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                  onClick={() => navigate('/auth')}
                >
                  Começar Agora - R$9,90/mês
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6"
                  onClick={() => navigate('/auth')}
                >
                  Ver Demo Grátis
                </Button>
              </div>
            </div>
            
            {/* Video Demo Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center space-y-2">
                  <Play className="h-16 w-16 mx-auto text-primary" />
                  <p className="text-muted-foreground">Vídeo Demo (1 minuto)</p>
                  <p className="text-sm text-muted-foreground">Em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={profilePhoto} 
              alt="Professora" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
            />
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-fredoka font-bold text-primary-dark">Quem Sou Eu</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olá! Sou professora de inglês com anos de experiência ensinando brasileiros. 
                Criei o Inglês to Go porque acredito que todo mundo pode aprender inglês de forma 
                acessível, prática e no seu próprio ritmo. 🎓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas & Soluções */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            Problemas Que Resolvemos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <X className="h-12 w-12 mx-auto text-destructive mb-2" />
                    <p className="text-lg font-semibold text-destructive">{item.problem}</p>
                  </div>
                  <div className="text-center pt-4 border-t">
                    <Check className="h-12 w-12 mx-auto text-primary mb-2" />
                    <p className="text-lg font-semibold text-primary">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            18 Funcionalidades Completas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-4 text-center space-y-2">
                  <feature.icon className="h-8 w-8 mx-auto text-primary" />
                  <p className="text-xs font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Especiais */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            Cursos Especializados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card key={idx} className="border-2 border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <p className="text-4xl">{course.title.split(' ')[0]}</p>
                  <h3 className="text-xl font-bold text-primary-dark">{course.title.substring(3)}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos em Vídeo */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            O Que Nossos Alunos Dizem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento Odriane */}
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/r2dbhvATSwc"
                  title="Depoimento Odriane"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center font-medium">Odriane</p>
            </div>

            {/* Depoimento Nayara */}
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/jTRvms4cGkw"
                  title="Depoimento Nayara"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center font-medium">Nayara</p>
            </div>

            {/* Depoimento Mel */}
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Z2jnOTKUdl8"
                  title="Depoimento Mel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center font-medium">Mel</p>
            </div>

            {/* Depoimento Zé */}
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/td9C8JUnDvs"
                  title="Depoimento Zé"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center font-medium">Zé</p>
            </div>

            {/* Depoimento Ana */}
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7ovPoFMmNRQ"
                  title="Depoimento Ana"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center font-medium">Ana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            Inglês to Go vs Cursos Tradicionais
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="p-4 text-left">Funcionalidade</th>
                  <th className="p-4 text-center bg-primary/10">Inglês to Go</th>
                  <th className="p-4 text-center">Outros Cursos</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-4">{item.feature}</td>
                    <td className="p-4 text-center bg-primary/5">
                      {item.us ? <Check className="h-6 w-6 mx-auto text-primary" /> : <X className="h-6 w-6 mx-auto text-muted-foreground" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.others ? <Check className="h-6 w-6 mx-auto text-primary" /> : <X className="h-6 w-6 mx-auto text-destructive" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-fredoka font-bold text-primary-dark mb-8">
            Comece Hoje por Apenas
          </h2>
          <Card className="border-4 border-primary shadow-2xl">
            <CardContent className="p-12 space-y-6">
              <div className="space-y-2">
                <div className="inline-block bg-destructive text-white px-4 py-2 rounded-full font-bold mb-4">
                  50% OFF - BLACK FRIDAY
                </div>
                <p className="text-6xl font-fredoka font-bold text-primary">R$ 9,90</p>
                <p className="text-xl text-muted-foreground">/mês</p>
                <p className="text-sm text-muted-foreground line-through">De R$ 19,90</p>
              </div>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                {["Acesso ilimitado a todos os recursos", "Coach Virtual 24/7", "3 cursos especializados", "Certificados digitais", "Suporte prioritário", "Cancele quando quiser"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                onClick={() => navigate('/auth')}
              >
                Assinar Agora - R$9,90/mês
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final + Impacto Social */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-fredoka font-bold">
            Pronto para Falar Inglês com Confiança?
          </h2>
          <p className="text-xl opacity-90">
            Cada assinatura ajuda uma criança a aprender inglês 💚
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6"
            onClick={() => navigate('/auth')}
          >
            Começar Agora - R$9,90/mês
          </Button>
          <p className="text-sm opacity-75">
            Junte-se a centenas de alunos que já estão aprendendo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <img src={logo} alt="Inglês to Go" className="h-12 w-auto mx-auto mb-4 opacity-50" />
          <p className="text-sm">© 2024 Inglês to Go. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
