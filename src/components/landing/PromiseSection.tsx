import { Shield, Sliders, Sparkles } from "lucide-react";

const promises = [
  { icon: Shield, label: "Controle", versus: "esforço" },
  { icon: Sliders, label: "Sistema", versus: "improviso" },
  { icon: Sparkles, label: "Previsibilidade", versus: "sorte" },
];

const PromiseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-primary font-medium mb-4">PROMESSA REAL</p>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Soft7 AI não promete vender mais.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4">
            Ela promete algo mais valioso:
          </p>
          
          <p className="text-2xl md:text-3xl font-bold text-gradient mb-12">
            Parar de perder vendas que já queriam acontecer.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/80 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <promise.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg font-semibold">
                  <span className="text-primary">{promise.label}</span>{" "}
                  <span className="text-muted-foreground">&gt;</span>{" "}
                  <span className="text-muted-foreground line-through">{promise.versus}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
