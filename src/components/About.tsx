import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Newspaper } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Card className="relative overflow-hidden w-32 h-32 rounded-full mb-8">
              <img 
                src="/lovable-uploads/96ef54b7-06c2-405c-95e3-28e5a739baaa.png"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </Card>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8">
              Meet Your Systems Strategist
            </h2>
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                As a systems optimization specialist, I bring a unique perspective from my background in high-stakes information management for emergency response teams. This experience has honed my ability to create clear, efficient systems that perform under pressure.
              </p>
              <p>
                My expertise lies in transforming complex workflows into streamlined processes that save time and reduce stress. Whether you're a solopreneur feeling overwhelmed or an agency looking to scale, I specialize in creating custom solutions that bring order to chaos.
              </p>
              <p>
                From developing mission-critical dashboards for government agencies to redesigning information flows for tech startups, I've consistently delivered systems that make a real difference in how organizations operate.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="rounded-full bg-secondary text-white hover:bg-secondary/90">
                <a href="https://www.linkedin.com/in/annalisa-iob-a94484a6/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" />
                  Say Hi on LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-secondary text-white hover:bg-secondary/90">
                <a href="https://annalisaiob.substack.com/" target="_blank" rel="noopener noreferrer">
                  <Newspaper className="mr-2" />
                  Follow my story on Substack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};