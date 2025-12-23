import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  onboardingCompleted: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ data: any; error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isInitialLoad = true;
    
    const loadSession = async () => {
      try {
        console.log('🚀 Starting session load...');
        
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
        }
        
        console.log('🚀 Initial session load:', session?.user?.id || 'no user');
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          try {
            const { data, error: profileError } = await supabase
              .from("profiles")
              .select("onboarding_completed")
              .eq("id", session.user.id)
              .maybeSingle();
            
            if (profileError) {
              console.error('❌ Error loading profile:', profileError);
              setOnboardingCompleted(false);
            } else if (data) {
              console.log('📊 Initial profile load:', { onboarding_completed: data.onboarding_completed });
              setOnboardingCompleted(data.onboarding_completed || false);
            } else {
              setOnboardingCompleted(false);
            }
          } catch (error) {
            console.error('❌ Error loading profile:', error);
            setOnboardingCompleted(false);
          }
        }
        
        setLoading(false);
        isInitialLoad = false;
      } catch (error) {
        console.error('❌ Fatal error loading session:', error);
        setLoading(false);
        isInitialLoad = false;
      }
    };
    
    const timeoutId = setTimeout(() => {
      console.warn('⚠️ Session load timeout - forcing loading to false');
      setLoading(false);
      isInitialLoad = false;
    }, 8000);
    
    loadSession().finally(() => {
      clearTimeout(timeoutId);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔐 Auth state changed:', event, 'User:', session?.user?.id, 'isInitialLoad:', isInitialLoad);
        
        if (event === 'INITIAL_SESSION') {
          return;
        }
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user && event === 'SIGNED_IN') {
          console.log('🔄 Loading profile after SIGNED_IN event');
          try {
            const { data, error: profileError } = await supabase
              .from("profiles")
              .select("onboarding_completed")
              .eq("id", session.user.id)
              .maybeSingle();
            
            if (profileError) {
              console.error('❌ Error loading profile after sign in:', profileError);
            } else if (data) {
              console.log('✅ Profile loaded:', { onboarding_completed: data.onboarding_completed });
              setOnboardingCompleted(data.onboarding_completed || false);
            }
          } catch (error) {
            console.error('❌ Error in SIGNED_IN handler:', error);
          }
        } else if (!session?.user) {
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { data: null, error: { message: "Invalid email format" } };
      }
      
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
      
      if (!data?.user) {
        console.error("SignUp: No user returned");
        return { data: null, error: { message: "Unable to create account. Please try again." } };
      }
      
      if (data.user.email_confirmed_at || data.session) {
        console.log('✅ User confirmed, creating profile');
        try {
          const { error: profileError } = await supabase
            .from("profiles")
            .upsert({
              id: data.user.id,
              email: email.trim().toLowerCase(),
              onboarding_completed: false
            }, { onConflict: 'id' });
          
          if (profileError) {
            console.error("Profile creation error:", profileError);
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
    <AuthContext.Provider value={{ user, session, loading, onboardingCompleted, signIn, signUp, signOut }}>
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
