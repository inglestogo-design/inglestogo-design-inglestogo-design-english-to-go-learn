import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  console.log(`[PRONUNCIATION-ANALYSIS] ${step}`, details ? JSON.stringify(details) : '');
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Security Fix: Validate user authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      logStep('ERROR: No authorization header');
      return new Response(
        JSON.stringify({ error: 'Authentication required' }), 
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      logStep('ERROR: Invalid user token', { error: authError?.message });
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }), 
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    logStep('User authenticated', { userId: user.id.substring(0, 8) + '...' });

    // Server-side premium verification
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_premium, trial_ends_at')
      .eq('id', user.id)
      .single();

    if (profileError) {
      logStep('Profile fetch failed', { error: profileError.message });
      return new Response(
        JSON.stringify({ error: 'Failed to verify subscription status' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const hasAccess = profile?.is_premium || 
      (profile?.trial_ends_at && new Date(profile.trial_ends_at) > new Date());

    if (!hasAccess) {
      logStep('Premium access denied', { userId: user.id.substring(0, 8) + '...' });
      return new Response(
        JSON.stringify({ error: 'Premium subscription required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    logStep('Premium access verified');

    // Zod validation schema for input security
    const RequestSchema = z.object({
      spokenText: z.string().min(1, "Spoken text is required").max(500, "Spoken text must be less than 500 characters"),
      expectedWord: z.string().min(1, "Expected word is required").max(100, "Expected word must be less than 100 characters"),
      expectedPronunciation: z.string().max(200, "Expected pronunciation must be less than 200 characters").optional()
    });

    const body = await req.json();
    const validationResult = RequestSchema.safeParse(body);
    
    if (!validationResult.success) {
      logStep('Input validation failed', { errors: validationResult.error.errors });
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input',
          details: validationResult.error.errors[0].message
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { spokenText, expectedWord, expectedPronunciation } = validationResult.data;
    logStep('Processing pronunciation analysis', { expectedWord });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const prompt = `Você é um professor de inglês especializado em ajudar brasileiros a melhorar sua pronúncia.

Palavra esperada: ${expectedWord}
Pronúncia correta (notação brasileira): ${expectedPronunciation}
O que o usuário disse: ${spokenText}

Analise a tentativa de pronúncia e forneça feedback DETALHADO e PEDAGÓGICO em português brasileiro, seguindo EXATAMENTE este formato JSON:

{
  "accuracyPercentage": [número de 0 a 100],
  "isCorrect": [true se >= 80%, false se < 80%],
  "feedback": "[Mensagem curta e encorajadora: 'Excelente!' ou 'Quase lá!' ou 'Vamos tentar novamente']",
  "detailedAnalysis": "[Análise detalhada: identifique o que foi pronunciado corretamente e o que precisa melhorar. Seja específico sobre sons e sílabas]",
  "suggestions": "[Dicas práticas de como melhorar. Use comparações com palavras em português quando útil. Exemplo: 'O som do 'th' em inglês não existe em português - coloque a língua entre os dentes']",
  "correctSounds": ["lista", "de", "sons", "corretos"],
  "incorrectSounds": ["lista", "de", "sons", "incorretos"],
  "tips": ["dica 1 prática", "dica 2 prática", "dica 3 prática"]
}

IMPORTANTE:
- Compare o texto falado com a palavra esperada
- Seja encorajador mas honesto
- Identifique erros comuns de brasileiros (ex: pronunciar "r" como em português, confundir vogais)
- Dê dicas PRÁTICAS e ACIONÁVEIS
- Use emojis para deixar o feedback mais amigável 😊
- Se a pronúncia estiver muito diferente (< 50%), sugira começar mais devagar
- Se estiver quase certo (70-90%), elogie o progresso e dê ajustes finos
- Se estiver perfeito (>= 90%), celebre! 🎉

Responda APENAS com o JSON, sem texto adicional.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logStep('AI Gateway error', { status: response.status, error: errorText });
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your Lovable workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('No content in AI response');
    }

    logStep('AI response received');

    // Parse JSON response from AI
    let analysisResult;
    try {
      // Remove markdown code blocks if present
      const jsonText = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      analysisResult = JSON.parse(jsonText);
    } catch (parseError) {
      logStep('Failed to parse AI response', { content });
      throw new Error('Invalid JSON response from AI');
    }

    return new Response(
      JSON.stringify(analysisResult),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    logStep('Error in pronunciation-analysis', { error: error instanceof Error ? error.message : 'Unknown error' });
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        details: 'Check function logs for more information'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
