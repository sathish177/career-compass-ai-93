import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CareerAssessment from "@/components/CareerAssessment";
import CareerPaths from "@/components/CareerPaths";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="assessment">
          <CareerAssessment />
        </section>
        <section id="careers">
          <CareerPaths />
        </section>
      </main>
    </div>
  );
};

export default Index;
