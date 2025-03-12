
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { NotionUpdate } from "@/utils/notionApi";
import { fetchNotionUpdatesViaProxy } from "@/utils/supabaseNotionProxy";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Sample updates as fallback content - only shown if API fails
const SAMPLE_UPDATES: NotionUpdate[] = [
  {
    id: "1",
    title: "Weekly Co-working",
    description: "Join our community co-working nights",
    type: "event",
    link: "/community",
    date: "Every Thursday"
  },
  {
    id: "2",
    title: "Latest News",
    description: "Check out what's new in our community",
    type: "news",
    link: "/news",
  },
  {
    id: "3",
    title: "New Project Templates",
    description: "Fresh templates for your projects",
    type: "project",
    link: "/tools",
  }
];

export const NotionUpdates = () => {
  const [updates, setUpdates] = useState<NotionUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUsingSampleData, setIsUsingSampleData] = useState(false);

  const fetchUpdates = async () => {
    setLoading(true);
    setIsUsingSampleData(false);
    
    try {
      console.log("Starting to fetch Notion updates...");
      const notionUpdates = await fetchNotionUpdatesViaProxy();
      console.log("Received updates:", notionUpdates);
      
      if (notionUpdates && notionUpdates.length > 0) {
        console.log(`Setting ${notionUpdates.length} real updates from Notion`);
        setUpdates(notionUpdates);
      } else {
        console.log("No updates returned from API, using sample data");
        setUpdates(SAMPLE_UPDATES);
        setIsUsingSampleData(true);
        toast({
          title: "Using sample data",
          description: "Could not load data from Notion. Check console for details.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
      console.log("Using sample data due to fetch error");
      setUpdates(SAMPLE_UPDATES);
      setIsUsingSampleData(true);
      toast({
        title: "Error loading updates",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("NotionUpdates component mounted, fetching updates...");
    fetchUpdates();
  }, []);

  const getIconForType = (type: NotionUpdate["type"]) => {
    switch (type) {
      case "event":
        return <div className="w-8 h-8 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">📅</div>;
      case "news":
        return <div className="w-8 h-8 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">📰</div>;
      case "project":
        return <div className="w-8 h-8 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">📁</div>;
      default:
        return <div className="w-8 h-8 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">📰</div>;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 bg-white/30 backdrop-blur-sm rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12">
          Latest Updates
          {isUsingSampleData && (
            <span className="text-sm text-red-500 ml-2">(Sample Data)</span>
          )}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white/50 p-6 rounded-lg border border-border/20">
              {getIconForType(update.type)}
              {update.imageUrl && (
                <img 
                  src={update.imageUrl} 
                  alt={update.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <h3 className="font-heading text-xl mb-2">{update.title}</h3>
              {update.date && <p className="text-sm text-primary/80 mb-2">{update.date}</p>}
              <p className="text-accent line-clamp-2">{update.description}</p>
              <Button variant="link" className="mt-4" asChild>
                <a href={update.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </Button>
            </div>
          ))}
        </div>

        {isUsingSampleData && (
          <div className="text-center mt-8">
            <Button 
              onClick={fetchUpdates} 
              className="mx-auto"
              variant="outline"
            >
              Retry Loading Data
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
