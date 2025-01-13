import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Automate Your Business.<br />Scale Your Impact.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          We help entrepreneurs and agencies streamline their processes, 
          eliminate bottlenecks, and grow their business with powerful automation solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Schedule a Free Strategy Call
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10">
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};