import { Brain, Zap, Bot, Database, ArrowRight, TrendingUp, Users } from "lucide-react";
import { FloatingOrb, FloatingParticles, ParallaxBackground, Parallax } from "@/components/ui/parallax";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import dashboardPreview from "@/assets/dashboard-preview.png";

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 relative overflow-hidden">
      <ParallaxBackground className="radial-gradient opacity-40" speed={0.35} />
      <FloatingParticles count={5} />
      <FloatingOrb 
        className="bg-primary/15 -top-20 -right-20" 
        size="w-96 h-96"
        speed={0.7}
      />
      <FloatingOrb 
        className="bg-[hsl(200_100%_55%)]/10 bottom-0 -left-20" 
        size="w-72 h-72"
        speed={0.5}
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
            <p className="text-lg text-primary font-medium flex items-center justify-center gap-2">
              <ArrowRight className="h-5 w-5" />
              É exatamente aqui que a Soft7 AI atua.
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

          {/* iPad Preview with Floating Animation and Glass Cards */}
          <ScrollReveal delay={0.2} className="mt-16">
            <div className="relative flex justify-center px-2 sm:px-0">
              {/* Floating iPad */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-4xl relative"
              >
                {/* Glass Card - Left Top */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { delay: 0.5 },
                  }}
                  className="absolute -left-4 sm:-left-8 md:-left-16 top-8 sm:top-12 md:top-20 z-20"
                >
                  <div className="backdrop-blur-xl bg-card/40 border border-primary/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Aumento de</p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">+30%</p>
                        <p className="text-xs sm:text-sm text-foreground/80">nos fechamentos</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glass Card - Right Bottom */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -6, 0],
                  }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    opacity: { delay: 0.7 },
                  }}
                  className="absolute -right-4 sm:-right-8 md:-right-16 bottom-12 sm:bottom-16 md:bottom-24 z-20"
                >
                  <div className="backdrop-blur-xl bg-card/40 border border-primary/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">300+</p>
                        <p className="text-xs sm:text-sm text-foreground/80">leads qualificados</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPad Frame */}
                <div className="relative mx-auto">
                  {/* iPad Outer Frame */}
                  <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] p-1.5 sm:p-2 md:p-3 shadow-2xl shadow-primary/20">
                    {/* iPad Bezel */}
                    <div className="relative bg-black rounded-[0.75rem] sm:rounded-[1rem] md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 overflow-hidden">
                      {/* Camera */}
                      <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-zinc-700 z-10" />
                      
                      {/* Screen */}
                      <div className="relative rounded-[0.5rem] sm:rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                        <img 
                          src={dashboardPreview} 
                          alt="Soft7 AI Dashboard - Visão geral do sistema de vendas"
                          className="w-full h-auto"
                        />
                        {/* Screen Glare Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 blur-2xl sm:blur-3xl rounded-full -z-10 opacity-60" />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Control message */}
          <div className="mt-16 text-center p-8 rounded-2xl border border-destructive/30 bg-destructive/5">
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
