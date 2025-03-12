
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
  try {
    console.log("Initializing Notion client");
    const notion = new Client({ auth: apiKey });
    
    console.log("Querying Notion database:", databaseId);
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
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    throw new Error("Failed to fetch updates from Notion");
  }
}
