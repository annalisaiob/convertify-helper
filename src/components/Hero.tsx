import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Save 10+ Hours a Week\nClose More Deals\n* and finally, take that weekend off";
  
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
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-3xl text-left animate-fadeIn">
            <div className="mb-8">
              <div className="whitespace-pre-line">
                {text.split('\n').map((line, index) => (
                  <h1 
                    key={index} 
                    className={`text-3xl md:text-5xl lg:text-6xl font-bold text-[#221F26] leading-tight ${
                      index === 2 ? 'mt-4 italic' : 'mt-2'
                    }`}
                  >
                    {line}
                  </h1>
                ))}
              </div>
              <ArrowRight className="inline-block ml-4 text-[#E5DEFF]" size={64} />
            </div>
            <p className="text-xl md:text-2xl text-[#221F26] mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              By building clear processes, streamlining workflows, and automating the repetitive, 
              I give you back your time and peace of mind—all while helping you grow your bottom line.
              <br /><br />
              Let's get your business running smoother than a fresh jar of Nutella 🥐
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-start animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Button 
                asChild 
                className="bg-[#E5DEFF] text-[#221F26] font-bold hover:bg-[#FF6700] hover:text-white hover:shadow-[0_0_15px_rgba(255,103,0,0.5)] text-lg px-8 py-6 rounded-full transition-all hover:italic hover:underline lowercase"
              >
                <a 
                  href="https://calendly.com/anna-creailab/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  schedule a free strategy call with me
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0 w-1/3">
            <img 
              src="/lovable-uploads/00e4501b-1662-41c0-a496-dd53b1e86f0b.png" 
              alt="Illustration of person working" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};