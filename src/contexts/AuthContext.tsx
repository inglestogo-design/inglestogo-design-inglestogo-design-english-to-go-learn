import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isPremium: boolean;
  onboardingCompleted: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
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
            const { data } = await supabase
              .from("profiles")
              .select("is_premium, premium_until, onboarding_completed")
              .eq("id", session.user.id)
              .single();
            
            if (data) {
              console.log('📊 Initial profile load:', { onboarding_completed: data.onboarding_completed });
              const isActive = data.is_premium && 
                (!data.premium_until || new Date(data.premium_until) > new Date());
              setIsPremium(isActive);
              setOnboardingCompleted(data.onboarding_completed || false);
            }
          } catch (error) {
            console.error('❌ Error loading profile:', error);
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
    }, 3000);
    
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
          const { data } = await supabase
            .from("profiles")
            .select("is_premium, premium_until, onboarding_completed")
            .eq("id", session.user.id)
            .single();
          
          if (data) {
            console.log('✅ Profile loaded:', { onboarding_completed: data.onboarding_completed });
            const isActive = data.is_premium && 
              (!data.premium_until || new Date(data.premium_until) > new Date());
            setIsPremium(isActive);
            setOnboardingCompleted(data.onboarding_completed || false);
          }
        } else if (!session?.user) {
          setIsPremium(false);
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
    <AuthContext.Provider value={{ user, session, loading, isPremium, onboardingCompleted, signIn, signUp, signOut }}>
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
