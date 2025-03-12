
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Workflow, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { NotionUpdates } from "./NotionUpdates";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-16">          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8">
              Automation & AI Solutions for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-4">
              Save 10+ hours every week with smart tech solutions. Handle more clients and projects without the overwhelm.
            </p>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-8">
              I help freelancers and small business owners build simple systems that work for your unique needs. No one-size-fits-all solutions - just practical tools that fit your specific workflow.
            </p>
            <Button 
              asChild 
              className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-200"
            >
              <a href="https://polished-care-fbe.notion.site/1b4195d3201d8095bb2cc810ebd5c696?pvs=105" target="_blank" rel="noopener noreferrer">
                Let's Go!
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Tech Setup & Support</h2>
              <p className="text-accent mb-4">Get your tools working together seamlessly with expert help tailored to your business</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/services">
                  See Services <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Workflow className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Workflow Automation</h2>
              <p className="text-accent mb-4">Find the right tools for your budget and create simple workflows that save you time</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/tools">
                  Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="h-full border border-border/20 p-8 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Bot className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl mb-4">Community</h2>
              <p className="text-accent mb-4">Connect with other freelancers during our co-working sessions, workshops and events</p>
              <Button variant="link" asChild className="p-0 hover:px-4 transition-all">
                <a href="/community">
                  Join Us <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-200"
            >
              <a href="https://calendly.com/anna-creailab/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-200"
            >
              <Link to="/community">
                Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <NotionUpdates />
        </div>
      </div>
    </section>
  );
};
