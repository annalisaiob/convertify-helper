
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

    console.log("Notion API key available:", !!notionApiKey);
    console.log("Default database ID available:", !!defaultDatabaseId);

    // If secrets aren't set, return a helpful error
    if (!notionApiKey) {
      console.error("NOTION_API_KEY secret is not set in Supabase");
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
      // Use default database ID if request has no body
      body = { databaseId: defaultDatabaseId };
    }

    // Extract database ID from request or use default
    const databaseId = body.databaseId || defaultDatabaseId;
    
    if (!databaseId) {
      console.error("No database ID provided and NOTION_DATABASE_ID secret is not set");
      return new Response(
        JSON.stringify({ 
          error: "Database ID is required but not provided", 
          updates: [] 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`Fetching from Notion database: ${databaseId}`);
    
    // Initialize Notion client - IMPORTANT: This is where the error was happening
    const notion = new Client({ auth: notionApiKey });
    
    // First let's verify the client is working by getting a simple endpoint
    try {
      console.log("Testing Notion API connection...");
      // First make a simple call to verify the client is working
      await notion.users.me();
      console.log("Notion API connection successful!");
    } catch (connectionError) {
      console.error("Failed to connect to Notion API:", connectionError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to connect to Notion API", 
          details: connectionError.message,
          updates: [] 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    try {
      // Query the database
      console.log("Querying Notion database...");
      
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
      
      // Log the full response for debugging
      console.log("Full Notion response:", JSON.stringify(response));
      
      // Process the results into our expected format
      const updates = response.results.map((page: any) => {
        const properties = page.properties;
        
        // Extract values with more cautious property access and logging
        const title = properties.Title?.title?.[0]?.plain_text || "No Title";
        const description = properties.Description?.rich_text?.[0]?.plain_text || "";
        const type = properties.Category?.select?.name?.toLowerCase() || "news";
        const link = properties.Link?.url || "/";
        const imageUrl = properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url;
        const dateProperty = properties.Date?.date?.start;
        
        console.log(`Processed item: ${title} (${type})`);
        
        return {
          id: page.id,
          title,
          description,
          type: type,
          link,
          imageUrl,
          date: dateProperty,
        };
      });

      // Return the processed updates
      return new Response(
        JSON.stringify({ updates }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    } catch (notionError: any) {
      console.error("Error querying Notion API:", notionError);
      console.error("Error message:", notionError.message);
      console.error("Error stack:", notionError.stack);
      
      // Create a user-friendly error message for Notion API errors
      let errorMessage = "Failed to fetch updates from Notion";
      if (notionError.code === 'unauthorized') {
        errorMessage = "Invalid Notion API key";
      } else if (notionError.code === 'object_not_found') {
        errorMessage = "Database not found. Please check your database ID";
      } else if (notionError.message) {
        errorMessage = notionError.message;
      }
      
      return new Response(
        JSON.stringify({ 
          error: errorMessage,
          details: notionError.stack || "No additional details available",
          updates: [] 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error: any) {
    console.error("Error in notion-proxy function:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    // Create a user-friendly error message
    let errorMessage = "Failed to fetch updates from Notion";
    if (error.message) {
      errorMessage = error.message;
    }
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error.stack || "No additional details available",
        updates: [] 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
