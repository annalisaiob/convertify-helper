
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="w-full flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
