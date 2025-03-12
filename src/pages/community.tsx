
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight, Bot, Settings } from "lucide-react";
import { Helmet } from "react-helmet";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Helmet>
          <title>Community & Events for Freelancers & Small Businesses | CreAI Lab</title>
          <meta name="description" content="Join the CreAI Lab community for co-working sessions, masterminds, and online events focused on AI and automation for freelancers and small businesses." />
          <meta name="keywords" content="AI community, freelancer events, business networking, entrepreneur meetups, AI webinars, business automation events" />
        </Helmet>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Community & Events</h1>
          
          {/* Upcoming Events */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <Calendar className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-heading text-2xl mb-2">"I'm Working Late" Night</h3>
                <p className="text-accent mb-4">Join our weekly co-working session every Friday in Paris with the Lazy High Achievers community</p>
                <Button>RSVP Now <ArrowRight className="ml-2" /></Button>
              </div>
              
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <Users className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-heading text-2xl mb-2">Monthly Masterminds</h3>
                <p className="text-accent mb-4">Connect with fellow entrepreneurs and share insights in our exclusive Paris-based community meetups</p>
                <Button>Join Next Session <ArrowRight className="ml-2" /></Button>
              </div>
            </div>
          </section>
          
          {/* Community Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading">Join Our Lazy High Achievers Community</h3>
                <p className="text-accent">Connect with like-minded creators and entrepreneurs in Paris who achieve big things without burning out</p>
                <Button variant="outline" className="w-full">
                  Join Discord <ArrowRight className="ml-2" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-heading">Member Spotlight</h3>
                <p className="text-accent">See what our community members are building in beautiful Paris and beyond</p>
                <Button variant="outline" className="w-full">
                  View Projects <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
          
          {/* Online Events Section */}
          <section>
            <h2 className="text-4xl font-heading mb-8">Online Events</h2>
            <div className="border border-border/20 p-8 rounded-lg bg-white/50 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Bot className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl mb-2">What the Heck is an AI Agent?</h3>
                  <p className="text-accent mb-4">An upcoming online webinar to help you understand AI agents, how they work, and how to use them effectively in your business.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-primary">April 2025</span>
                    <Button variant="outline">
                      Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-border/20 p-8 rounded-lg bg-white/50">
              <div className="flex flex-col md:flex-row gap-6">
                <Settings className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl mb-2">Automate Your Business with n8n</h3>
                  <p className="text-accent mb-4">Learn how to create powerful automation workflows that connect your favorite tools - save hours of manual work in this hands-on workshop.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-primary">April 2025</span>
                    <Button variant="outline">
                      Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
