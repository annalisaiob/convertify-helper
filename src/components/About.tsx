import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Newspaper, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const About = () => {
  const [text, setText] = useState("");
  const fullText = "meet your systems strategist";
  
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
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Card className="relative overflow-hidden w-32 h-32 rounded-full mb-8">
              <img 
                src="/lovable-uploads/96ef54b7-06c2-405c-95e3-28e5a739baaa.png"
                alt="professional headshot"
                className="w-full h-full object-cover"
              />
            </Card>
            <div className="flex items-center justify-center gap-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
                {text}
              </h2>
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                with nearly a decade of experience in information management for humanitarian emergency response teams, i've mastered the art of organizing complex data flows and creating systems that perform under pressure.
              </p>
              <p>
                i specialize in transforming chaotic information streams into clear, actionable processes (and yes, AI happens to be my initials - quite fitting for what i do!). from coordinating multi-agency response systems to optimizing field communication workflows, i bring order to complexity.
              </p>
              <p>
                my expertise spans from designing crisis information dashboards to streamlining operational processes for international organizations. ready to bring that same level of clarity and efficiency to your business?
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="rounded-full bg-secondary text-white hover:bg-secondary/90 hover:italic hover:underline transition-all">
                <a href="https://www.linkedin.com/in/annalisa-iob-a94484a6/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" />
                  say hi on linkedin
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-secondary text-white hover:bg-secondary/90 hover:italic hover:underline transition-all">
                <a href="https://annalisaiob.substack.com/" target="_blank" rel="noopener noreferrer">
                  <Newspaper className="mr-2" />
                  follow my story on substack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};