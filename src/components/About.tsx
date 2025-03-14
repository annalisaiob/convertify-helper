import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Newspaper, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const About = () => {
  const [text, setText] = useState("");
  const fullText = "about CreAI Lab";
  
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 flex flex-col items-center md:items-start sticky top-20">
              <Card className="relative overflow-hidden w-48 h-48 rounded-2xl mb-8 shadow-lg">
                <img 
                  src="/lovable-uploads/90d855fb-b3ab-4ad3-8b58-eef17f51f3ae.png"
                  alt="professional headshot"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </Card>
              <div className="flex items-center gap-2 mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#221F26]">
                  {text}
                </h2>
                <ArrowRight className="w-8 h-8 text-[#221F26]" />
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-8 text-lg text-[#221F26]">
                <p className="text-2xl font-heading italic tracking-wide mb-4 bg-gradient-to-r from-white/90 to-white/50 backdrop-blur-sm border-l-4 border-[#221F26] px-8 py-6 rounded-r-xl shadow-md">
                  Not just another "AI-powered whatever" agency. (also, AI are literally my initials)
                </p>
                <p className="text-left">
                  Think of me as Marie Kondo meets MacGyver for your business systems. I'm Anna, an ex-techie with a love for quirky humor, good design, and helping creative businesses shine. I've mapped refugee camps, built apps, and got way too happy over a much too complex spreadsheet formula or two—but now I'm here to save you from drowning in spreadsheets and sticky notes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild variant="outline" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] font-normal">
                  <a href="mailto:anna@creailab.com">
                    <ArrowRight className="mr-2 text-white" />
                    anna@creailab.com
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] font-normal">
                  <a href="https://www.linkedin.com/in/annalisa-iob-a94484a6/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 text-white" />
                    say hi on linkedin
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] font-normal">
                  <a href="https://annalisaiob.substack.com/" target="_blank" rel="noopener noreferrer">
                    <Newspaper className="mr-2 text-white" />
                    follow my story on substack
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};