import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import ProtocolSection from "@/components/protocol-section";
import ComparisonSection from "@/components/comparison-section";
import BountySection from "@/components/bounty-section";
import GuaranteeSection from "@/components/guarantee-section";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import FinalCtaSection from "@/components/final-cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <ComparisonSection />
      <ProblemSection />
      <ProtocolSection />
      <BountySection />
      <GuaranteeSection />
      <Testimonials />
      <Faq />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
