
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, Settings, Link } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">Clear Away the Chaos, Unlock Your Time</h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto">Transform your business operations with smart systems that work for you, not against you.</p>
          </div>

          {/* Current & Future State Sections - Redesigned */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Current State Section */}
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl flex flex-col">
              <h2 className="text-3xl font-heading mb-8">Do you ever feel like...</h2>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Your to-do list is never-ending, and you're always putting out fires instead of getting ahead?</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">You're drowning in emails, invoices, and admin tasks, leaving no time for the work that actually matters?</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Your desk is full of sticky notes, voice memos, and spreadsheets, but nothing is organized the way you need it to be?</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Your tools and systems feel like a jumble, and it's hard to keep everything straight?</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">You know things could be working better, but it all feels a bit too much to figure out?</p>
                </div>
              </div>
            </div>

            {/* Future State Section */}
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl flex flex-col">
              <h2 className="text-3xl font-heading mb-8">Imagine instead...</h2>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Having more time to focus on what really matters to you—whether that's getting more clients or just enjoying life.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Cutting down on the constant stress of feeling behind, and finally getting on top of things.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-lg">Getting your tools and systems working in sync so you don't waste time looking for things or redoing work.</p>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <p className="text-xl font-medium text-primary">I can help make that happen.</p>
              </div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="mb-24">
            <h2 className="text-4xl font-heading mb-16 text-center">How I Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Cards - All with identical structure for consistent heights */}
              <div className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="p-8 flex-grow flex flex-col">
                  <Workflow className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-heading mb-4">Streamline & Automate</h3>
                  <p className="text-accent mb-6 flex-grow">Save 10+ hours a week by cutting out repetitive tasks and setting up systems that work for you.</p>
                  <Button 
                    onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Learn More <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="p-8 flex-grow flex flex-col">
                  <Zap className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-heading mb-4">Custom Tools</h3>
                  <p className="text-accent mb-6 flex-grow">Get simple, tailored solutions—whether it's a better workflow or a dashboard that helps you stay on track.</p>
                  <Button 
                    onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Explore Solutions <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="p-8 flex-grow flex flex-col">
                  <Settings className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-heading mb-4">Right Tools</h3>
                  <p className="text-accent mb-6 flex-grow">Stop wasting time guessing. Get expert guidance on finding and implementing the perfect software solutions.</p>
                  <Button 
                    onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="p-8 flex-grow flex flex-col">
                  <Link className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-heading mb-4">Community</h3>
                  <p className="text-accent mb-6 flex-grow">Connect with other creatives and entrepreneurs through events, workshops, and collaborations.</p>
                  <Button 
                    onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Join Community <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">01</div>
                <h3 className="text-2xl font-heading mb-6">Let's Talk</h3>
                <p className="text-accent text-lg mb-8">We'll have a quick, no-pressure chat to figure out what's slowing you down.</p>
                <Button 
                  onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                  className="w-full"
                >
                  Book Your Free Call <ArrowRight className="ml-2" />
                </Button>
              </div>
              
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">02</div>
                <h3 className="text-2xl font-heading mb-6">Get a Custom Plan</h3>
                <p className="text-accent text-lg mb-8">I'll map out a simple plan to streamline how you work and save you time.</p>
              </div>
              
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">03</div>
                <h3 className="text-2xl font-heading mb-6">Work With More Ease</h3>
                <p className="text-accent text-lg mb-8">Less stress, more flow—giving you the time and energy to focus on what matters most.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Ready to Clear the Clutter?</h2>
            <p className="text-xl text-accent mb-12 max-w-2xl mx-auto">Let's tackle the chaos and free up your time. Book a free consultation and see how much easier things can be.</p>
            <Button 
              onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
              className="text-lg px-12 py-8 hover:scale-105"
            >
              Schedule Your Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
