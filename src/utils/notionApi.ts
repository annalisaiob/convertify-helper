
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
    const notion = new Client({ auth: apiKey });
    
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    const updates: NotionUpdate[] = response.results.map((page: any) => {
      const properties = page.properties;
      
      const title = properties.Title?.title?.[0]?.plain_text || "No Title";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "";
      const type = properties.Category?.select?.name?.toLowerCase() || "news";
      const link = properties.Link?.url || "/";
      const imageUrl = properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url;
      const dateProperty = properties.Date?.date?.start;
      
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

    return updates;
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    throw new Error("Failed to fetch updates from Notion");
  }
}
