import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Isso substitui meu time?",
    answer: "Não. Liberta o time para fechar. A SoftSales cuida de toda a parte operacional — resposta, qualificação, follow-up — e seu time entra só quando o lead está pronto para comprar.",
  },
  {
    question: "É só um software?",
    answer: "Não. É implantação estratégica com IA customizada. Não entregamos uma ferramenta genérica. Configuramos e personalizamos toda a engenharia de vendas para o seu negócio específico.",
  },
  {
    question: "Funciona para qualquer empresa?",
    answer: "Não. Apenas para quem já tem demanda. Se você não gera leads hoje, primeiro precisa resolver isso. A SoftSales é para empresas que já têm oportunidades chegando e estão perdendo por falta de processo.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Dúvidas frequentes
            </h2>
          </div>

          <StaggerContainer staggerDelay={0.15}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-xl border border-border bg-card/80 px-6 data-[state=open]:border-primary/30 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
