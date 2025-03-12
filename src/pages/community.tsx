
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight, Bot, Settings, MapPin, Heart } from "lucide-react";
import { Helmet } from "react-helmet";
import { NotionUpdates } from "@/components/NotionUpdates";

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
          
          {/* Paris Communities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">Communities in Paris</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-2" />
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Lazy High Achievers</h3>
                <p className="text-accent mb-4">My community for freelancers and entrepreneurs who achieve big things without burning out. Join our weekly co-working sessions every Friday in Paris.</p>
                <Button asChild>
                  <a href="https://www.meetup.com/lazy-high-achievers/" target="_blank" rel="noopener noreferrer">
                    Join Community <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-2" />
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Paatch</h3>
                <p className="text-accent mb-4">My friends at Paatch build a community of business owners, freelancers, and remote workers in Paris who want to connect and grow together.</p>
                <Button asChild>
                  <a href="https://www.paat.ch/en" target="_blank" rel="noopener noreferrer">
                    Visit Paatch <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* In-person Events */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">In-Person Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-primary mr-2" />
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-2">"I'm Working Late" Night</h3>
                <p className="text-accent mb-4">Join our weekly co-working session every Friday in Paris with the Lazy High Achievers community</p>
                <Button asChild>
                  <a href="https://www.meetup.com/lazy-high-achievers/events/" target="_blank" rel="noopener noreferrer">
                    RSVP Now <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-2" />
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Monthly Masterminds</h3>
                <p className="text-accent mb-4">Connect with fellow entrepreneurs and share insights in our exclusive Paris-based community meetups</p>
                <Button asChild>
                  <a href="https://www.meetup.com/lazy-high-achievers/events/" target="_blank" rel="noopener noreferrer">
                    Find Next Session <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Online Events Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">Online Events</h2>
            <div className="border border-border/20 p-8 rounded-lg bg-white/50 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Bot className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl mb-2">What the Heck is an AI Agent?</h3>
                  <p className="text-accent mb-4">An upcoming online webinar to help you understand AI agents, how they work, and how to use them effectively in your business.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-primary">April 2025</span>
                    <Button variant="outline" asChild>
                      <a href="https://creailab.notion.site/creailab/Events-cd91ad4b30bd48ca82a9c4b80e5fe0d0" target="_blank" rel="noopener noreferrer">
                        Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
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
                    <Button variant="outline" asChild>
                      <a href="https://creailab.notion.site/creailab/Events-cd91ad4b30bd48ca82a9c4b80e5fe0d0" target="_blank" rel="noopener noreferrer">
                        Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Notion Updates - Dynamic Community Content */}
          <section>
            <NotionUpdates />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
