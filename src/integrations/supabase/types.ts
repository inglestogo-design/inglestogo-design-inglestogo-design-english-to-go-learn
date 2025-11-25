export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          age_range: string | null
          created_at: string | null
          email: string | null
          english_level: string | null
          id: string
          interests: string[] | null
          is_premium: boolean | null
          language_preference: string | null
          main_difficulties: string[] | null
          motivation: string | null
          notification_settings: Json | null
          onboarding_completed: boolean | null
          personal_preference: string | null
          premium_until: string | null
          stripe_customer_id: string | null
          topics_interest: string[] | null
          updated_at: string | null
        }
        Insert: {
          age_range?: string | null
          created_at?: string | null
          email?: string | null
          english_level?: string | null
          id: string
          interests?: string[] | null
          is_premium?: boolean | null
          language_preference?: string | null
          main_difficulties?: string[] | null
          motivation?: string | null
          notification_settings?: Json | null
          onboarding_completed?: boolean | null
          personal_preference?: string | null
          premium_until?: string | null
          stripe_customer_id?: string | null
          topics_interest?: string[] | null
          updated_at?: string | null
        }
        Update: {
          age_range?: string | null
          created_at?: string | null
          email?: string | null
          english_level?: string | null
          id?: string
          interests?: string[] | null
          is_premium?: boolean | null
          language_preference?: string | null
          main_difficulties?: string[] | null
          motivation?: string | null
          notification_settings?: Json | null
          onboarding_completed?: boolean | null
          personal_preference?: string | null
          premium_until?: string | null
          stripe_customer_id?: string | null
          topics_interest?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          price_id: string
          status: string
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          price_id: string
          status: string
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          price_id?: string
          status?: string
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity: {
        Row: {
          activity_date: string
          created_at: string | null
          id: string
          lessons_completed: number | null
          minutes_studied: number | null
          pronunciation_count: number | null
          updated_at: string | null
          user_id: string
          vocabulary_count: number | null
        }
        Insert: {
          activity_date?: string
          created_at?: string | null
          id?: string
          lessons_completed?: number | null
          minutes_studied?: number | null
          pronunciation_count?: number | null
          updated_at?: string | null
          user_id: string
          vocabulary_count?: number | null
        }
        Update: {
          activity_date?: string
          created_at?: string | null
          id?: string
          lessons_completed?: number | null
          minutes_studied?: number | null
          pronunciation_count?: number | null
          updated_at?: string | null
          user_id?: string
          vocabulary_count?: number | null
        }
        Relationships: []
      }
      user_stats: {
        Row: {
          achievements: Json | null
          best_streak: number | null
          created_at: string | null
          current_streak: number | null
          fluency_skill: number | null
          grammar_skill: number | null
          id: string
          last_activity_date: string | null
          pronunciation_skill: number | null
          total_words_learned: number | null
          updated_at: string | null
          user_id: string
          vocabulary_skill: number | null
        }
        Insert: {
          achievements?: Json | null
          best_streak?: number | null
          created_at?: string | null
          current_streak?: number | null
          fluency_skill?: number | null
          grammar_skill?: number | null
          id?: string
          last_activity_date?: string | null
          pronunciation_skill?: number | null
          total_words_learned?: number | null
          updated_at?: string | null
          user_id: string
          vocabulary_skill?: number | null
        }
        Update: {
          achievements?: Json | null
          best_streak?: number | null
          created_at?: string | null
          current_streak?: number | null
          fluency_skill?: number | null
          grammar_skill?: number | null
          id?: string
          last_activity_date?: string | null
          pronunciation_skill?: number | null
          total_words_learned?: number | null
          updated_at?: string | null
          user_id?: string
          vocabulary_skill?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
