import { Button } from "@/components/ui/button";
import { Moon, HelpCircle, Brain, Users, Ghost, Eye, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const problems = [
  { icon: Moon, text: "Lead chega à noite e fica para depois" },
  { icon: HelpCircle, text: "Pergunta simples trava a compra por horas" },
  { icon: Brain, text: "Follow-up depende de memória" },
  { icon: Users, text: "Time filtra curiosos em vez de fechar" },
  { icon: Ghost, text: "Cliente some sem dizer 'não'" },
  { icon: Eye, text: "Você não enxerga quantos clientes chegam e quantos são realmente atendidos" },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Isso acontece na sua empresa?
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Se você identificar pelo menos 2 dessas situações, sua empresa tem um vazamento ativo.
          </p>

          <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-12" staggerDelay={0.1}>
            {problems.map((problem, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card/80 border border-border hover:border-destructive/30 transition-all duration-300 group h-full backdrop-blur-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-foreground group-hover:text-foreground/90 transition-colors">
                    {problem.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <p className="text-xl font-semibold text-primary mb-6">
              👉 Isso não é falta de vendas. É venda perdida por abandono.
            </p>
            <Button variant="outline" size="lg" className="group">
              Ver se existe vazamento no meu processo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
