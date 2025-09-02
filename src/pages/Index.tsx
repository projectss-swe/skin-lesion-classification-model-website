import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import Results from "@/components/Results";
import ModelDetails from "@/components/ModelDetails";
import Team from "@/components/Team";
import Presentation from "@/components/Presentation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProjectOverview />
      <Results />
      <ModelDetails />
      <Team />
      <Presentation />
      <Footer />
    </div>
  );
};

export default Index;
