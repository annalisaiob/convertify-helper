
import { Client } from "@notionhq/client";
import { toast } from "@/hooks/use-toast";

export type NotionUpdate = {
  id: string;
  title: string;
  description: string;
  type: "event" | "news" | "project";
  link: string;
  imageUrl?: string;
  date?: string;
};

export async function fetchNotionUpdates(apiKey: string, databaseId: string): Promise<NotionUpdate[]> {
  if (!apiKey || !databaseId) {
    throw new Error("Notion API key and database ID are required");
  }

  try {
    console.log("Initializing Notion client with API key:", apiKey.substring(0, 5) + "..." + apiKey.substring(apiKey.length - 5));
    console.log("Database ID:", databaseId);
    
    // Check if we're running in a browser environment
    if (typeof window !== 'undefined') {
      console.log("Browser environment detected - direct Notion API calls will be blocked by CORS");
      throw new Error("CORS_ERROR");
    }
    
    const notion = new Client({ auth: apiKey });
    
    console.log("Querying Notion database");
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    console.log("Notion response received:", response.results.length, "items");
    
    // Log the first result to see its structure (if available)
    if (response.results.length > 0) {
      console.log("Sample result structure:", JSON.stringify(response.results[0], null, 2));
    } else {
      console.warn("No results returned from Notion database");
      return [];
    }

    const updates: NotionUpdate[] = response.results.map((page: any) => {
      const properties = page.properties;
      
      // Extract values with detailed logging
      const title = properties.Title?.title?.[0]?.plain_text || "No Title";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "";
      const type = properties.Category?.select?.name?.toLowerCase() || "news";
      const link = properties.Link?.url || "/";
      const imageUrl = properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url;
      const dateProperty = properties.Date?.date?.start;
      
      console.log("Extracted item:", { title, type, hasImage: !!imageUrl });

      return {
        id: page.id,
        title,
        description,
        type: type as "event" | "news" | "project",
        link,
        imageUrl,
        date: dateProperty,
      };
    });

    console.log("Processed updates:", updates.length);
    return updates;
  } catch (error: any) {
    console.error("Error fetching from Notion:", error);
    
    // Special case for CORS errors
    if (error.message === "CORS_ERROR") {
      throw new Error("CORS_ERROR");
    }
    
    // Provide more specific error messages based on error type
    if (error.code === 'unauthorized') {
      throw new Error("Invalid Notion API key. Please check your credentials.");
    } else if (error.code === 'object_not_found') {
      throw new Error("Database not found. Please check your database ID.");
    } else {
      throw new Error(`Failed to fetch updates from Notion: ${error.message || 'Unknown error'}`);
    }
  }
}
