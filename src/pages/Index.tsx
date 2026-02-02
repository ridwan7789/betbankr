import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingMarkets from "@/components/TrendingMarkets";
import SystemFeatures from "@/components/SystemFeatures";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrendingMarkets />
        <SystemFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
