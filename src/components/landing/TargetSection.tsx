import { Check, X } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const forYou = [
  "Já gera leads diariamente",
  "Já vende com consistência",
  "Sente instabilidade no comercial",
  "Quer escalar sem inflar equipe",
];

const TargetSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              É para você se:
            </h2>
          </div>

          <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
            {forYou.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card/80 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-destructive/10 border border-destructive/30">
            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <X className="h-4 w-4 text-destructive" />
            </div>
            <span className="text-lg text-muted-foreground">
              Não é para iniciantes ou quem busca milagre.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
