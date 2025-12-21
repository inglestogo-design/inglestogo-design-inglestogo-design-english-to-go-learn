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
  signUp: (email: string, password: string) => Promise<{ data: any; error: any }>;
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
        console.log('🚀 Starting session load...');
        
        // Wrap getSession in a Promise.race with timeout for mobile apps
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise<{ data: { session: null }, error: Error }>((_, reject) => 
          setTimeout(() => reject(new Error('Session timeout')), 5000)
        );
        
        let session: Session | null = null;
        let sessionError: any = null;
        
        try {
          const result = await Promise.race([sessionPromise, timeoutPromise]);
          session = result.data.session;
          sessionError = result.error;
        } catch (timeoutErr) {
          console.warn('⚠️ Session fetch timeout - continuing without session');
          session = null;
          sessionError = null;
        }
        
        if (sessionError) {
          console.error('❌ Error getting session:', sessionError);
          // Don't block the app - just continue without session
        }
        
        console.log('🚀 Initial session load:', session?.user?.id || 'no user');
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
        // Always ensure loading completes even on error
        setLoading(false);
        isInitialLoad = false;
      }
    };
    
    // Set a timeout to ensure loading always completes (increased for mobile)
    const timeoutId = setTimeout(() => {
      console.warn('⚠️ Session load timeout - forcing loading to false');
      setLoading(false);
      isInitialLoad = false;
    }, 8000);
    
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
    
    console.log('📝 Starting signup process for:', email);
    
    try {
      // Validate email format first
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { data: null, error: { message: "Invalid email format" } };
      }
      
      // Validate password requirements
      if (password.length < 8) {
        return { data: null, error: { message: "Password must be at least 8 characters" } };
      }
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            email: email.trim().toLowerCase()
          }
        }
      });
      
      console.log('📝 Signup response:', { userId: data?.user?.id, error: error?.message });
      
      if (error) {
        console.error("SignUp error:", error);
        return { data: null, error };
      }
      
      // Check if user was actually created (not just returned existing)
      if (!data?.user) {
        console.error("SignUp: No user returned");
        return { data: null, error: { message: "Unable to create account. Please try again." } };
      }
      
      // For auto-confirmed signups, create profile immediately
      if (data.user.email_confirmed_at || data.session) {
        console.log('✅ User confirmed, creating profile');
        try {
          const { error: profileError } = await supabase
            .from("profiles")
            .upsert({
              id: data.user.id,
              email: email.trim().toLowerCase(),
              onboarding_completed: false,
              is_premium: false,
              trial_ends_at: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
            }, { onConflict: 'id' });
          
          if (profileError) {
            console.error("Profile creation error:", profileError);
            // Don't fail signup if profile creation fails - it will be created by trigger
          } else {
            console.log('✅ Profile created successfully');
          }
        } catch (profileErr) {
          console.error("Profile creation catch error:", profileErr);
        }
      }
      
      return { data, error: null };
    } catch (err: any) {
      console.error("SignUp catch error:", err);
      return { data: null, error: { message: err?.message || "An unexpected error occurred. Please try again." } };
    }
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
