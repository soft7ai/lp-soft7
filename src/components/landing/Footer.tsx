import { Brain, ShieldOff, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold tracking-tight">
                Soft7 <span className="text-primary">AI</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Inteligência aplicada ao comercial</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldOff className="h-5 w-5 text-primary" />
                <span>Sistema contra vendas perdidas</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Soft7 AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
