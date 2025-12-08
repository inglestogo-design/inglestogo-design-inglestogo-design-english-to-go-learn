import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isPremium: boolean;
  isInTrialPeriod: boolean;
  trialDaysRemaining: number;
  onboardingCompleted: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to check if user is in 3-day trial period
const checkTrialStatus = (createdAt: string | null): { isInTrial: boolean; daysRemaining: number } => {
  if (!createdAt) return { isInTrial: false, daysRemaining: 0 };
  
  const accountCreated = new Date(createdAt);
  const now = new Date();
  const diffTime = now.getTime() - accountCreated.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  
  const TRIAL_DAYS = 3;
  const isInTrial = diffDays < TRIAL_DAYS;
  const daysRemaining = Math.max(0, Math.ceil(TRIAL_DAYS - diffDays));
  
  return { isInTrial, daysRemaining };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [isInTrialPeriod, setIsInTrialPeriod] = useState(false);
  const [trialDaysRemaining, setTrialDaysRemaining] = useState(0);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isInitialLoad = true;
    
    // Check for existing session FIRST with timeout fallback
    const loadSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('❌ Error getting session:', error);
          setLoading(false);
          return;
        }
        
        console.log('🚀 Initial session load:', session?.user?.id);
        setSession(session);
        setUser(session?.user ?? null);
        
        // Load onboarding status on initial load
        if (session?.user) {
          try {
            const { data, error: profileError } = await supabase
              .from("profiles")
              .select("is_premium, premium_until, onboarding_completed")
              .eq("id", session.user.id)
              .maybeSingle();
            
            if (profileError) {
              console.error('❌ Error loading profile:', profileError);
              // Check trial based on user created_at
              const trialStatus = checkTrialStatus(session.user.created_at);
              setIsInTrialPeriod(trialStatus.isInTrial);
              setTrialDaysRemaining(trialStatus.daysRemaining);
              setIsPremium(trialStatus.isInTrial); // Trial = Premium access
              setOnboardingCompleted(false);
            } else if (data) {
              console.log('📊 Initial profile load:', { onboarding_completed: data.onboarding_completed });
              const hasPaidSubscription = data.is_premium && 
                (!data.premium_until || new Date(data.premium_until) > new Date());
              
              // Check trial status
              const trialStatus = checkTrialStatus(session.user.created_at);
              setIsInTrialPeriod(trialStatus.isInTrial);
              setTrialDaysRemaining(trialStatus.daysRemaining);
              
              // User has premium if: paid subscription OR in trial period
              setIsPremium(hasPaidSubscription || trialStatus.isInTrial);
              setOnboardingCompleted(data.onboarding_completed || false);
            } else {
              // No profile found - check trial
              const trialStatus = checkTrialStatus(session.user.created_at);
              setIsInTrialPeriod(trialStatus.isInTrial);
              setTrialDaysRemaining(trialStatus.daysRemaining);
              setIsPremium(trialStatus.isInTrial);
              setOnboardingCompleted(false);
            }
          } catch (error) {
            console.error('❌ Error loading profile:', error);
            setIsPremium(false);
            setOnboardingCompleted(false);
          }
        }
        
        setLoading(false);
        isInitialLoad = false;
      } catch (error) {
        console.error('❌ Fatal error loading session:', error);
        setLoading(false);
      }
    };
    
    // Set a timeout to ensure loading always completes
    const timeoutId = setTimeout(() => {
      console.warn('⚠️ Session load timeout - forcing loading to false');
      setLoading(false);
      isInitialLoad = false;
    }, 2000);
    
    loadSession().finally(() => {
      clearTimeout(timeoutId);
    });

    // Set up auth state listener - but ignore INITIAL_SESSION to prevent double loading
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔐 Auth state changed:', event, 'User:', session?.user?.id, 'isInitialLoad:', isInitialLoad);
        
        // Ignore INITIAL_SESSION event since we already handled it in getSession()
        if (event === 'INITIAL_SESSION') {
          return;
        }
        
        setSession(session);
        setUser(session?.user ?? null);
        
        // Only reload profile data when user actually signs in (not on initial load)
        if (session?.user && event === 'SIGNED_IN') {
          console.log('🔄 Loading profile after SIGNED_IN event');
          try {
            const { data, error: profileError } = await supabase
              .from("profiles")
              .select("is_premium, premium_until, onboarding_completed")
              .eq("id", session.user.id)
              .maybeSingle();
            
            if (profileError) {
              console.error('❌ Error loading profile after sign in:', profileError);
              const trialStatus = checkTrialStatus(session.user.created_at);
              setIsInTrialPeriod(trialStatus.isInTrial);
              setTrialDaysRemaining(trialStatus.daysRemaining);
              setIsPremium(trialStatus.isInTrial);
            } else if (data) {
              console.log('✅ Profile loaded:', { onboarding_completed: data.onboarding_completed });
              const hasPaidSubscription = data.is_premium && 
                (!data.premium_until || new Date(data.premium_until) > new Date());
              
              const trialStatus = checkTrialStatus(session.user.created_at);
              setIsInTrialPeriod(trialStatus.isInTrial);
              setTrialDaysRemaining(trialStatus.daysRemaining);
              setIsPremium(hasPaidSubscription || trialStatus.isInTrial);
              setOnboardingCompleted(data.onboarding_completed || false);
            }
          } catch (error) {
            console.error('❌ Error in SIGNED_IN handler:', error);
          }
          } else if (!session?.user) {
          setIsPremium(false);
          setIsInTrialPeriod(false);
          setTrialDaysRemaining(0);
          setOnboardingCompleted(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isPremium, isInTrialPeriod, trialDaysRemaining, onboardingCompleted, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
