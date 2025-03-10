
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles, Brain, List, Code, Bot, Calendar, WandSparkles, Settings } from "lucide-react";
import { Helmet } from "react-helmet";

const ToolsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Helmet>
          <title>AI Tools & Resources for Freelancers | CreAI Lab</title>
          <meta name="description" content="Access free AI tools, resources, and upcoming courses for freelancers and small businesses. Stay updated with our bi-monthly AI tools list." />
          <meta name="keywords" content="AI tools, freelancer resources, business automation, tech stack finder, AI readiness, no-code workflows, business templates" />
        </Helmet>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Tools & Resources</h1>
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading mb-8 text-center">Free Downloads</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Template Card */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl mb-4">Workflow Templates</h3>
                <p className="text-accent mb-6">Ready-to-use templates for common business processes</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2" /> Download
                </Button>
              </div>
              
              {/* Guide Card */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl mb-4">Setup Guides</h3>
                <p className="text-accent mb-6">Step-by-step guides for tool implementation</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2" /> Access Guides
                </Button>
              </div>
              
              {/* Resource Card */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl mb-4">Resource Library</h3>
                <p className="text-accent mb-6">Curated collection of helpful resources</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2" /> Browse Library
                </Button>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading mb-8 text-center">Coming Soon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tech Stack Finder */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute -right-10 -top-10 bg-primary/10 w-40 h-40 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                <WandSparkles className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-2xl mb-4">Tech Stack Finder</h3>
                <p className="text-accent mb-2">Find your perfect tech stack with budget-based recommendations and personalized tech maps.</p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-4">
                  Coming April 2025
                </div>
              </div>
              
              {/* AI Readiness Assessment */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute -right-10 -top-10 bg-primary/10 w-40 h-40 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-2xl mb-4">AI Readiness Assessment</h3>
                <p className="text-accent mb-2">A comprehensive evaluation tool for freelancers and entrepreneurs to assess their readiness for AI integration, identifying opportunities and gaps in their current workflow.</p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-4">
                  Coming April 2025
                </div>
              </div>
            </div>
          </div>

          {/* AI Tools List */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-3xl font-heading">AI Tools List</h2>
              <p className="text-accent italic">Published twice a month</p>
            </div>
            <div className="border border-border/20 p-8 rounded-lg bg-white/50 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <List className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl mb-2">Latest AI Tools & Trends</h3>
                  <p className="text-accent mb-4">Stay ahead of the curve with my bi-monthly curated list of the latest AI tools and trends to keep an eye on. Perfect for busy professionals who want to stay informed without spending hours researching.</p>
                  <Button>
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Courses */}
          <div>
            <h2 className="text-3xl font-heading mb-8 text-center">Upcoming Courses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Agents Course */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute -right-10 -top-10 bg-primary/10 w-40 h-40 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                <Bot className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-2xl mb-4">What the Heck is an AI Agent?</h3>
                <p className="text-accent mb-6">A beginner-friendly course to help you understand AI agents, how they work, and how to use them effectively in your business.</p>
                <div className="flex justify-between items-center">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Coming April 2025
                  </div>
                  <Button variant="outline">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Automation Course */}
              <div className="border border-border/20 p-8 rounded-lg bg-white/50 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute -right-10 -top-10 bg-primary/10 w-40 h-40 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                <Settings className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-2xl mb-4">Automate Your Business with n8n</h3>
                <p className="text-accent mb-6">Learn how to create powerful automation workflows that connect your favorite tools. From automatically processing client inquiries to syncing data across platforms - save hours of manual work.</p>
                <div className="flex justify-between items-center">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Coming April 2025
                  </div>
                  <Button variant="outline">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
