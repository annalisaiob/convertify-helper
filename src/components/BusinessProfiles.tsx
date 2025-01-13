import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, User, Rocket, ArrowRight } from "lucide-react";

type BusinessProfile = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  struggles: string[];
  solutions: {
    title: string;
    items: string[];
  };
  pricing: {
    diy: string;
    guided: string;
    managed: string;
  };
};

const businessProfiles: BusinessProfile[] = [
  {
    id: "freelancer",
    title: "I Am a Freelancer or Solopreneur",
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
        "Setting up automated tools for invoicing, scheduling, and follow-ups",
        "Organizing client details in one easy-to-access place",
        "Streamlining workflows so nothing slips through the cracks",
        "Freeing up time to focus on your craft or scaling your business"
      ]
    },
    pricing: {
      diy: "€299",
      guided: "€499",
      managed: "€999"
    }
  },
  {
    id: "agency",
    title: "I Am an Agency",
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
        "Building systems to track projects, deadlines, and deliverables",
        "Creating workflows to organize client communication and updates",
        "Automating billing and invoicing to save time on repetitive tasks",
        "Improving resource allocation to prevent team burnout"
      ]
    },
    pricing: {
      diy: "€499",
      guided: "€999",
      managed: "€1,499"
    }
  },
  {
    id: "startup",
    title: "I Am a Startup",
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
        "Designing processes to streamline operations across teams",
        "Automating lead tracking, onboarding, and follow-ups",
        "Implementing tools to measure key metrics like sales, churn, or revenue growth",
        "Setting up scalable workflows that grow with your business"
      ]
    },
    pricing: {
      diy: "€999",
      guided: "€1,499",
      managed: "€2,999"
    }
  }
];

export const BusinessProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<BusinessProfile>(businessProfiles[0]);

  return (
    <section id="business-profiles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Select the option that best describes you
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Discover how we can help streamline your specific business needs
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {businessProfiles.map((profile) => (
            <Card 
              key={profile.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedProfile.id === profile.id ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setSelectedProfile(profile)}
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
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg animate-fadeIn">
          <h3 className="text-2xl font-bold text-primary mb-6">
            How We Can Help {selectedProfile.title.replace("I Am ", "")}s
          </h3>
          <p className="text-lg text-gray-600 mb-6">{selectedProfile.solutions.title}</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Solutions We Provide:</h4>
              <ul className="space-y-3">
                {selectedProfile.solutions.items.map((item, index) => (
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
                  <div className="text-2xl font-bold text-secondary">{selectedProfile.pricing.diy}</div>
                  <div className="text-sm text-gray-600">Self-paced implementation with our guidance</div>
                </div>
                <div className="p-4 border rounded-lg bg-secondary/5">
                  <div className="font-semibold">Guided Implementation</div>
                  <div className="text-2xl font-bold text-secondary">{selectedProfile.pricing.guided}</div>
                  <div className="text-sm text-gray-600">We work together to implement your solutions</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-semibold">Done For You</div>
                  <div className="text-2xl font-bold text-secondary">{selectedProfile.pricing.managed}</div>
                  <div className="text-sm text-gray-600">We handle everything from start to finish</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              Schedule Your Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};