import { Check, Phone, FileText, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12 text-center">
          how it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#221F26] flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-white">1</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#221F26]" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mt-6">Free Strategy Call</h3>
              <p className="text-gray-600 font-heading">
                Schedule a no-obligation call where we map out exactly where you are now, and where you want to go.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#221F26] flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-white">2</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#221F26]" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mt-6">Receive Your Business Roadmap</h3>
              <p className="text-gray-600 font-heading">
                Over our consultation call - completely free - we'll craft a detailed implementation plan tailored to your business.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#221F26] flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-white">3</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#221F26]" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mt-6">Experience Operational Zen</h3>
              <p className="text-gray-600 font-heading">
                Transform your business operations into a smooth, stress-free experience that lets you focus on what matters most.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#221F26]/10 text-[#221F26] px-6 py-3 rounded-full">
            <Check className="w-5 h-5" color="#221F26" />
            <span className="font-heading font-medium">My Guarantee: Measurable Impact or Nothing</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-heading">
            Not satisfied with the implementation plan? No problem. There's absolutely no obligation to proceed. We believe in delivering real value - either we make a measurable impact on your business, or you pay nothing.
          </p>
          <Button 
            asChild 
            className="mt-8 bg-[#221F26] hover:bg-[#221F26]/80 text-white rounded-full transition-all duration-300 font-normal hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]"
          >
            <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
              Schedule Your Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};