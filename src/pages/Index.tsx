import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
