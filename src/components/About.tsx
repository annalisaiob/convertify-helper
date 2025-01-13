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
          <div className="text-center">
            <Card className="inline-block p-2 bg-white shadow-lg rounded-full mb-8">
              <img
                src="/lovable-uploads/ceae4438-26d0-4902-99b6-c2d4417a0716.png"
                alt="Anna's profile picture"
                className="w-32 h-32 rounded-full"
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
                hi! i'm anna, a systems strategist and automation expert helping entrepreneurs and agencies streamline their businesses.
              </p>
              <p>
                with over 8 years of experience in operations and project management, i've helped numerous businesses implement efficient systems that save time, reduce stress, and boost productivity.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-white rounded-full transition-all">
                <a href="https://www.linkedin.com/in/anna-creailab" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  connect on linkedin
                </a>
              </Button>
              <Button asChild className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-white rounded-full transition-all">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Newspaper className="w-4 h-4 mr-2" />
                  download case studies
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};