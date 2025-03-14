
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { NotionUpdate } from "@/utils/notionApi";
import { fetchNotionUpdatesViaProxy } from "@/utils/supabaseNotionProxy";
import { Button } from "@/components/ui/button";

// Production-ready fallback content
const SAMPLE_UPDATES: NotionUpdate[] = [
  {
    id: "1",
    title: "Weekly Co-working",
    description: "Join our start of the week co-working at Climbing District - connect, work, and grow together with fellow entrepreneurs.",
    type: "event",
    link: "https://www.meetup.com/lazy-high-achievers/events/306178249/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link",
    date: "Every Monday"
  },
  {
    id: "2",
    title: "Future of Freelancing Work",
    description: "Join on 27th of March for an evening of networking and discussing AI in our work as freelancers and entrepreneurs.",
    type: "event",
    link: "https://www.eventbrite.fr/e/ai-freelancers-work-smarter-earn-more-stay-ahead-tickets-1258155921229",
    date: "March 27"
  },
  {
    id: "3",
    title: "DateTheApp: Find Your Tech Match",
    description: "A platform that curates AI and digital tools for small businesses. Matching businesses to the right tech based on their workflow needs. Guiding implementation for growth without tech overwhelm.",
    type: "project",
    link: "https://polished-care-fbe.notion.site/1b4195d3201d80d98ccddc22b48310a9?pvs=105"
  }
];

export const NotionUpdates = () => {
  const [updates, setUpdates] = useState<NotionUpdate[]>(SAMPLE_UPDATES);
  const [loading, setLoading] = useState(true);

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      const notionUpdates = await fetchNotionUpdatesViaProxy();
      if (notionUpdates && notionUpdates.length > 0) {
        setUpdates(notionUpdates);
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

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
                  {update.type === "project" ? "Join Waitlist" : "Join Event"}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
