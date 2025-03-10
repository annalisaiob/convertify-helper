import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles, Wrench, Workflow, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-16">          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8">
              Empower Your Business with AI & Automation
            </h1>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-4">
              Stop drowning in admin work. Free up 10+ hours weekly, serve more clients, and finally focus on growth.
            </p>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
              CreAI Lab helps freelancers and small businesses with solutions tailored to their specific needs, not generic templates. As the child of a small business owner, I understand your challenges and listen carefully to what you really need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Consultancy Services</h2>
              <p className="text-accent mb-4">Expert tools setup, workflow automation, and AI solutions tailored for your business</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/services">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Workflow className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Tech Navigation</h2>
              <p className="text-accent mb-4">Find your perfect tech stack with budget-based recommendations and personalized tech maps</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/tools">
                  View Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Community</h2>
              <p className="text-accent mb-4">Join co-working sessions, webinars, and connect with fellow freelancers and entrepreneurs</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/community">
                  Join Events <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
            >
              <Link to="/services">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-6 text-lg hover:bg-primary hover:text-white hover:scale-105 transition-transform duration-200"
            >
              <a href="#latest-updates">
                Latest Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div id="latest-updates" className="w-full py-16 bg-white/30 backdrop-blur-sm rounded-xl">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-heading mb-12 text-center">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Calendar className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Upcoming Co-working Session</h3>
                  <p className="text-accent">Join our weekly "I'm Working Late" co-working nights. Bring your projects and questions!</p>
                  <Button variant="link" className="mt-4">
                    RSVP Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Bot className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">AI Readiness Assessment</h3>
                  <p className="text-accent">Discover if your business is ready to implement AI solutions. Take our free assessment.</p>
                  <Button variant="link" className="mt-4">
                    Take Assessment <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">New Resources</h3>
                  <p className="text-accent">Just released: Automation workflow templates for freelancers and small businesses.</p>
                  <Button variant="link" className="mt-4">
                    Download Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
