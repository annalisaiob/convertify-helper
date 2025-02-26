
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">Transform Your Business Operations</h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto">Get expert help to optimize your workflows and systems - completely free of charge. No hidden fees, no commitments.</p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {/* Service Cards with consistent spacing and styling */}
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <Workflow className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-3xl font-heading mb-6">Process Optimization & Automation</h2>
                <p className="text-accent text-lg mb-8">Transform your manual workflows into efficient, automated systems. Save hours of repetitive work and focus on what matters most to your business.</p>
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
                <h2 className="text-3xl font-heading mb-6">Custom No-Code Solutions</h2>
                <p className="text-accent text-lg mb-8">Get powerful internal tools, dashboards, and databases built specifically for your needs - without writing a single line of code.</p>
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
                <h2 className="text-3xl font-heading mb-6">Tool & System Implementation</h2>
                <p className="text-accent text-lg mb-8">Get expert guidance on choosing and implementing the perfect software solutions for your specific business needs.</p>
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
                <h2 className="text-3xl font-heading mb-6">Tool & System Integration</h2>
                <p className="text-accent text-lg mb-8">Connect and optimize your existing software ecosystem for maximum efficiency and seamless data flow between systems.</p>
              </div>
              <Button 
                onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                variant="outline"
                className="w-full"
              >
                Connect Systems <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">Transform Your Business in Three Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">01</div>
                <h3 className="text-2xl font-heading mb-6">Schedule a Free Call</h3>
                <p className="text-accent text-lg mb-8">Book a no-pressure consultation to discuss your needs and challenges. Let's explore how we can optimize your business operations.</p>
                <Button 
                  onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                  className="w-full"
                >
                  Book Your Free Call <ArrowRight className="ml-2" />
                </Button>
              </div>
              
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">02</div>
                <h3 className="text-2xl font-heading mb-6">Get Your Custom Roadmap</h3>
                <p className="text-accent text-lg mb-8">Receive a tailored action plan designed specifically for your business needs and goals - at absolutely no cost.</p>
              </div>
              
              <div className="p-12 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-heading text-primary/50 mb-8">03</div>
                <h3 className="text-2xl font-heading mb-6">Experience Operational Zen</h3>
                <p className="text-accent text-lg mb-8">Watch your operations transform into a smooth, efficient system that runs like clockwork.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-accent mb-12 max-w-2xl mx-auto">Book your free consultation now and discover how we can optimize your business operations - completely free of charge.</p>
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
