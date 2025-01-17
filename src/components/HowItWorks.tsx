import { Check, Phone, FileText, CreditCard } from "lucide-react";
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
                schedule a no-obligation call to discuss your business needs and challenges.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">2. receive your roadmap</h3>
              <p className="text-gray-600">
                get a detailed implementation plan tailored to your business - completely free, no strings attached.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-secondary/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">3. choose your path</h3>
              <p className="text-gray-600">
                select the involvement level that suits you best - from diy guidance to full implementation.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-medium">our guarantee: measurable impact or nothing</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            not satisfied with the implementation plan? no problem. there's absolutely no obligation to proceed. we believe in delivering real value - either we make a measurable impact on your business, or you pay nothing.
          </p>
          <Button asChild className="mt-8 bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-white rounded-full transition-all">
            <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
              schedule your free strategy call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};