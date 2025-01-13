import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessProfile } from "./types";

interface SolutionsPricingProps {
  profile: BusinessProfile;
  pluralTitle: string;
}

export const SolutionsPricing = ({ profile, pluralTitle }: SolutionsPricingProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg animate-fadeIn">
      <h3 className="text-2xl font-bold text-primary mb-6">
        How We Help {pluralTitle}
      </h3>
      <p className="text-lg text-gray-600 mb-6">{profile.solutions.title}</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="font-semibold mb-4">Solutions We Provide:</h4>
          <ul className="space-y-3">
            {profile.solutions.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Pricing Options:</h4>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="font-semibold">Do It Yourself</div>
              <div className="text-2xl font-bold text-secondary">{profile.pricing.diy}</div>
              <div className="text-sm text-gray-600">Self-paced implementation with our guidance</div>
            </div>
            <div className="p-4 border rounded-lg bg-secondary/5">
              <div className="font-semibold">Guided Implementation</div>
              <div className="text-2xl font-bold text-secondary">{profile.pricing.guided}</div>
              <div className="text-sm text-gray-600">We work together to implement your solutions</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="font-semibold">Done For You</div>
              <div className="text-2xl font-bold text-secondary">{profile.pricing.managed}</div>
              <div className="text-sm text-gray-600">We handle everything from start to finish</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button 
          asChild 
          className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full"
        >
          <a 
            href="https://calendly.com/anna-creailab/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule Your Free Strategy Call
          </a>
        </Button>
      </div>
    </div>
  );
};