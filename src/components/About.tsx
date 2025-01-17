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
            {/* Left column with image and title */}
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
                <ArrowRight className="w-8 h-8 text-[#FF6700]" />
              </div>
            </div>

            {/* Right column with content */}
            <div className="md:w-2/3">
              <div className="space-y-8 text-lg text-[#221F26]">
                <p className="text-xl font-semibold mb-4 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 p-6 rounded-xl">
                  Not just another "AI-powered whatever" agency. (also, AI are literally my initials)
                </p>
                <p className="text-left">
                  Think of me as Marie Kondo meets MacGyver for your business systems. I'm Anna, an ex-techie with a love for quirky humor, good design, and helping creative businesses shine. I've mapped refugee camps, built apps, and got way too happy over a much too complex spreadsheet formula or two—but now I'm here to save you from drowning in spreadsheets and sticky notes.
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-left">🎯 What I do (aka how to stop your business from eating your life):</h3>
                  <div className="space-y-6">
                    <div className="group p-6 rounded-xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                      <p className="text-left group-hover:translate-x-2 transition-transform duration-300">
                        Help you automate your workflows (so you can finally have a guilt-free Netflix binge or an uninterrupted coffee break—your call).
                      </p>
                    </div>
                    <div className="group p-6 rounded-xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                      <p className="text-left group-hover:translate-x-2 transition-transform duration-300">
                        Build custom systems that actually grow with your biz (because patchwork solutions held together with hope and duct tape aren't cutting it).
                      </p>
                    </div>
                    <div className="group p-6 rounded-xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                      <p className="text-left group-hover:translate-x-2 transition-transform duration-300">
                        Free up your time so you can focus on the stuff that lights you up—whether that's growing your business, finding clients, or just not answering emails at midnight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild variant="outline" className="rounded-full bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white text-[#221F26] hover:italic hover:underline transition-all">
                  <a href="mailto:anna@creailab.com">
                    <ArrowRight className="mr-2" color="#FF6700" />
                    anna@creailab.com
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white text-[#221F26] hover:italic hover:underline transition-all">
                  <a href="https://www.linkedin.com/in/annalisa-iob-a94484a6/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" color="#FF6700" />
                    say hi on linkedin
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white text-[#221F26] hover:italic hover:underline transition-all">
                  <a href="https://annalisaiob.substack.com/" target="_blank" rel="noopener noreferrer">
                    <Newspaper className="mr-2" color="#FF6700" />
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