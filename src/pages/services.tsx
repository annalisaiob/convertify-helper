
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">Transform Your Business Operations</h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto">Let's clear away the chaos and create systems that actually work for you.</p>
          </div>

          {/* Current State Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-heading mb-8 text-center">Do you ever feel like...</h2>
            <ul className="space-y-6 text-lg">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                Your to-do list is never-ending, and you're always putting out fires instead of getting ahead?
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                You're drowning in emails, invoices, and admin tasks, leaving no time for the work that actually matters?
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                Your desk is full of sticky notes, voice memos, and spreadsheets, but nothing is organized the way you need it to be?
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                Your tools and systems feel like a jumble, and it's hard to keep everything straight?
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                You know things could be working better, but it all feels a bit too much to figure out?
              </li>
            </ul>
          </div>

          {/* Future State Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-heading mb-8 text-center">Imagine instead...</h2>
            <ul className="space-y-6 text-lg">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                Having more time to focus on what really matters to you—whether that's getting more clients or just enjoying life.
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                Cutting down on the constant stress of feeling behind, and finally getting on top of things.
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                Getting your tools and systems working in sync so you don't waste time looking for things or redoing work.
              </li>
            </ul>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <Workflow className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-3xl font-heading mb-6">Streamline & Automate Your Work</h2>
                <p className="text-accent text-lg mb-8">Save 10+ hours a week by cutting out repetitive tasks and setting up systems that actually work for you.</p>
              </div>
              <Button 
                onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                variant="outline"
                className="w-full"
              >
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <Zap className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-3xl font-heading mb-6">Build Simple, Custom Tools</h2>
                <p className="text-accent text-lg mb-8">Get simple, tailored solutions—whether it's a better workflow or a dashboard that helps you stay on track.</p>
              </div>
              <Button 
                onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                variant="outline"
                className="w-full"
              >
                Explore Solutions <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <Settings className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-3xl font-heading mb-6">Choose & Set Up the Right Tools</h2>
                <p className="text-accent text-lg mb-8">Stop wasting time guessing. Get expert guidance on choosing and implementing the perfect software solutions.</p>
              </div>
              <Button 
                onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                variant="outline"
                className="w-full"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <Link className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-3xl font-heading mb-6">Connect with Resources & Community</h2>
                <p className="text-accent text-lg mb-8">Through events, workshops, and collaborations, we help creatives and entrepreneurs meet, learn, and grow.</p>
              </div>
              <Button 
                onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                variant="outline"
                className="w-full"
              >
                Join Community <ArrowRight className="ml-2" />
              </Button>
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
