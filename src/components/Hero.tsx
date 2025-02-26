
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-4xl space-y-6">
            <div className="whitespace-pre-line">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-tight">
                {text}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-accent mt-6 max-w-2xl">
              Remove barriers through smarter systems, meaningful connections, 
              and spaces that spark collaboration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild 
              className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 hover:italic"
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-6 text-lg hover:bg-primary hover:text-white"
            >
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
