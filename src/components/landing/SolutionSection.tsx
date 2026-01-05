import { Brain, Zap, Bot, Database } from "lucide-react";
import { FloatingOrb } from "@/components/ui/parallax";

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 relative overflow-hidden">
      <FloatingOrb 
        className="bg-primary/5 -top-20 -right-20" 
        size="w-80 h-80"
        speed={0.4}
      />
      <FloatingOrb 
        className="bg-primary/3 bottom-0 -left-20" 
        size="w-64 h-64"
        speed={0.3}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* What you need */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não é mais gente. Não é mais ferramenta.
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Você precisa de <span className="text-primary font-semibold">presença</span>,{" "}
              <span className="text-primary font-semibold">timing</span> e{" "}
              <span className="text-primary font-semibold">continuidade</span> — sempre.
            </p>
            <p className="text-lg text-primary font-medium">
              👉 É exatamente aqui que a Soft7 AI atua.
            </p>
          </div>

          {/* What is Soft7 AI */}
          <div className="rounded-3xl p-8 md:p-12 bg-card/80 border border-primary/30 glow relative overflow-hidden backdrop-blur-sm">
            <FloatingOrb 
              className="bg-primary/10 -top-10 -right-10" 
              size="w-64 h-64"
              speed={0.2}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">O que é</p>
                  <h3 className="text-2xl font-bold">Soft7 AI</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Bot className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground line-through">Não é chatbot</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Database className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground line-through">Não é CRM</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Zap className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground line-through">Não é automação fria</span>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                  A Soft7 AI é o{" "}
                  <span className="text-gradient">sistema nervoso do seu comercial.</span>
                </h4>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Uma engenharia de vendas com IA que assume toda a parte invisível do processo — antes do fechamento — 
                  garantindo resposta imediata, acompanhamento contínuo e prioridade correta.
                </p>
              </div>
            </div>
          </div>

          {/* Control message */}
          <div className="mt-12 text-center p-8 rounded-2xl border border-destructive/30 bg-destructive/5">
            <h4 className="text-xl md:text-2xl font-bold mb-2">
              Se você não enxerga, você não controla.
            </h4>
            <p className="text-muted-foreground">
              E se você não controla, está aceitando perder vendas todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
