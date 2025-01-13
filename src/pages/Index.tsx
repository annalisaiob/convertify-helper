import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { BusinessProfiles } from "@/components/BusinessProfiles";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
        <BusinessProfiles />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;