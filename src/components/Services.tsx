import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "We analyze your workflows and implement automated solutions that save time and reduce errors.",
  },
  {
    icon: Zap,
    title: "Systems Integration",
    description: "Connect your tools and create seamless workflows that eliminate manual data entry.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Get clear insights into your operations with automated reporting and dashboards.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <service.icon className="w-12 h-12 text-[#221F26] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 text-secondary hover:text-secondary/80">
                Learn More <ArrowRight className="ml-2 w-4 h-4 text-[#221F26]" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};