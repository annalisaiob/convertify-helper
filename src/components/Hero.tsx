
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Helping creatives, entrepreneurs,\nand independent businesses\nwork smarter, connect, and grow";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transforming Ideas into Efficient Systems</span>
          </div>
          
          <div className="max-w-4xl space-y-6">
            <div className="whitespace-pre-line">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                {text}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-accent mt-6 max-w-2xl mx-auto">
              Remove barriers through smarter systems, meaningful connections, 
              and spaces that spark collaboration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild 
              className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-6 text-lg hover:bg-primary hover:text-white hover:scale-105 transition-transform duration-200"
            >
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
            <div className="border border-border/20 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-2">Process Optimization & Automation</h3>
              <p className="text-accent">Streamline workflows and reduce repetitive tasks through automated systems</p>
            </div>
            <div className="border border-border/20 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-2">Custom No-Code Solutions</h3>
              <p className="text-accent">Build internal tools, dashboards, and databases without coding</p>
            </div>
            <div className="border border-border/20 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-2">Tool Implementation & Integration</h3>
              <p className="text-accent">Adopt and connect the right software for your business needs</p>
            </div>
            <div className="border border-border/20 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-2">Community & Events</h3>
              <p className="text-accent">Join workshops, co-working sessions, and connect with fellow creatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
