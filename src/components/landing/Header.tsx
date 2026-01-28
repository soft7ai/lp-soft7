import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoSoftSales from "@/assets/logo-softsales.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logoSoftSales} alt="SoftSales" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problema
            </a>
            <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solução
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="gradient" size="sm" className="glow-sm">
              Agendar diagnóstico
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problema
              </a>
              <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solução
              </a>
              <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <Button variant="gradient" size="sm" className="w-full mt-2">
                Agendar diagnóstico
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
