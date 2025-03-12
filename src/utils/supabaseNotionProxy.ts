
import { NotionUpdate } from "./notionApi";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export async function fetchNotionUpdatesViaProxy(): Promise<NotionUpdate[]> {
  try {
    console.log("Fetching updates via Supabase proxy...");
    const { data, error } = await supabase.functions.invoke('notion-proxy');
    
    if (error) {
      console.error("Edge function error:", error);
      throw new Error(`Failed to fetch updates: ${error.message}`);
    }

    console.log("Full response from edge function:", data);

    if (!data || data.error) {
      console.error("Error from Notion proxy:", data?.error);
      throw new Error(data?.error || 'Unknown error from Notion proxy');
    }

    if (!Array.isArray(data?.updates)) {
      console.error("Invalid updates format:", data);
      throw new Error('Invalid response format from proxy');
    }
    
    return data.updates as NotionUpdate[];
  } catch (error) {
    console.error("Error fetching via proxy:", error);
    throw error;
  }
}
