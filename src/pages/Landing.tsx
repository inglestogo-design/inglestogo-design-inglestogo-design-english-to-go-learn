import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Play, Star, Users, Clock, TrendingUp, Shield, Zap, HeadphonesIcon, Globe, BookOpen, Mic, Award, Heart, Brain, Target, Volume2, Lightbulb, Rocket, Eye } from "lucide-react";
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
    { problem: "Cursos caros?", solution: "Apenas R$19,90 reais/mês" },
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
                  Adquira Direto no App - R$19,90 reais/mês
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
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-fredoka font-bold text-center text-primary-dark mb-8">
            Quem é a Teacher Lilli
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img 
              src={profilePhoto} 
              alt="Teacher Lilli - Lillian Barretto" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-lg mx-auto md:mx-0 flex-shrink-0"
            />
            <div className="space-y-4 text-center md:text-left">
              <p className="text-2xl font-fredoka font-bold text-primary-dark">
                Muito prazer, eu sou sua última professora de inglês! 👋
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Me chamo <span className="font-semibold text-primary">Lillian Barretto</span>, sou natural de São Paulo, SP Brasil, 
                e há <span className="font-semibold">17 anos resido fora do Brasil</span>. Iniciei minha carreira como professora 
                e coordenadora em uma Escola de Idiomas, onde pude desenvolver habilidades de ensino e gestão pedagógica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha primeira temporada nos Estados Unidos foi marcada por desafios e aprendizados. Ao conviver com uma 
                família americana, deparei-me com a dificuldade de compreender o inglês da vida real, com fala conectada 
                e repleto de gírias. <span className="font-semibold text-primary-dark">Isso me fez questionar as metodologias de ensino tradicionais.</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na minha segunda temporada, após casar e ter uma filha, senti um forte desejo ardente de garantir que 
                ela também dominasse o português, minha língua materna. Embora desafiador no início, isso me levou a 
                realizar extensivas pesquisas sobre os melhores métodos para ensiná-la. Adaptei, experimentei diversas 
                abordagens e observei atentamente sua evolução na língua.
              </p>
              <p className="text-lg font-semibold text-primary-dark leading-relaxed">
                Foi a partir dessa jornada que desenvolvi minha própria metodologia, uma abordagem revolucionária e 
                inovadora que acelera significativamente o processo de aprendizagem. Ao aplicar as mesmas técnicas que 
                usei com minha filha em português aos meus alunos, percebi resultados extraordinários. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-fredoka font-bold text-primary-dark mb-4">
              A Metodologia Revolucionária
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma abordagem única criada na prática, testada nos Estados Unidos, e comprovada com centenas de alunos
            </p>
          </div>

          {/* Descoberta Principal */}
          <Card className="border-2 border-primary/30 mb-12 bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-fredoka font-bold text-primary-dark mb-4">
                A Verdade Que Muda Tudo
              </h3>
              <p className="text-2xl font-semibold text-primary mb-4">
                "O inglês não é uma língua. São DUAS."
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-destructive/10 rounded-lg border-2 border-destructive/20">
                  <BookOpen className="h-12 w-12 mx-auto mb-3 text-destructive" />
                  <h4 className="font-bold text-lg mb-2">Inglês Escrito</h4>
                  <p className="text-muted-foreground">Gramática, regras, livros didáticos - o que você aprende na escola</p>
                </div>
                <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
                  <Volume2 className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-bold text-lg mb-2">Inglês Falado</h4>
                  <p className="text-muted-foreground">Sons reais, fala conectada, gírias - o que você PRECISA no mundo real</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pilares da Metodologia */}
          <h3 className="text-3xl font-fredoka font-bold text-center text-primary-dark mb-8">
            Os 6 Pilares da Metodologia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Brain className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Neurociência Aplicada</h4>
                <p className="text-muted-foreground">
                  Baseada em como o cérebro realmente aprende - 4 a 7 itens por vez, com contexto e emoção
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Target className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Imersão Simulada</h4>
                <p className="text-muted-foreground">
                  Situações reais, diálogos reais, problemas reais - você treina como se estivesse vivendo a cena
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Volume2 className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Fonemas e Sons</h4>
                <p className="text-muted-foreground">
                  Os sons do inglês são a base de tudo - sem dominar os fonemas, você trava
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Zap className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Memória Muscular</h4>
                <p className="text-muted-foreground">
                  Inglês no automático - como andar ou dirigir, sem pensar, só fluindo naturalmente
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Eye className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Os 5 Sentidos</h4>
                <p className="text-muted-foreground">
                  Aprendizagem multissensorial - quanto mais sentidos, mais profunda a fixação
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <Lightbulb className="h-12 w-12 mx-auto text-primary" />
                <h4 className="text-xl font-bold text-primary-dark">Prática em Microdoses</h4>
                <p className="text-muted-foreground">
                  Lições de 5 minutos - informação calibrada para o estado ideal de aprendizagem
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Resultado Final */}
          <Card className="border-2 border-primary mt-12 bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-8 text-center">
              <Rocket className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-fredoka font-bold text-primary-dark mb-4">
                O Resultado: Inglês que Funciona na Hora H
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Na hora que você está diante de alguém falando inglês, na hora que vai viajar, na hora que te fazem 
                uma pergunta inesperada - você não tem tempo de lembrar gramática. Você precisa acessar o inglês REAL. AGORA.
              </p>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                {[
                  "O inglês que eu não tive e criei",
                  "O inglês que finalmente faz sentido",
                  "O inglês que te devolve confiança",
                  "O inglês que muda a sua vida"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold mb-4">
                  🚀 PREÇO DE LANÇAMENTO
                </div>
                <p className="text-6xl font-fredoka font-bold text-primary">R$ 19,90 reais</p>
                <p className="text-xl text-muted-foreground">/mês</p>
                <p className="text-sm font-medium text-primary">Adquira por aqui direto no app</p>
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
                Assinar Agora - R$19,90 reais/mês
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
            Adquira Agora - R$19,90 reais/mês
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
