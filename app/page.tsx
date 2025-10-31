import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import AnatomySection from "@/components/anatomy";
import UsageCarousel from "@/components/usageCarousel";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AnatomySection/>
      <UsageCarousel/>
      <HowItWorks/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </>
  );
}