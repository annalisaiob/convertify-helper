import { useState } from "react";
import { Building2, User, Rocket, ArrowRight } from "lucide-react";
import { BusinessProfileCard } from "./business/BusinessProfileCard";
import { SolutionsPricing } from "./business/SolutionsPricing";
import type { BusinessProfile } from "./business/types";

const businessProfiles: BusinessProfile[] = [
  {
    id: "freelancer",
    title: "A Freelancer or Solopreneur",
    description: "You work alone as a creative or non-creative professional (like a photographer, writer, coach, or consultant) and are managing every aspect of your business yourself.",
    icon: User,
    struggles: [
      "Feeling overwhelmed by juggling client work, admin tasks, and personal time",
      "Spending too much time on repetitive tasks like invoicing, scheduling, and follow-ups",
      "Losing track of important client details or deadlines",
      "Wishing you had more time to focus on what you love doing"
    ],
    solutions: {
      title: "You need simple, intuitive systems to reduce admin overwhelm and free up time for what you do best—serving your clients.",
      items: [
        "Automated client scheduling and confirmation system",
        "Centralized client hub for easy information access",
        "Streamlined client management system",
        "Automated payment and membership management"
      ]
    },
    pricing: "Starting at €399"
  },
  {
    id: "agency",
    title: "An Agency or Small Business",
    description: "You run a team (big or small) delivering services to multiple clients, such as a marketing agency, design studio, or PR firm.",
    icon: Building2,
    struggles: [
      "Managing multiple client projects and timelines without overwhelming your team",
      "Communicating effectively with clients while keeping them updated",
      "Struggling to track team workload, timelines, or resource allocation",
      "Wasting time creating custom invoices, tracking billable hours, or generating reports"
    ],
    solutions: {
      title: "You manage multiple clients, projects, and a team—and keeping everyone aligned can feel overwhelming.",
      items: [
        "Automated project timeline and milestone tracking system",
        "Centralized client communication and update portal",
        "Automated billing and resource allocation system",
        "Team workload management and reporting dashboard"
      ]
    },
    pricing: "Starting at €599"
  },
  {
    id: "startup",
    title: "A Startup",
    description: "You're part of a growing team, building a product or service, and trying to scale your operations quickly and efficiently.",
    icon: Rocket,
    struggles: [
      "Outgrowing basic systems like spreadsheets or DIY tools",
      "Losing potential leads or clients due to inefficient sales pipelines",
      "Struggling to create scalable workflows that can adapt as your team grows",
      "Lacking visibility into key data like revenue, churn, or user growth"
    ],
    solutions: {
      title: "You're growing fast, and your current processes aren't keeping up. You need scalable systems and data to make informed decisions.",
      items: [
        "Automated lead tracking and nurturing system",
        "Scalable customer onboarding workflow",
        "Integrated analytics and reporting dashboard",
        "Automated revenue and churn tracking system"
      ]
    },
    pricing: "Starting at €999"
  }
];

export const BusinessProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<BusinessProfile>(businessProfiles[0]);

  const getPluralTitle = (title: string) => {
    const baseTitle = title.replace("A ", "").replace("An ", "");
    if (baseTitle === "Freelancer or Solopreneur") {
      return "Freelancers & Solopreneurs";
    }
    return baseTitle === "Agency" ? "Agencies" : `${baseTitle}s`;
  };

  return (
    <section id="business-profiles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            I Am
          </h2>
          <ArrowRight className="w-6 h-6 text-secondary animate-bounce" />
        </div>

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