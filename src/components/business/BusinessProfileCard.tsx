import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { BusinessProfile } from "./types";

interface BusinessProfileCardProps {
  profile: BusinessProfile;
  isSelected: boolean;
  onSelect: (profile: BusinessProfile) => void;
}

export const BusinessProfileCard = ({ profile, isSelected, onSelect }: BusinessProfileCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'ring-2 ring-secondary' : ''
      }`}
      onClick={() => onSelect(profile)}
    >
      <CardHeader className="text-center">
        <profile.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
        <CardTitle>{profile.title}</CardTitle>
        <CardDescription>{profile.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">Common Struggles:</h4>
        <ul className="space-y-2">
          {profile.struggles.map((struggle, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
              <span>{struggle}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};