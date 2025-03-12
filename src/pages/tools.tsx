
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles, Brain, List, Code, Bot, Calendar, WandSparkles, Settings, Filter } from "lucide-react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

// Card categories
type CardCategory = "All" | "Courses" | "AI Trends" | "Tools" | "Templates";

// Card data structure
interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  category: Exclude<CardCategory, "All">;
}

const ToolsPage = () => {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState<CardCategory>("All");
  const { toast } = useToast();

  // All cards data
  const cards: ResourceCard[] = [
    // AI Trends card
    {
      id: "ai-trends",
      title: "Latest AI Tools & Trends",
      description: "Stay ahead of the curve with my bi-monthly curated list of the latest AI tools and trends to keep an eye on. Perfect for busy professionals who want to stay informed without spending hours researching.",
      icon: <List className="w-12 h-12 text-primary" />,
      category: "AI Trends",
    },
    // Tech Stack Finder
    {
      id: "tech-stack-finder",
      title: "Tech Stack Finder",
      description: "Find your perfect tech stack with budget-based recommendations and personalized tech maps.",
      icon: <WandSparkles className="w-12 h-12 text-primary" />,
      category: "Tools",
    },
    // AI Readiness Assessment
    {
      id: "ai-readiness",
      title: "AI Readiness Assessment",
      description: "A comprehensive evaluation tool for freelancers and entrepreneurs to assess their readiness for AI integration, identifying opportunities and gaps in their current workflow.",
      icon: <Brain className="w-12 h-12 text-primary" />,
      category: "Tools",
    },
    // AI Agents Course
    {
      id: "ai-agents-course",
      title: "What the Heck is an AI Agent?",
      description: "A beginner-friendly course to help you understand AI agents, how they work, and how to use them effectively in your business.",
      icon: <Bot className="w-12 h-12 text-primary" />,
      category: "Courses",
    },
    // Automation Course
    {
      id: "automation-course",
      title: "Automate Your Business with n8n",
      description: "Learn how to create powerful automation workflows that connect your favorite tools. From automatically processing client inquiries to syncing data across platforms - save hours of manual work.",
      icon: <Settings className="w-12 h-12 text-primary" />,
      category: "Courses",
    },
  ];

  // Filter cards based on active filter
  const filteredCards = activeFilter === "All" 
    ? cards 
    : cards.filter(card => card.category === activeFilter);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Exciting News!",
        description: (
          <div className="flex flex-col gap-4">
            <p>I'm working hard on creating these amazing resources for you! Want to be the first to know when they're ready?</p>
            <Button className="w-full" onClick={() => window.open("https://polished-care-fbe.notion.site/1b4195d3201d80d98ccddc22b48310a9?pvs=105", "_blank")}>
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ),
        duration: 10000,
      });
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [toast]);

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
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", "Courses", "AI Trends", "Tools", "Templates"].map((category) => (
              <Button 
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category as CardCategory)}
                className="mb-2"
              >
                {category === "All" && <Filter className="mr-2 h-4 w-4" />}
                {category === "Courses" && <Bot className="mr-2 h-4 w-4" />}
                {category === "AI Trends" && <Sparkles className="mr-2 h-4 w-4" />}
                {category === "Tools" && <WandSparkles className="mr-2 h-4 w-4" />}
                {category === "Templates" && <Code className="mr-2 h-4 w-4" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCards.map((card) => (
              <div 
                key={card.id}
                className="border border-border/20 p-8 rounded-lg bg-white/50 hover:shadow-lg transition-all flex flex-col h-full relative"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {card.category}
                </div>
                
                {/* Card Icon */}
                <div className="mb-4">
                  {card.icon}
                </div>
                
                {/* Card Content */}
                <h3 className="font-heading text-2xl mb-4">{card.title}</h3>
                <p className="text-accent mb-6 flex-grow">{card.description}</p>
                
                {/* Coming Soon Badge */}
                <div className="mt-auto">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Coming April 2025
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add Toaster component to render the toast */}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
