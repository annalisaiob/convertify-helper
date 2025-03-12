
import { NotionUpdate } from "./notionApi";
import { supabase } from "@/integrations/supabase/client";

export async function fetchNotionUpdatesViaProxy(): Promise<NotionUpdate[]> {
  try {
    const { data, error } = await supabase.functions.invoke('notion-proxy');
    
    if (error) {
      console.error("Edge function error:", error);
      throw new Error('Failed to fetch updates');
    }

    if (!Array.isArray(data?.updates)) {
      console.error("Invalid updates format:", data);
      throw new Error('Failed to fetch updates');
    }
    
    return data.updates as NotionUpdate[];
  } catch (error) {
    console.error("Error fetching via proxy:", error);
    throw new Error('Failed to fetch updates');
  }
}
