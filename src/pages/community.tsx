
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, MapPin } from "lucide-react";
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
                <h3 className="font-heading text-2xl mb-2">(Lazy) High Achievers</h3>
                <p className="text-accent mb-4">My community for creatives, freelancers, entrepreneurs, artists, writers and others who achieve big things without burning out. Join our weekly co-working sessions every Monday in Paris.</p>
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
                <p className="text-accent mb-4">Join my friends at Paatch for events around France and coliving and trips aimed at freelancers and remote workers.</p>
                <Button asChild>
                  <a href="https://www.paat.ch/en" target="_blank" rel="noopener noreferrer">
                    Visit Paatch <ArrowRight className="ml-2" />
                  </a>
                </Button>
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
