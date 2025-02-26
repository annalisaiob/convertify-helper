
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Community & Events</h1>
          
          {/* Upcoming Events */}
          <section className="mb-20">
            <h2 className="text-4xl font-heading mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <Calendar className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-heading text-2xl mb-2">"I'm Working Late" Night</h3>
                <p className="text-accent mb-4">Join our weekly co-working session every Friday</p>
                <Button>RSVP Now <ArrowRight className="ml-2" /></Button>
              </div>
              
              <div className="border border-border/20 p-8 rounded-lg bg-white/50">
                <Users className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-heading text-2xl mb-2">Monthly Masterminds</h3>
                <p className="text-accent mb-4">Connect with fellow entrepreneurs and share insights</p>
                <Button>Join Next Session <ArrowRight className="ml-2" /></Button>
              </div>
            </div>
          </section>
          
          {/* Community Section */}
          <section>
            <h2 className="text-4xl font-heading mb-8">Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading">Join Our Community</h3>
                <p className="text-accent">Connect with like-minded creators and entrepreneurs</p>
                <Button variant="outline" className="w-full">
                  Join Discord <ArrowRight className="ml-2" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-heading">Member Spotlight</h3>
                <p className="text-accent">See what our community members are building</p>
                <Button variant="outline" className="w-full">
                  View Projects <ArrowRight className="ml-2" />
                </Button>
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
