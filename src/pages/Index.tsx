
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { BusinessProfiles } from "@/components/BusinessProfiles";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <BusinessProfiles />
        <About />
        <Benefits />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
