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
        <CardTitle className="lowercase">{profile.title}</CardTitle>
        <CardDescription>{profile.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};