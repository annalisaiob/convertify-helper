import { LucideIcon } from "lucide-react";

export interface BusinessProfile {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  struggles: string[];
  solutions: {
    title: string;
    items: string[];
  };
  pricing: string;
}