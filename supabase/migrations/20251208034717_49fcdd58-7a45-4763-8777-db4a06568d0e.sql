-- Fix 1: Add DELETE policy for profiles table (GDPR compliance)
CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = id);

-- Fix 3: Add trial_ends_at column for server-side trial validation
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ;

-- Update existing users to have trial_ends_at based on created_at + 3 days
UPDATE public.profiles 
SET trial_ends_at = created_at + INTERVAL '3 days'
WHERE trial_ends_at IS NULL AND created_at IS NOT NULL;

-- Update the handle_new_user function to set trial_ends_at on new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, is_premium, trial_ends_at)
  VALUES (
    NEW.id,
    NEW.email,
    FALSE,
    NOW() + INTERVAL '3 days'
  );
  RETURN NEW;
END;
$$;