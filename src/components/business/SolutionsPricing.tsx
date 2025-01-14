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
        how we help {pluralTitle}
      </h3>
      
      <p className="text-lg text-gray-600 mb-6">{profile.solutions.title}</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="font-semibold mb-4">solutions we provide:</h4>
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
          <h4 className="font-semibold mb-4">pricing:</h4>
          <div className="p-6 border rounded-lg bg-secondary/5">
            <div className="text-2xl font-bold text-secondary mb-2">{profile.pricing}</div>
            <div className="text-sm text-gray-600">for one complete system implementation</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button 
          asChild 
          className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-lg px-8 py-6 rounded-full transition-all"
        >
          <a 
            href="https://calendly.com/anna-creailab/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            schedule your free strategy call
          </a>
        </Button>
      </div>
    </div>
  );
};