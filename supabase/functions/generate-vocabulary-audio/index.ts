import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

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

const RequestSchema = z.object({
  word: z.string().min(1).max(50),
  theme: z.string().min(1).max(50).optional()
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authenticate user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace("Bearer ", "")
    );

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid authentication" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side premium verification
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_premium, trial_ends_at')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error("Profile fetch failed:", profileError.message);
      return new Response(
        JSON.stringify({ error: "Failed to verify subscription status" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const hasAccess = profile?.is_premium || 
      (profile?.trial_ends_at && new Date(profile.trial_ends_at) > new Date());

    if (!hasAccess) {
      return new Response(
        JSON.stringify({ error: "Premium subscription required" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const body = await req.json();
    const { word, theme } = RequestSchema.parse(body);
    
    if (!word) {
      throw new Error("Word is required");
    }

    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
    if (!ELEVENLABS_API_KEY) {
      throw new Error("API key not configured");
    }

    // Get voice ID for theme, default to Adam if theme not found
    const voiceId = theme ? THEME_VOICES[theme] || THEME_VOICES.home : THEME_VOICES.home;

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
    console.error("Error in generate-vocabulary-audio:", error instanceof Error ? error.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "An error occurred generating audio. Please try again." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
