
import { toast } from "@/hooks/use-toast";
import { NotionUpdate } from "./notionApi";

// URL for the Supabase Edge Function we'll create
// You'll need to replace this with your actual Supabase project URL once deployed
const NOTION_PROXY_URL = "YOUR_SUPABASE_URL/functions/v1/notion-proxy";

export async function fetchNotionUpdatesViaProxy(apiKey: string, databaseId: string): Promise<NotionUpdate[]> {
  if (!apiKey || !databaseId) {
    throw new Error("Notion API key and database ID are required");
  }

  try {
    console.log("Fetching from Notion via Supabase proxy");
    
    const response = await fetch(NOTION_PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notionApiKey: apiKey,
        databaseId: databaseId
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Proxy error:", errorText);
      throw new Error(errorText || `HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response from proxy:", data);
    
    if (!data.updates) {
      throw new Error("Invalid response from proxy");
    }
    
    return data.updates as NotionUpdate[];
  } catch (error: any) {
    console.error("Error fetching via proxy:", error);
    throw new Error(`Failed to fetch updates via proxy: ${error.message || 'Unknown error'}`);
  }
}
