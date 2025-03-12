
import { Client } from "@notionhq/client";
import { toast } from "@/hooks/use-toast";

export type NotionUpdate = {
  id: string;
  title: string;
  description: string;
  type: "event" | "guide" | "template" | "blog";
  link: string;
  date?: string;
};

/**
 * Fetches updates from a Notion database
 * @param apiKey - The Notion API key
 * @param databaseId - The Notion database ID
 * @returns An array of NotionUpdate objects
 */
export async function fetchNotionUpdates(apiKey: string, databaseId: string): Promise<NotionUpdate[]> {
  try {
    // Initialize the Notion client with the API key
    const notion = new Client({ auth: apiKey });
    
    // Query the database
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    // Map the response to NotionUpdate objects
    const updates: NotionUpdate[] = response.results.map((page: any) => {
      // Extract properties based on your Notion database structure
      // You may need to adjust these property names based on your actual Notion database
      const properties = page.properties;
      
      const title = properties.Title?.title?.[0]?.plain_text || "No Title";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "";
      const type = properties.Type?.select?.name?.toLowerCase() || "guide";
      const link = properties.Link?.url || "/";
      const dateProperty = properties.Date?.date?.start;
      
      return {
        id: page.id,
        title,
        description,
        type: type as "event" | "guide" | "template" | "blog",
        link,
        date: dateProperty,
      };
    });

    return updates;
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    throw new Error("Failed to fetch updates from Notion");
  }
}
