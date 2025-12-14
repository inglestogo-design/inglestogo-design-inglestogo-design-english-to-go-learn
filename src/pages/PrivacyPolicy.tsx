import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar / Back
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">
          Política de Privacidade / Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <p className="text-muted-foreground">
            Última atualização / Last updated: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introdução / Introduction</h2>
            <p>
              O aplicativo Inglês to Go ("nós", "nosso" ou "aplicativo") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso aplicativo móvel.
            </p>
            <p className="mt-2 text-muted-foreground italic">
              Inglês to Go ("we", "our", or "app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos / Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">Dados Pessoais / Personal Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Endereço de e-mail (para criação de conta e login)</li>
              <li>Preferências de idioma e configurações do aplicativo</li>
              <li>Dados de progresso de aprendizado</li>
            </ul>
            <p className="mt-2 text-muted-foreground italic">
              Email address (for account creation and login), language preferences and app settings, learning progress data.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">Dados de Uso / Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interações com o aplicativo</li>
              <li>Tempo gasto em lições</li>
              <li>Pontuações e conquistas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso de Dados / Use of Data</h2>
            <p>Usamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer e manter nosso serviço</li>
              <li>Personalizar sua experiência de aprendizado</li>
              <li>Enviar atualizações importantes sobre o aplicativo</li>
              <li>Melhorar nossos serviços</li>
            </ul>
            <p className="mt-2 text-muted-foreground italic">
              We use collected information to: provide and maintain our service, personalize your learning experience, send important app updates, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Armazenamento e Segurança / Storage and Security</h2>
            <p>
              Seus dados são armazenados de forma segura usando criptografia padrão da indústria. Utilizamos provedores de serviços terceirizados confiáveis (Supabase para banco de dados) que seguem práticas rigorosas de segurança.
            </p>
            <p className="mt-2 text-muted-foreground italic">
              Your data is securely stored using industry-standard encryption. We use trusted third-party service providers (Supabase for database) that follow strict security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos / Your Rights</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de sua conta e dados</li>
            </ul>
            <p className="mt-2 text-muted-foreground italic">
              You have the right to: access your personal data, correct inaccurate information, and request deletion of your account and data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Serviços de Terceiros / Third-Party Services</h2>
            <p>
              Nosso aplicativo utiliza serviços de terceiros que podem coletar informações. Esses serviços incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Supabase (autenticação e banco de dados)</li>
              <li>Google/Apple (login social, se utilizado)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Privacidade de Crianças / Children's Privacy</h2>
            <p>
              Nosso aplicativo é adequado para todas as idades. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos sem o consentimento dos pais.
            </p>
            <p className="mt-2 text-muted-foreground italic">
              Our app is suitable for all ages. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política / Changes to This Policy</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página.
            </p>
            <p className="mt-2 text-muted-foreground italic">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato / Contact</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> contato@inglestogo.com
            </p>
            <p className="mt-2 text-muted-foreground italic">
              If you have any questions about this Privacy Policy, please contact us at the email above.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Inglês to Go. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
