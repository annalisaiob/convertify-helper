
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Workflow, ArrowRight, Zap, Settings } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Services</h1>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Workflow className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">Process Automation</h2>
              <p className="text-accent text-lg">Transform your workflows into efficient, automated systems that save time and reduce errors.</p>
              <ul className="space-y-4 text-accent">
                <li>• Workflow analysis and optimization</li>
                <li>• Custom automation solutions</li>
                <li>• Integration between tools</li>
              </ul>
            </div>
            <div className="space-y-6">
              <Zap className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-heading">No-Code Solutions</h2>
              <p className="text-accent text-lg">Build powerful tools without writing code.</p>
              <ul className="space-y-4 text-accent">
                <li>• Custom dashboards</li>
                <li>• Internal tools</li>
                <li>• Database setup</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button className="text-lg px-8 py-6 hover:scale-105">
              Book a Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
