
import { toast } from "@/hooks/use-toast";
import { NotionUpdate } from "./notionApi";
import { supabase } from "@/integrations/supabase/client";

export async function fetchNotionUpdatesViaProxy(): Promise<NotionUpdate[]> {
  try {
    console.log("Fetching from Notion via Supabase edge function");
    
    const { data, error } = await supabase.functions.invoke('notion-proxy');
    
    if (error) {
      console.error("Edge function error:", error);
      throw new Error(error.message || 'Function invocation failed');
    }

    console.log("Response from edge function:", data);
    
    if (data.error) {
      console.error("Error from notion-proxy:", data.error);
      throw new Error(data.error);
    }
    
    if (!Array.isArray(data.updates)) {
      console.error("Invalid updates format:", data.updates);
      throw new Error("Invalid response format from proxy");
    }
    
    return data.updates as NotionUpdate[];
  } catch (error: any) {
    console.error("Error fetching via proxy:", error);
    throw new Error(`Failed to fetch updates via proxy: ${error.message || 'Unknown error'}`);
  }
}
