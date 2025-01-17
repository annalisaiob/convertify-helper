import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { BusinessProfiles } from "@/components/BusinessProfiles";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-electric flex flex-col flex-grow">
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <Benefits />
        <BusinessProfiles />
        <HowItWorks />
        <About />
      </main>
    </div>
  );
};

export default Index;