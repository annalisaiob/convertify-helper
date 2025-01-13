import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessProfiles } from "@/components/BusinessProfiles";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BusinessProfiles />
        <HowItWorks />
        <About />
      </main>
    </div>
  );
};

export default Index;