import { TrendingUp, AlertTriangle } from "lucide-react";

const InsightSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/10 mb-8">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">Atenção!</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O problema não é marketing.
          </h2>
          
          <p className="text-4xl md:text-6xl font-bold text-gradient mb-8">
            É arquitetura.
          </p>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enquanto você busca mais tráfego, o dinheiro que já estava na mesa escorre no silêncio.
          </p>

          <div className="p-6 rounded-2xl bg-card/80 border border-border backdrop-blur-sm max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-destructive" />
              <span className="text-lg font-semibold">Verdade incômoda</span>
            </div>
            <p className="text-muted-foreground">
              Crescimento sem sistema não escala resultado.{" "}
              <span className="text-destructive font-semibold">Escala perda.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
