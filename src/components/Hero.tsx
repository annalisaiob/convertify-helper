
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
              Automation & AI Solutions for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-4">
              Save 10+ hours every week with smart tech solutions. Handle more clients and projects without the overwhelm.
            </p>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
              I help freelancers and small business owners build simple systems that work for your unique needs. No one-size-fits-all solutions - just practical tools that fit your specific workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Tech Setup & Support</h2>
              <p className="text-accent mb-4">Get your tools working together seamlessly with expert help tailored to your business</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/services">
                  See Services <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Workflow className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Workflow Automation</h2>
              <p className="text-accent mb-4">Find the right tools for your budget and create simple workflows that save you time</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/tools">
                  Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Community</h2>
              <p className="text-accent mb-4">Connect with other freelancers during our co-working sessions, workshops and events</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/community">
                  Join Us <ArrowRight className="ml-2 w-4 h-4" />
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
                Book a Free Chat
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
                  <h3 className="font-heading text-xl mb-2">Weekly Co-working</h3>
                  <p className="text-accent">Join our "I'm Working Late" co-working nights - bring your projects and get help</p>
                  <Button variant="link" className="mt-4">
                    RSVP Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Bot className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">AI Setup Guide</h3>
                  <p className="text-accent">New guide: How to set up ChatGPT to help with your client emails and proposals</p>
                  <Button variant="link" className="mt-4">
                    Get Guide <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Free Templates</h3>
                  <p className="text-accent">Just released: Client onboarding and project management templates for freelancers</p>
                  <Button variant="link" className="mt-4">
                    Download <ArrowRight className="ml-2 w-4 h-4" />
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
