import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InsightSection from "@/components/landing/InsightSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProofSection from "@/components/landing/ProofSection";
import TransformationSection from "@/components/landing/TransformationSection";
import TargetSection from "@/components/landing/TargetSection";
import PromiseSection from "@/components/landing/PromiseSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <InsightSection />
        </ScrollReveal>
        <ScrollReveal>
          <SolutionSection />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProofSection />
        </ScrollReveal>
        <ScrollReveal>
          <TransformationSection />
        </ScrollReveal>
        <ScrollReveal>
          <TargetSection />
        </ScrollReveal>
        <ScrollReveal>
          <PromiseSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
