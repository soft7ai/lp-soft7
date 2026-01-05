import { ShieldOff, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoWhite} alt="Soft7 AI" className="h-10 w-auto" />
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

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Soft7 AI. Todos os direitos reservados.</span>
              <span className="hidden sm:inline">•</span>
              <Link to="/privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
