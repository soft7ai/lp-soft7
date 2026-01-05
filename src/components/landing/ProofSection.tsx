import { Clock, RotateCcw, Trophy, TrendingDown } from "lucide-react";

const proofs = [
  { icon: Clock, text: "Atraso reduz drasticamente conversão" },
  { icon: RotateCcw, text: "Follow-up esquecido é uma das maiores causas de perda" },
  { icon: Trophy, text: "Quem responde primeiro vende mais" },
  { icon: TrendingDown, text: "Escala sem sistema aumenta prejuízo" },
];

const ProofSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium mb-4">PROVA DE REALIDADE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Isso não é opinião. É padrão de mercado.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {proofs.map((proof, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <proof.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{proof.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-lg font-semibold">
              👉 O mercado mudou. A maioria das empresas{" "}
              <span className="text-destructive">não</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
