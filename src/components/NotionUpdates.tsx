import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Newspaper, Folder, ArrowRight, Loader2, Key, Database, AlertCircle, RefreshCw, Server, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fetchNotionUpdates, NotionUpdate } from "@/utils/notionApi";
import { fetchNotionUpdatesViaProxy } from "@/utils/supabaseNotionProxy";

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
  const [showSetup, setShowSetup] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [databaseId, setDatabaseId] = useState("");
  const [isConfigured, setIsConfigured] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);
  const [corsError, setCorsError] = useState(false);
  const [useProxy, setUseProxy] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const savedApiKey = localStorage.getItem("notion_api_key");
    const savedDatabaseId = localStorage.getItem("notion_database_id");
    
    if (savedApiKey && savedDatabaseId) {
      console.log("Found saved Notion credentials");
      setApiKey(savedApiKey);
      setDatabaseId(savedDatabaseId);
      setIsConfigured(true);
    } else {
      console.log("No saved Notion credentials found");
      setShowSetup(true);
    }
  }, []);

  const fetchUpdates = async () => {
    setLoading(true);
    setFetchError(null);
    setUsingSampleData(false);
    setCorsError(false);
    
    try {
      if (isConfigured) {
        console.log("Attempting to fetch from Notion with configured credentials");
        try {
          let notionUpdates;
          
          if (useProxy) {
            notionUpdates = await fetchNotionUpdatesViaProxy(apiKey, databaseId);
          } else {
            notionUpdates = await fetchNotionUpdates(apiKey, databaseId);
          }
          
          console.log("Fetched updates:", notionUpdates);
          
          if (notionUpdates && notionUpdates.length > 0) {
            setUpdates(notionUpdates);
            toast({
              title: "Connected to Notion",
              description: `Successfully fetched ${notionUpdates.length} updates from your Notion database`,
            });
          } else {
            console.warn("No updates found in Notion database");
            setFetchError("No items found in your Notion database. Make sure you have added content with the correct properties.");
            setUpdates(SAMPLE_UPDATES);
            setUsingSampleData(true);
          }
        } catch (error: any) {
          console.error("Error fetching from Notion:", error);
          
          if (error.message === "CORS_ERROR") {
            setCorsError(true);
            setUpdates(SAMPLE_UPDATES);
            setUsingSampleData(true);
          } else {
            setFetchError(`Failed to fetch data from Notion: ${error.message || 'Unknown error'}. Please verify your API key and database ID.`);
            toast({
              title: "Notion API Error",
              description: "There was an error connecting to your Notion database",
              variant: "destructive",
            });
            setUpdates(SAMPLE_UPDATES);
            setUsingSampleData(true);
          }
        }
      } else {
        console.log("Using sample data (not configured)");
        setUpdates(SAMPLE_UPDATES);
        setUsingSampleData(true);
      }
    } catch (error: any) {
      console.error("Error in update fetch logic:", error);
      setFetchError(`An unexpected error occurred: ${error.message || 'Unknown error'}. Please try again later.`);
      toast({
        title: "Couldn't load updates",
        description: "Please check back later",
        variant: "destructive",
      });
      setUpdates(SAMPLE_UPDATES);
      setUsingSampleData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, [toast, isConfigured, apiKey, databaseId]);

  const saveNotionConfig = () => {
    if (apiKey && databaseId) {
      localStorage.setItem("notion_api_key", apiKey);
      localStorage.setItem("notion_database_id", databaseId);
      setIsConfigured(true);
      setShowSetup(false);
      toast({
        title: "Notion configuration saved",
        description: "Your Notion API key and database ID have been saved",
      });
      fetchUpdates();
    } else {
      toast({
        title: "Missing information",
        description: "Please provide both the API key and database ID",
        variant: "destructive",
      });
    }
  };

  const getIconForType = (type: NotionUpdate["type"]) => {
    switch (type) {
      case "event":
        return <Calendar className="w-8 h-8 mb-4 text-primary" />;
      case "news":
        return <Newspaper className="w-8 h-8 mb-4 text-primary" />;
      case "project":
        return <Folder className="w-8 h-8 mb-4 text-primary" />;
      default:
        return <Newspaper className="w-8 h-8 mb-4 text-primary" />;
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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-heading text-center">Latest Updates</h2>
          <div className="flex gap-2">
            {isConfigured && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={fetchUpdates}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            )}
            {!showSetup ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowSetup(true)}
                className="flex items-center gap-2"
              >
                <Database className="w-4 h-4" />
                {isConfigured ? "Update Notion Config" : "Connect to Notion"}
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowSetup(false)}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>

        {showSetup && (
          <div className="mb-8 p-6 bg-white/50 rounded-lg border border-border/30">
            <h3 className="font-heading text-xl mb-4">Connect to Notion</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="api-key" className="block text-sm font-medium mb-1">
                  Notion API Key
                </label>
                <div className="flex gap-2 items-center">
                  <Key className="w-4 h-4 text-gray-500" />
                  <input
                    id="api-key"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="secret_..."
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Your API key is stored locally in your browser and never sent to our servers.
                </p>
              </div>
              <div>
                <label htmlFor="database-id" className="block text-sm font-medium mb-1">
                  Notion Database ID
                </label>
                <div className="flex gap-2 items-center">
                  <Database className="w-4 h-4 text-gray-500" />
                  <input
                    id="database-id"
                    type="text"
                    value={databaseId}
                    onChange={(e) => setDatabaseId(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g. 8d5fe368b0a64f1b9c5f6d9e5f4c3b2a"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="use-proxy"
                  type="checkbox"
                  checked={useProxy}
                  onChange={(e) => setUseProxy(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/25"
                />
                <label htmlFor="use-proxy" className="text-sm font-medium text-gray-700">
                  Use Supabase proxy (recommended)
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Using the Supabase proxy will avoid CORS errors when fetching from Notion.
              </p>
              <Button onClick={saveNotionConfig}>Save Configuration</Button>
            </div>
          </div>
        )}

        {corsError && !useProxy && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Server className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-2">CORS Error: Browser Security Limitation</p>
                <p className="text-sm mb-3">
                  Your browser is blocking direct requests to the Notion API due to Cross-Origin Resource Sharing (CORS) security restrictions.
                </p>
                <p className="text-sm font-medium">Solutions:</p>
                <div className="mb-3 space-y-4 mt-2">
                  <div className="bg-white/40 p-3 rounded border border-amber-200/50">
                    <p className="font-medium text-sm mb-1 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 inline-flex items-center justify-center mr-2 text-xs">1</span>
                      Enable "Use Supabase proxy" option
                    </p>
                    <p className="text-xs ml-7">
                      Toggle on the "Use Supabase proxy" checkbox in the Notion configuration and save.
                    </p>
                    <div className="mt-2 ml-7">
                      <Button 
                        size="sm" 
                        onClick={() => {
                          setUseProxy(true);
                          toast({
                            title: "Proxy enabled",
                            description: "The Supabase proxy has been enabled. Save your configuration to apply changes."
                          });
                        }}
                      >
                        Enable Proxy
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white/40 p-3 rounded border border-amber-200/50">
                    <p className="font-medium text-sm mb-1 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 inline-flex items-center justify-center mr-2 text-xs">2</span>
                      Use a CORS proxy service
                    </p>
                    <p className="text-xs ml-7">
                      Services like CORS Anywhere can help bypass CORS restrictions for development purposes.
                    </p>
                    <div className="mt-2 ml-7">
                      <Button size="sm" variant="outline" asChild className="text-xs h-7 px-2">
                        <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          CORS Anywhere
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="text-xs italic">Showing sample data in the meantime. Enable the Supabase proxy to solve the CORS issue.</p>
              </div>
            </div>
          </div>
        )}

        {usingSampleData && !fetchError && !corsError && isConfigured && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-medium">Using sample data</p>
                <p className="text-sm">Currently showing sample data. No data could be fetched from your Notion database.</p>
                <p className="text-xs mt-2">
                  Make sure your Notion database has the following properties: Title, Description, Category (select), Link, Image, and Date.
                </p>
              </div>
            </div>
          </div>
        )}

        {fetchError && !corsError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-medium">Error connecting to Notion</p>
                <p className="text-sm">{fetchError}</p>
                <p className="text-xs mt-2">Showing sample data instead.</p>
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
