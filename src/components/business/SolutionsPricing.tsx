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
          className="bg-[#E5DEFF] hover:bg-[#FF6700] hover:text-white hover:shadow-[0_0_15px_rgba(255,103,0,0.5)] text-[#221F26] rounded-full transition-all duration-300"
        >
          <a 
            href="https://calendly.com/anna-creailab/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Free Strat Call With Me
          </a>
        </Button>
      </div>
    </div>
  );
};