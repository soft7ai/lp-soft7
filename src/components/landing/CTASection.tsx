import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Se sua empresa gera oportunidades, mas perde vendas no processo,{" "}
            <span className="text-gradient">isso é um vazamento.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            E vazamentos não fecham sozinhos.
          </p>

          <Button size="lg" className="glow text-lg px-10 py-7 h-auto group mb-8">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar diagnóstico estratégico
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Sem pitch forçado</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Clareza real</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Vagas limitadas este mês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
