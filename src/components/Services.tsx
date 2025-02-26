
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, BarChart3, Users, Calendar, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline your workflows and implement automated solutions that save time and reduce errors.",
  },
  {
    icon: Zap,
    title: "No-Code Solutions",
    description: "Build powerful internal tools, dashboards, and databases without writing a single line of code.",
  },
  {
    icon: BarChart3,
    title: "Tool Integration",
    description: "Connect your existing tools and create seamless workflows that eliminate manual data entry.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Join 'I'm Working Late' nights, co-working sessions, and connect with fellow creatives.",
  },
  {
    icon: Calendar,
    title: "Workshops",
    description: "Learn about AI, creative business strategies, and more in our interactive workshops.",
  },
  {
    icon: Lightbulb,
    title: "Resources",
    description: "Access templates, guides, and recommended software stacks for efficiency.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          services & community
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <service.icon className="w-12 h-12 text-[#221F26] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
