import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
          Automate Your Business.<br />Scale Your Impact.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          We help entrepreneurs and agencies streamline their processes, 
          eliminate bottlenecks, and grow their business with powerful automation solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full">
            <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
              Schedule a Free Strategy Call
            </a>
          </Button>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full">
            <a href="#business-profiles">
              View Our Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};