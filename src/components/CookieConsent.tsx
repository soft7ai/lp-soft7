import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid showing immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  Utilizamos cookies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Usamos cookies para melhorar sua experiência e analisar o tráfego do site. 
                  Ao continuar, você concorda com nossa{" "}
                  <a 
                    href="/privacidade" 
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  .
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={handleAccept}
                    size="sm"
                    className="flex-1"
                  >
                    Aceitar
                  </Button>
                  <Button 
                    onClick={handleDecline}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Recusar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
