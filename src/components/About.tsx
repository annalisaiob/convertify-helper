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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Card className="relative overflow-hidden w-32 h-32 rounded-full mb-8">
              <img 
                src="/lovable-uploads/90d855fb-b3ab-4ad3-8b58-eef17f51f3ae.png"
                alt="professional headshot"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </Card>
            <div className="flex items-center justify-center gap-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#221F26]">
                {text}
              </h2>
              <ArrowRight className="w-8 h-8 text-[#E5DEFF]" />
            </div>
            <div className="space-y-6 text-lg text-[#221F26] mb-8">
              <p className="text-xl font-semibold">
                Not just another "AI-powered whatever" agency. (also, AI are literally my initials)
              </p>
              <p>
                Think of me as Marie Kondo meets MacGyver for your business systems. I'm Anna, an ex-techie with a love for quirky humor, good design, and helping creative businesses shine. I've mapped refugee camps, built apps, and got way too happy over a much too complex spreadsheet formula or two—but now I'm here to save you from drowning in spreadsheets and sticky notes.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-4">🎯 What I do (aka how to stop your business from eating your life):</h3>
                <ul className="space-y-4 text-left list-disc pl-6">
                  <li>Help you automate your workflows (so you can finally have a guilt-free Netflix binge or an uninterrupted coffee break—your call).</li>
                  <li>Build custom systems that actually grow with your biz (because patchwork solutions held together with hope and duct tape aren't cutting it).</li>
                  <li>Free up your time so you can focus on the stuff that lights you up—whether that's growing your business, finding clients, or just not answering emails at midnight.</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="rounded-full bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white text-[#221F26] hover:italic hover:underline transition-all">
                <a href="https://www.linkedin.com/in/annalisa-iob-a94484a6/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" />
                  say hi on linkedin
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white text-[#221F26] hover:italic hover:underline transition-all">
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