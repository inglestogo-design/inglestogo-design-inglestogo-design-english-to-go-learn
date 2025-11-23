import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Voice mapping for themes (alternating male/female)
const THEME_VOICES: Record<string, string> = {
  home: "pNInz6obpgDQGcFmaJgB", // Adam (male)
  school: "21m00Tcm4TlvDq8ikWAM", // Rachel (female)
  food: "AZnzlk1XvdvUeBnXmlld", // Domi (male)
  transportation: "EXAVITQu4vr4xnSDxMaL", // Bella (female)
  body: "ErXwobaYiN019PkySvjV", // Antoni (male)
  colors: "MF3mGyEYCl7XYWbV9V6O", // Elli (female)
  nature: "TxGEqnHWrfWFTfGW9XjX", // Josh (male)
  clothes: "jsCqWAovK2LkecY7zXl4", // Freya (female)
  animals: "onwK4e9ZLuTAKqWW03F9", // Daniel (male)
  jobs: "jBpfuIE2acCO8z3wKNLl", // Gigi (female)
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { word, theme } = await req.json();
    
    if (!word) {
      throw new Error("Word is required");
    }

    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
    if (!ELEVENLABS_API_KEY) {
      console.error("ELEVENLABS_API_KEY is not configured");
      throw new Error("ELEVENLABS_API_KEY is not configured");
    }
    
    console.log(`API Key length: ${ELEVENLABS_API_KEY.length}, starts with: ${ELEVENLABS_API_KEY.substring(0, 10)}...`);

    // Get voice ID for theme, default to Adam if theme not found
    const voiceId = THEME_VOICES[theme] || THEME_VOICES.home;

    console.log(`Generating audio for word: "${word}", theme: "${theme}", voice: ${voiceId}`);

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: word,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ElevenLabs API error:", response.status, errorText);
      throw new Error(`ElevenLabs API error: ${response.status}`);
    }

    const audioBuffer = await response.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error("Error in generate-vocabulary-audio:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
