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
    let cancelled = false;

    const loadSession = async () => {
      setLoading(true);

      try {
        console.log("🚀 Starting session load...");
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("❌ Error getting session:", error);
        }

        const nextSession = data.session ?? null;
        console.log("🚀 Initial session load:", nextSession?.user?.id || "no user");

        if (cancelled) return;

        setSession(nextSession);
        setUser(nextSession?.user ?? null);

        if (nextSession?.user) {
          try {
            const { data: profile, error: profileError } = await supabase
              .from("profiles")
              .select("onboarding_completed")
              .eq("id", nextSession.user.id)
              .maybeSingle();

            if (profileError) {
              console.error("❌ Error loading profile:", profileError);
              setOnboardingCompleted(false);
            } else {
              setOnboardingCompleted(Boolean(profile?.onboarding_completed));
            }
          } catch (profileErr) {
            console.error("❌ Error loading profile:", profileErr);
            setOnboardingCompleted(false);
          }
        } else {
          setOnboardingCompleted(false);
        }
      } catch (err) {
        console.error("❌ Fatal error loading session:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, nextSession) => {
      console.log("🔐 Auth state changed:", event, "User:", nextSession?.user?.id);

      if (cancelled) return;

      setSession(nextSession);
      setUser(nextSession?.user ?? null);

      if (!nextSession?.user) {
        setOnboardingCompleted(false);
        return;
      }

      // Keep profile state up to date (especially after sign-in)
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "INITIAL_SESSION") {
        try {
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("onboarding_completed")
            .eq("id", nextSession.user.id)
            .maybeSingle();

          if (profileError) {
            console.error("❌ Error loading profile after auth change:", profileError);
          } else {
            setOnboardingCompleted(Boolean(profile?.onboarding_completed));
          }
        } catch (profileErr) {
          console.error("❌ Error in auth change profile load:", profileErr);
        }
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
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
