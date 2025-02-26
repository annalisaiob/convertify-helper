
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
