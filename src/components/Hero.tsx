import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "automate your business scale your success";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-left animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
            {text}
            <ArrowRight className="inline-block ml-4 text-navy" size={64} />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            we help entrepreneurs and agencies streamline their processes, 
            eliminate bottlenecks, and grow their business with powerful automation solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-lg px-8 py-6 rounded-full transition-all">
              <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
                schedule a free strategy call
              </a>
            </Button>
            <Button asChild className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-lg px-8 py-6 rounded-full transition-all">
              <a href="#business-profiles">
                view our services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};