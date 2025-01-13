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
                with nearly a decade of experience spanning humanitarian response teams, tech startups, and the space sector, i've mastered the art of turning chaos into clarity. from designing crisis dashboards under pressure to streamlining operations for international organizations, i bring order to the unmanageable—and i might even enjoy it.
              </p>
              <p>
                yes, AI is my initials—and it fits. like artificial intelligence, i specialize in optimizing systems and solving complex problems. unlike AI, i come with a human touch, a sense of humor, and, occasionally, the wish for an off switch.
              </p>
              <p>
                let's make AI (me) work smarter for you—and maybe throw in a little artificial intelligence for good measure!
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