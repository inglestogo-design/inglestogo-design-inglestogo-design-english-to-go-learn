-- Add language preference and notification settings to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS language_preference text DEFAULT 'pt-BR',
ADD COLUMN IF NOT EXISTS notification_settings jsonb DEFAULT '{"email": true, "push": true, "dailyReminder": true}'::jsonb;