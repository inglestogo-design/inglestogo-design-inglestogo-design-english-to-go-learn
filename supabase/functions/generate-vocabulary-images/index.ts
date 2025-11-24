import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { word, theme } = await req.json();

    if (!word || !theme) {
      throw new Error('Word and theme are required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Generate image with Lovable AI
    const prompt = `Create a clean modern cartoon illustration of "${word}" for an English learning app. 
Style: minimal cartoon aesthetic, vibrant colors (${getThemeColors(theme)}), clean lines, modern design, friendly and educational.
The illustration should be simple, recognizable, and suitable for language learners.
Background: transparent or solid colored matching the theme.
High quality, professional, vector-style cartoon illustration.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        modalities: ["image", "text"]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`AI API error: ${error}`);
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      throw new Error('No image generated');
    }

    return new Response(
      JSON.stringify({ imageUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});

function getThemeColors(theme: string): string {
  const colors: Record<string, string> = {
    home: 'blue and white',
    school: 'purple and light yellow',
    food: 'orange and warm tones',
    transportation: 'red and gray',
    body: 'pink and peach',
    colors: 'rainbow multicolor',
    nature: 'green and earth tones',
    clothes: 'teal and fashion colors',
    animals: 'amber and natural browns',
    jobs: 'slate and professional blues',
    family: 'warm yellow and cozy tones',
    emotions: 'vibrant expressive colors'
  };
  return colors[theme] || 'vibrant and friendly colors';
}
