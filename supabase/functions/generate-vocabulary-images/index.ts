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
    const { words } = await req.json();

    if (!words || !Array.isArray(words)) {
      throw new Error('Words array is required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log(`Generating ${words.length} images...`);
    const results = [];

    // Generate images in batches
    for (const wordData of words) {
      const { word, theme } = wordData;
      
      try {
        const prompt = `Create a clean modern cartoon illustration of "${word}".
Style: minimal flat design, vibrant colors, simple shapes, friendly educational aesthetic matching children's learning materials.
The illustration should be iconic, immediately recognizable, with clean outlines and solid colors.
Background: solid color or simple gradient matching ${getThemeColors(theme)}.
Must look similar to simple icon-style educational illustrations - clean, professional, kid-friendly.`;

        const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-image-preview",
            messages: [{ role: "user", content: prompt }],
            modalities: ["image", "text"]
          })
        });

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Rate limit exceeded - too many requests');
          }
          if (response.status === 402) {
            throw new Error('Payment required - add credits to Lovable AI');
          }
          throw new Error(`AI API error: ${response.status}`);
        }

        const data = await response.json();
        const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

        if (!imageUrl) {
          throw new Error('No image generated');
        }

        results.push({ word, success: true, imageUrl });
        console.log(`✓ Generated: ${word}`);
        
        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`✗ Failed: ${word} - ${errorMessage}`);
        results.push({ word, success: false, error: errorMessage });
      }
    }

    return new Response(
      JSON.stringify({ results }),
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
