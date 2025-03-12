
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Client } from "https://esm.sh/@notionhq/client@2.2.16";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get Notion API key from environment variable (Supabase secret)
    const notionApiKey = Deno.env.get('NOTION_API_KEY');
    const defaultDatabaseId = Deno.env.get('NOTION_DATABASE_ID');

    // Add detailed logging about the API key
    console.log("Notion API key:", notionApiKey ? "Present (starts with: " + notionApiKey.substring(0, 4) + "...)" : "Missing");
    console.log("Database ID:", defaultDatabaseId ? defaultDatabaseId : "Missing");

    if (!notionApiKey) {
      console.error("Missing NOTION_API_KEY in environment variables");
      return new Response(
        JSON.stringify({ 
          error: "Server configuration error: NOTION_API_KEY not set",
          updates: [] 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Get request body
    let body;
    try {
      body = await req.json();
    } catch (e) {
      body = { databaseId: defaultDatabaseId };
    }

    const databaseId = body.databaseId || defaultDatabaseId;
    
    if (!databaseId) {
      console.error("No database ID provided");
      return new Response(
        JSON.stringify({ 
          error: "Database ID is required", 
          updates: [] 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log("Initializing Notion client...");
    const notion = new Client({ 
      auth: notionApiKey,
    });

    // Test connection with a simple API call
    try {
      console.log("Testing Notion API connection...");
      await notion.users.me();
      console.log("✅ Notion API connection test successful");
    } catch (error) {
      console.error("❌ Failed to connect to Notion API:", error);
      return new Response(
        JSON.stringify({ 
          error: "Failed to connect to Notion API: " + error.message,
          updates: [] 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    try {
      console.log(`Querying Notion database: ${databaseId}`);
      const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
          {
            property: "Date",
            direction: "descending",
          },
        ],
      });

      console.log(`Received ${response.results.length} results from Notion`);
      
      const updates = response.results.map((page: any) => {
        const properties = page.properties;
        
        const title = properties.Title?.title?.[0]?.plain_text || "No Title";
        const description = properties.Description?.rich_text?.[0]?.plain_text || "";
        const type = properties.Category?.select?.name?.toLowerCase() || "news";
        const link = properties.Link?.url || "/";
        const imageUrl = properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url;
        const dateProperty = properties.Date?.date?.start;
        
        console.log(`Processing item: ${title}`);
        
        return {
          id: page.id,
          title,
          description,
          type,
          link,
          imageUrl,
          date: dateProperty,
        };
      });

      return new Response(
        JSON.stringify({ updates }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    } catch (error) {
      console.error("Error querying Notion database:", error);
      return new Response(
        JSON.stringify({ 
          error: "Failed to query Notion database: " + error.message,
          updates: [] 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error: " + error.message,
        updates: [] 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
