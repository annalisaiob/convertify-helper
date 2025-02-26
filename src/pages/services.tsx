
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, Settings, Link } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Services</h1>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Workflow className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">Process Optimization & Automation</h2>
              <p className="text-accent text-lg">Streamline your workflows and eliminate repetitive tasks through smart automation solutions.</p>
            </div>
            <div className="space-y-6">
              <Zap className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">Custom No-Code Solutions</h2>
              <p className="text-accent text-lg">Build powerful internal tools, dashboards, and databases without writing a single line of code.</p>
            </div>
            <div className="space-y-6">
              <Settings className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">Tool & System Implementation</h2>
              <p className="text-accent text-lg">Get guidance on adopting the right software solutions for your specific needs.</p>
            </div>
            <div className="space-y-6">
              <Link className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">Tool & System Integration</h2>
              <p className="text-accent text-lg">Connect and optimize your existing software ecosystem for maximum efficiency.</p>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-4xl font-heading mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-primary rounded-lg">
                <h3 className="text-2xl font-heading mb-4">1. Fix a Call</h3>
                <p className="text-accent mb-4">Schedule a consultation to discuss your needs and challenges.</p>
                <Button 
                  onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
                  className="w-full"
                >
                  Schedule Call <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="p-6 border border-primary rounded-lg">
                <h3 className="text-2xl font-heading mb-4">2. Get Your Roadmap</h3>
                <p className="text-accent mb-4">Receive a customized plan tailored to your business needs and goals.</p>
              </div>
              <div className="p-6 border border-primary rounded-lg">
                <h3 className="text-2xl font-heading mb-4">3. Experience Operational Zen</h3>
                <p className="text-accent mb-4">Implement solutions and watch your operations transform into a smooth, efficient system.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => window.open("https://calendly.com/anna-creailab/", "_blank")}
              className="text-lg px-8 py-6 hover:scale-105"
            >
              Work With Me <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
