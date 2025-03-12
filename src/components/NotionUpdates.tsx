
import { useState, useEffect } from "react";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { NotionUpdate } from "@/utils/notionApi";
import { fetchNotionUpdatesViaProxy } from "@/utils/supabaseNotionProxy";
import { Button } from "@/components/ui/button";

// Sample updates to show in case of error
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
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);
  const { toast } = useToast();

  const fetchUpdates = async () => {
    setLoading(true);
    setFetchError(null);
    setUsingSampleData(false);
    
    try {
      const notionUpdates = await fetchNotionUpdatesViaProxy();
      
      if (notionUpdates && notionUpdates.length > 0) {
        setUpdates(notionUpdates);
        toast({
          title: "Updates loaded",
          description: `Loaded ${notionUpdates.length} updates from Notion`,
          variant: "default",
        });
      } else {
        console.warn("No updates found in Notion database");
        setFetchError("No items found in the Notion database.");
        setUpdates(SAMPLE_UPDATES);
        setUsingSampleData(true);
      }
    } catch (error: any) {
      console.error("Error fetching from Notion:", error);
      setFetchError(`${error.message || 'Unknown error'}`);
      setUpdates(SAMPLE_UPDATES);
      setUsingSampleData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-heading text-center">Latest Updates</h2>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchUpdates}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>

        {fetchError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-medium">Error fetching updates</p>
                <p className="text-sm">{fetchError}</p>
                {usingSampleData && (
                  <p className="text-xs mt-2">Showing sample data instead.</p>
                )}
              </div>
            </div>
          </div>
        )}

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
                    console.error("Image failed to load:", update.imageUrl);
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
      </div>
    </div>
  );
};
