import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { BusinessProfiles } from "@/components/BusinessProfiles";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <BusinessProfiles />
        <About />
        <Benefits />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Index;