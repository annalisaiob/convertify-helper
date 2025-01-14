import { useState } from "react";
import { Building2, User, Rocket, ArrowRight } from "lucide-react";
import { BusinessProfileCard } from "./business/BusinessProfileCard";
import { SolutionsPricing } from "./business/SolutionsPricing";
import type { BusinessProfile } from "./business/types";

const businessProfiles: BusinessProfile[] = [
  {
    id: "freelancer",
    title: "i am a freelancer or solopreneur",
    description: "you work alone as a creative or non-creative professional (like a photographer, writer, coach, or consultant) and are managing every aspect of your business yourself.",
    icon: User,
    struggles: [
      "feeling overwhelmed by juggling client work, admin tasks, and personal time",
      "spending too much time on repetitive tasks like invoicing, scheduling, and follow-ups",
      "losing track of important client details or deadlines",
      "wishing you had more time to focus on what you love doing"
    ],
    solutions: {
      title: "you need simple, intuitive systems to reduce admin overwhelm and free up time for what you do best—serving your clients.",
      items: [
        "automated client scheduling and confirmation system",
        "centralized client hub for easy information access",
        "streamlined client management system",
        "automated payment and membership management"
      ]
    },
    pricing: "starting at €399"
  },
  {
    id: "agency",
    title: "i am an agency",
    description: "you run a team (big or small) delivering services to multiple clients, such as a marketing agency, design studio, or pr firm.",
    icon: Building2,
    struggles: [
      "managing multiple client projects and timelines without overwhelming your team",
      "communicating effectively with clients while keeping them updated",
      "struggling to track team workload, timelines, or resource allocation",
      "wasting time creating custom invoices, tracking billable hours, or generating reports"
    ],
    solutions: {
      title: "you manage multiple clients, projects, and a team—and keeping everyone aligned can feel overwhelming.",
      items: [
        "automated project timeline and milestone tracking system",
        "centralized client communication and update portal",
        "automated billing and resource allocation system",
        "team workload management and reporting dashboard"
      ]
    },
    pricing: "starting at €599"
  },
  {
    id: "startup",
    title: "i am a startup",
    description: "you're part of a growing team, building a product or service, and trying to scale your operations quickly and efficiently.",
    icon: Rocket,
    struggles: [
      "outgrowing basic systems like spreadsheets or diy tools",
      "losing potential leads or clients due to inefficient sales pipelines",
      "struggling to create scalable workflows that can adapt as your team grows",
      "lacking visibility into key data like revenue, churn, or user growth"
    ],
    solutions: {
      title: "you're growing fast, and your current processes aren't keeping up. you need scalable systems and data to make informed decisions.",
      items: [
        "automated lead tracking and nurturing system",
        "scalable customer onboarding workflow",
        "integrated analytics and reporting dashboard",
        "automated revenue and churn tracking system"
      ]
    },
    pricing: "starting at €999"
  }
];

export const BusinessProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<BusinessProfile>(businessProfiles[0]);

  const getPluralTitle = (title: string) => {
    const baseTitle = title.replace("i am a ", "").replace("i am an ", "");
    if (baseTitle === "freelancer or solopreneur") {
      return "freelancers & solopreneurs";
    }
    return baseTitle === "agency" ? "agencies" : `${baseTitle}s`;
  };

  return (
    <section id="business-profiles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary lowercase">
            select the option that best describes you
          </h2>
          <ArrowRight className="w-6 h-6 text-secondary animate-bounce" />
        </div>
        <p className="text-lg text-gray-600 text-center mb-12 lowercase">
          discover how we can help streamline your specific business needs
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {businessProfiles.map((profile) => (
            <BusinessProfileCard
              key={profile.id}
              profile={profile}
              isSelected={selectedProfile.id === profile.id}
              onSelect={setSelectedProfile}
            />
          ))}
        </div>

        <SolutionsPricing
          profile={selectedProfile}
          pluralTitle={getPluralTitle(selectedProfile.title)}
        />
      </div>
    </section>
  );
};
