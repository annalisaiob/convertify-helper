
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-16">          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8">
              Clear away clutter.<br />
              Unlock creativity.
            </h1>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-8">
              Transform your business operations with smart automation and custom tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <h2 className="font-heading text-2xl mb-4">⚡ Streamline & Automate</h2>
              <p className="text-accent mb-4">Save 10+ hours a week by cutting out repetitive tasks and setting up systems that work for you.</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <Link to="/services">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <h2 className="font-heading text-2xl mb-4">🛠️ Custom Tools</h2>
              <p className="text-accent mb-4">Get simple, tailored solutions—from better workflows to helpful dashboards.</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <Link to="/services">
                  View Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <h2 className="font-heading text-2xl mb-4">🔗 Right Tools</h2>
              <p className="text-accent mb-4">Stop wasting time guessing. Get help finding and setting up the perfect software stack.</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <Link to="/services">
                  Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <h2 className="font-heading text-2xl mb-4">🤝 Community</h2>
              <p className="text-accent mb-4">Connect with other creatives and entrepreneurs through events and workshops.</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <Link to="/community">
                  Join Events <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
            >
              <Link to="/services">
                Clear the Clutter Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-6 text-lg hover:bg-primary hover:text-white hover:scale-105 transition-transform duration-200"
            >
              <a href="#upcoming-events">
                Join an Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Latest Updates Section */}
          <div className="w-full py-16 bg-white/30 backdrop-blur-sm rounded-xl">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-heading mb-12 text-center">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Next Event */}
                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Calendar className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Next Co-working Session</h3>
                  <p className="text-accent">Join us this Friday for "I'm Working Late" night. Bring your projects!</p>
                  <Button variant="link" className="mt-4">
                    RSVP Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Community Highlight */}
                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Users className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Community Spotlight</h3>
                  <p className="text-accent">Meet our members and their creative projects in our weekly showcase.</p>
                  <Button variant="link" className="mt-4">
                    View Stories <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* New Resource */}
                <div className="bg-white/50 p-6 rounded-lg border border-border/20">
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">New Resources</h3>
                  <p className="text-accent">Just released: Automation workflow templates for creative businesses.</p>
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
