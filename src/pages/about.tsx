
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">About</h1>
          
          <div className="max-w-4xl mx-auto space-y-16">
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading">Our Mission</h2>
              <p className="text-accent text-lg leading-relaxed">
                To empower creative professionals and entrepreneurs with the tools, 
                systems, and community they need to thrive in the digital age.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading">The Story</h2>
              <p className="text-accent text-lg leading-relaxed">
                Creai Lab began as a response to the growing need for streamlined workflows 
                and efficient systems in the creative industry. We understand the unique 
                challenges faced by independent creators and small businesses.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading">Simplicity First</h3>
                  <p className="text-accent">We believe in removing complexity, not adding to it.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading">Community Driven</h3>
                  <p className="text-accent">Built by creators, for creators.</p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <Button className="text-lg px-8 py-6 hover:scale-105">
                Work with us <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
