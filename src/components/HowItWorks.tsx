import { Check, Phone, FileText, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-secondary/50 border-primary/20 p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Free Strategy Call</h3>
              <p className="text-gray-300">
                Schedule a no-obligation call to discuss your business needs and challenges.
              </p>
            </div>
          </Card>

          <Card className="bg-secondary/50 border-primary/20 p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Receive Your Roadmap</h3>
              <p className="text-gray-300">
                Get a detailed implementation plan tailored to your business - completely free, no strings attached.
              </p>
            </div>
          </Card>

          <Card className="bg-secondary/50 border-primary/20 p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Choose Your Path</h3>
              <p className="text-gray-300">
                Select the involvement level that suits you best - from DIY guidance to full implementation.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-medium">Our Guarantee: Measurable Impact or Nothing</span>
          </div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Not satisfied with the implementation plan? No problem. There's absolutely no obligation to proceed. We believe in delivering real value - either we make a measurable impact on your business, or you pay nothing.
          </p>
        </div>
      </div>
    </section>
  );
};