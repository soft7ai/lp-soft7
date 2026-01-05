import { X, Check, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { FloatingOrb, ParallaxBackground } from "@/components/ui/parallax";

const beforeItems = [
  "Vendas morrem em silêncio",
  "Time sobrecarregado",
  "Faturamento instável",
  "Sensação de dinheiro vazando",
];

const afterItems = [
  "Nenhuma intenção passa despercebida",
  "Follow-up automático",
  "Vendedor focado só em fechar",
  "Controle e previsibilidade",
];

const TransformationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxBackground className="radial-gradient opacity-30" speed={0.1} />
      <FloatingOrb 
        className="bg-primary/5 -top-20 left-1/4" 
        size="w-80 h-80"
        speed={0.3}
      />
      <FloatingOrb 
        className="bg-destructive/5 bottom-0 right-1/4" 
        size="w-64 h-64"
        speed={0.4}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformação
            </h2>
            <p className="text-muted-foreground">Veja a diferença que a Soft7 AI faz no seu comercial</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Arrow connector for desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow">
                <ArrowRight className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>

            {/* Before */}
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-destructive">Antes</span>
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {beforeItems.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl card-gradient border border-primary/30 glow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">Depois</span>
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {afterItems.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
