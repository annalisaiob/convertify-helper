import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-left animate-fadeIn">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-tight">
            Automate your<br />
            Business <ArrowRight className="inline-block ml-4" size={64} /><br />
            Scale your<br />
            Success
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            We help entrepreneurs and agencies streamline their processes, 
            eliminate bottlenecks, and grow their business with powerful automation solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start animate-fadeIn" style={{ animationDelay: "0.4s" }}>
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
      </div>
    </section>
  );
};