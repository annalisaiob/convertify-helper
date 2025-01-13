import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Meet Your Systems Strategist
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                As a systems optimization specialist, I bring a unique perspective from my background in high-stakes information management for emergency response teams. This experience has honed my ability to create clear, efficient systems that perform under pressure.
              </p>
              <p>
                My expertise lies in transforming complex workflows into streamlined processes that save time and reduce stress. Whether you're a solopreneur feeling overwhelmed or an agency looking to scale, I specialize in creating custom solutions that bring order to chaos.
              </p>
              <p>
                From developing mission-critical dashboards for government agencies to redesigning information flows for tech startups, I've consistently delivered systems that make a real difference in how organizations operate.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-accent/10 rounded-lg"></div>
            <Card className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/96ef54b7-06c2-405c-95e3-28e5a739baaa.png"
                alt="Professional headshot"
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};