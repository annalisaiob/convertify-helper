import { Check, Phone, FileText, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-12 text-center">
          how it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">1. free strategy call</h3>
              <p className="text-gray-600">
                schedule a no-obligation call where we map out exactly where you are now, and where you want to go.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">2. receive your business roadmap</h3>
              <p className="text-gray-600">
                over our consultation call - completely free - we'll craft a detailed implementation plan tailored to your business.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">3. experience operational zen</h3>
              <p className="text-gray-600">
                transform your business operations into a smooth, stress-free experience that lets you focus on what matters most.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6700]/10 text-[#FF6700] px-6 py-3 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-medium">our guarantee: measurable impact or nothing</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            not satisfied with the implementation plan? no problem. there's absolutely no obligation to proceed. we believe in delivering real value - either we make a measurable impact on your business, or you pay nothing.
          </p>
          <Button 
            asChild 
            className="mt-8 bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white hover:shadow-[0_0_15px_rgba(255,103,0,0.5)] text-[#221F26] rounded-full transition-all duration-300"
          >
            <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
              schedule your free strategy call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};