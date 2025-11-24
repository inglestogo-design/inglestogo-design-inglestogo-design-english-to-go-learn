-- Add onboarding quiz fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS onboarding_completed boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS age_range text,
ADD COLUMN IF NOT EXISTS interests text[],
ADD COLUMN IF NOT EXISTS english_level text,
ADD COLUMN IF NOT EXISTS motivation text,
ADD COLUMN IF NOT EXISTS personal_preference text,
ADD COLUMN IF NOT EXISTS topics_interest text[],
ADD COLUMN IF NOT EXISTS main_difficulties text[];

-- Add index for faster queries on onboarding_completed
CREATE INDEX IF NOT EXISTS idx_profiles_onboarding_completed 
ON public.profiles(onboarding_completed);

-- Add comments for documentation
COMMENT ON COLUMN public.profiles.onboarding_completed IS 'Indica se o usuário completou o quiz inicial obrigatório';
COMMENT ON COLUMN public.profiles.age_range IS 'Faixa etária do usuário (ex: 18-25, 26-35, etc)';
COMMENT ON COLUMN public.profiles.interests IS 'Array de interesses do usuário';
COMMENT ON COLUMN public.profiles.english_level IS 'Nível de inglês autodeclarado (Iniciante, Básico, Intermediário, Avançado)';
COMMENT ON COLUMN public.profiles.motivation IS 'Motivação principal para aprender inglês (viagem, trabalho, lazer, estudos, crescimento pessoal)';
COMMENT ON COLUMN public.profiles.personal_preference IS 'Preferência pessoal (praia ou fazenda)';
COMMENT ON COLUMN public.profiles.topics_interest IS 'Array de tópicos que deseja aprender';
COMMENT ON COLUMN public.profiles.main_difficulties IS 'Array de principais dificuldades (pronúncia, vocabulário, escrita, falar, entender)';