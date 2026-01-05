import { Check, Zap, Target, RefreshCw, Flame, UserCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { FloatingOrb, ParallaxBackground } from "@/components/ui/parallax";

const features = [
  { icon: Zap, text: "Responde em segundos" },
  { icon: Target, text: "Qualifica intenção real" },
  { icon: RefreshCw, text: "Executa follow-up infalível" },
  { icon: Flame, text: "Prioriza leads quentes" },
  { icon: UserCheck, text: "Chama o vendedor só para fechar" },
  { icon: ClipboardCheck, text: "Registra tudo automaticamente" },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <ParallaxBackground className="radial-gradient" speed={0.15} />
      <FloatingOrb 
        className="bg-primary/5 top-0 right-0" 
        size="w-72 h-72"
        speed={0.35}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Na prática, é simples
            </h2>
            <p className="text-xl text-gradient font-semibold">
              Nenhuma intenção de compra fica sem resposta.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.08}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group p-6 rounded-xl bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm h-full backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <p className="text-lg text-primary font-medium flex items-center justify-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Menos improviso. Mais controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
