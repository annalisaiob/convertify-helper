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
      "Spending hours on admin work that eats up your day, leaving you no time to focus on the work you actually love.",
      "Constantly chasing clients for updates, payments, or approvals, feeling more like a babysitter than a professional.",
      "Waking up at night panicking about missed deadlines, lost emails, or disorganized files that are quietly sabotaging you.",
      "Wondering if you're the only one who feels like running a business is a never-ending uphill battle with zero backup."
    ],
    solutions: {
      title: "",
      items: [
        "Your admin tasks were automated, and you could focus on creative, high-impact work (or just take a guilt-free afternoon off).",
        "Clients were kept in the loop automatically, and approvals and payments happened without the awkward chasing.",
        "Your deadlines, projects, and files were organized in one place, giving you peace of mind and a clear path forward.",
        "You felt confident running your business, knowing you've got systems in place that make everything work like clockwork."
      ]
    },
    pricing: "Starting at €399"
  },
  {
    id: "agency",
    title: "An Agency or Small Business",
    description: "You run a team (big or small) delivering services to multiple clients or customers—maybe you're a marketing agency, a design studio, a PR firm, or even a local business like a yoga studio or café.",
    icon: Building2,
    struggles: [
      "Juggling multiple tools that don't talk to each other, leaving you to manually piece together payments, memberships, or client data.",
      "Losing time chasing late payments or dealing with complex membership plans that constantly need updating.",
      "Struggling to manage team schedules, client appointments, or inventory, resulting in last-minute scrambles and unhappy customers.",
      "Feeling overwhelmed by the chaos of running the back end while still trying to deliver a top-notch experience for your clients or members."
    ],
    solutions: {
      title: "",
      items: [
        "All your tools worked together, syncing payments, memberships, and client data automatically.",
        "Payment plans and membership renewals were handled seamlessly, without you having to intervene or follow up.",
        "Your schedules, inventory, and client appointments were organized in one place, making daily operations effortless.",
        "You could focus on delivering exceptional service, knowing your systems have your back—and your clients' too."
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
      "Spending more time fixing internal bottlenecks than actually building or selling your product.",
      "Struggling to onboard new hires or partners because your processes live in someone's brain (or nowhere at all).",
      "Burning through cash trying to \"just get it done\" without scalable systems to keep your team focused and productive.",
      "Losing opportunities because your sales, marketing, and product teams aren't fully aligned or operating efficiently."
    ],
    solutions: {
      title: "",
      items: [
        "Your operations ran like a well-oiled machine, so you could focus on growth, not chaos.",
        "Every team member knew exactly what to do and had the tools to execute without constant hand-holding.",
        "Your processes were scalable, so you weren't reinventing the wheel every time you launched or hired.",
        "Sales, marketing, and product teams were fully aligned, driving growth without the drama or confusion."
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary lowercase">
            i am
          </h2>
          <ArrowRight className="w-6 h-6 text-[#221F26]" />
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
