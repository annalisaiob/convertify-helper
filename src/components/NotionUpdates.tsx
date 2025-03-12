
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Bot, Sparkles, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type NotionUpdate = {
  id: string;
  title: string;
  description: string;
  type: "event" | "guide" | "template" | "blog";
  link: string;
  date?: string;
};

// This would normally come from an API call to Notion
// For now, we'll use sample data that you can replace later with actual Notion integration
const SAMPLE_UPDATES: NotionUpdate[] = [
  {
    id: "1",
    title: "Weekly Co-working",
    description: "Join our \"I'm Working Late\" co-working nights - bring your projects and get help",
    type: "event",
    link: "/community",
    date: "Every Thursday"
  },
  {
    id: "2",
    title: "AI Setup Guide",
    description: "New guide: How to set up ChatGPT to help with your client emails and proposals",
    type: "guide",
    link: "/tools",
  },
  {
    id: "3",
    title: "Free Templates",
    description: "Just released: Client onboarding and project management templates for freelancers",
    type: "template",
    link: "/tools",
  }
];

export const NotionUpdates = () => {
  const [updates, setUpdates] = useState<NotionUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        // In a real implementation, this would be an API call to your Notion database
        // For demo purposes, we're using sample data
        setUpdates(SAMPLE_UPDATES);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching updates from Notion:", error);
        toast({
          title: "Couldn't load updates",
          description: "Please check back later",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchUpdates();
  }, [toast]);

  const getIconForType = (type: NotionUpdate["type"]) => {
    switch (type) {
      case "event":
        return <Calendar className="w-8 h-8 mb-4 text-primary" />;
      case "guide":
        return <Bot className="w-8 h-8 mb-4 text-primary" />;
      case "template":
        return <Sparkles className="w-8 h-8 mb-4 text-primary" />;
      case "blog":
        return <FileText className="w-8 h-8 mb-4 text-primary" />;
      default:
        return <Calendar className="w-8 h-8 mb-4 text-primary" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full py-16 bg-white/30 backdrop-blur-sm rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading mb-12 text-center">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white/50 p-6 rounded-lg border border-border/20">
              {getIconForType(update.type)}
              <h3 className="font-heading text-xl mb-2">{update.title}</h3>
              {update.date && <p className="text-sm text-primary/80 mb-2">{update.date}</p>}
              <p className="text-accent">{update.description}</p>
              <Button variant="link" className="mt-4" asChild>
                <a href={update.link}>
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
