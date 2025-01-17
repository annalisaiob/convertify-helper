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
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="font-semibold mb-4 font-heading text-left">You May Be...</h4>
          <ul className="space-y-3 text-left">
            {profile.struggles.map((item, index) => (
              <li key={index} className="flex items-start gap-2 font-heading">
                <ArrowRight className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 font-heading text-left">What if...</h4>
          <ul className="space-y-3 text-left">
            {profile.solutions.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 font-heading">
                <ArrowRight className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button 
          asChild 
          className="bg-secondary hover:bg-secondary/90 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] text-lg px-8 py-6 rounded-full transition-all"
        >
          <a 
            href="https://calendly.com/anna-creailab/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule Your Free Strategy Call With Me
          </a>
        </Button>
      </div>
    </div>
  );
};