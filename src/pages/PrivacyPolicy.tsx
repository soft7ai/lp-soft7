import { ArrowLeft, Shield, Cookie, Database, Lock, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-6">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="space-y-10">
            {/* Introduction */}
            <section className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground leading-relaxed">
                A Soft7 AI está comprometida em proteger a privacidade dos usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos 
                e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">1. Dados que Coletamos</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <p className="text-muted-foreground">
                  Podemos coletar os seguintes tipos de informações:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Informações de contato:</strong> nome, e-mail, telefone e empresa quando você preenche formulários.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Informações de uso:</strong> interações com nossos serviços e funcionalidades utilizadas.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">2. Uso de Cookies</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <p className="text-muted-foreground">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Cookies essenciais:</strong> necessários para o funcionamento básico do site.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Cookies analíticos:</strong> nos ajudam a entender como os visitantes interagem com o site.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Cookies de preferências:</strong> lembram suas preferências e configurações.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                </p>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">3. Como Usamos seus Dados</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <p className="text-muted-foreground">
                  Utilizamos suas informações para:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Fornecer e melhorar nossos serviços</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Entrar em contato para responder suas solicitações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Enviar comunicações de marketing (com seu consentimento)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Analisar o uso do site para melhorias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Cumprir obrigações legais</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">4. Segurança dos Dados</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas 
                  para proteger suas informações pessoais contra acesso não autorizado, 
                  alteração, divulgação ou destruição. Isso inclui criptografia de dados, 
                  controles de acesso e monitoramento contínuo de nossos sistemas.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">5. Seus Direitos</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <p className="text-muted-foreground">
                  De acordo com a LGPD, você tem direito a:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Confirmar a existência de tratamento de dados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Acessar seus dados pessoais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Corrigir dados incompletos ou desatualizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Solicitar a exclusão de dados desnecessários</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Revogar o consentimento a qualquer momento</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold">6. Contato</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco através do e-mail:{" "}
                  <a 
                    href="mailto:privacidade@soft7.ai" 
                    className="text-primary hover:underline"
                  >
                    privacidade@soft7.ai
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to home */}
          <div className="mt-12 text-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para o início
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
