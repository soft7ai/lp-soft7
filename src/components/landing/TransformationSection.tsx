import { X, Check, ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 radial-gradient opacity-30" />
      
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
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl card-gradient border border-primary/30 glow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">Depois</span>
              </h3>
              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
