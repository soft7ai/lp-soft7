import { ArrowRight, MessageCircle, Clock, Target } from "lucide-react";
import { FloatingOrb, ParallaxBackground, FloatingParticles } from "@/components/ui/parallax";
import { CTAButton } from "@/components/ui/cta-button";
import { TypeWriterMulti } from "@/components/ui/typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={8} />
      
      {/* Background effects with parallax */}
      <ParallaxBackground className="radial-gradient" speed={0.4} />
      <FloatingOrb 
        className="bg-primary/20 top-1/4 left-1/4" 
        size="w-96 h-96"
        speed={0.6}
      />
      <FloatingOrb 
        className="bg-[hsl(200_100%_55%)]/15 bottom-1/4 right-1/4" 
        size="w-80 h-80"
        speed={0.8}
      />
      <FloatingOrb 
        className="bg-primary/10 top-1/2 right-1/3" 
        size="w-64 h-64"
        speed={0.5}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Orquestração inteligente 24/7</span>
          </motion.div>

          {/* Headline with typewriter effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 min-h-[3.5em] md:min-h-[2.5em]">
            <TypeWriterMulti
              lines={[
                { text: "Existe um ladrão silencioso operando dentro da sua empresa " },
                { text: "e ele está custando vendas todos os dias.", className: "text-gradient" },
              ]}
              speed={25}
              lineDelay={200}
            />
          </h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Leads chegam. Clientes querem comprar. E a venda morre quando ninguém responde no momento certo.
          </motion.p>

          {/* Pain points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 border border-primary/20 backdrop-blur-sm">
              <MessageCircle className="h-4 w-4 text-destructive" />
              <span className="text-sm text-foreground/80">WhatsApp sem resposta</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 border border-primary/20 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-destructive" />
              <span className="text-sm text-foreground/80">Conversas que param</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 border border-primary/20 backdrop-blur-sm">
              <Target className="h-4 w-4 text-destructive" />
              <span className="text-sm text-foreground/80">Follow-ups esquecidos</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3.6 }}
          >
            <CTAButton size="lg" className="text-lg px-8 py-6 h-auto group">
              🔍 Descobrir onde estou perdendo vendas hoje
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
