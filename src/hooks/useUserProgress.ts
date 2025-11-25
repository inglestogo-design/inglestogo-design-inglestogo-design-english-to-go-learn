import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface UserActivity {
  activity_date: string;
  pronunciation_count: number;
  vocabulary_count: number;
  lessons_completed: number;
  minutes_studied: number;
}

interface UserStats {
  current_streak: number;
  best_streak: number;
  total_words_learned: number;
  pronunciation_skill: number;
  vocabulary_skill: number;
  grammar_skill: number;
  fluency_skill: number;
  achievements: any;
  last_activity_date: string | null;
}

export const useUserProgress = () => {
  const { user } = useAuth();
  const [weeklyActivity, setWeeklyActivity] = useState<UserActivity[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProgress();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchUserProgress = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      // Fetch last 7 days of activity
      const today = new Date();
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 6);

      const { data: activityData, error: activityError } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', user.id)
        .gte('activity_date', sevenDaysAgo.toISOString().split('T')[0])
        .order('activity_date', { ascending: true });

      if (activityError) {
        console.error('Error fetching activity:', activityError);
      }

      // Fetch user stats - use maybeSingle() to handle new users without stats
      const { data: statsData, error: statsError } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (statsError) {
        console.error('Error fetching stats:', statsError);
      }

      setWeeklyActivity(activityData || []);
      setStats(statsData || null);
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const trackActivity = async (activityType: 'pronunciation' | 'vocabulary' | 'lesson', count: number = 1) => {
    if (!user) return;

    try {
      const today = new Date().toISOString().split('T')[0];

      // Upsert today's activity
      const { data: existingActivity } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', user.id)
        .eq('activity_date', today)
        .maybeSingle();

      const updates: any = {
        user_id: user.id,
        activity_date: today,
      };

      if (activityType === 'pronunciation') {
        updates.pronunciation_count = (existingActivity?.pronunciation_count || 0) + count;
      } else if (activityType === 'vocabulary') {
        updates.vocabulary_count = (existingActivity?.vocabulary_count || 0) + count;
      } else if (activityType === 'lesson') {
        updates.lessons_completed = (existingActivity?.lessons_completed || 0) + count;
      }

      await supabase
        .from('user_activity')
        .upsert(updates, { onConflict: 'user_id,activity_date' });

      // Update stats
      await updateStats(activityType, count);
      
      // Refresh data
      await fetchUserProgress();
    } catch (error) {
      console.error('Error tracking activity:', error);
    }
  };

  const updateStats = async (activityType: string, count: number) => {
    if (!user) return;

    try {
      const { data: currentStats } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      const updates: any = {
        user_id: user.id,
        last_activity_date: new Date().toISOString().split('T')[0],
      };

      // Update skill levels based on activity
      if (activityType === 'pronunciation') {
        updates.pronunciation_skill = Math.min(100, (currentStats?.pronunciation_skill || 0) + count);
      } else if (activityType === 'vocabulary') {
        updates.vocabulary_skill = Math.min(100, (currentStats?.vocabulary_skill || 0) + count);
        updates.total_words_learned = (currentStats?.total_words_learned || 0) + count;
      } else if (activityType === 'lesson') {
        updates.grammar_skill = Math.min(100, (currentStats?.grammar_skill || 0) + count);
        updates.fluency_skill = Math.min(100, (currentStats?.fluency_skill || 0) + count);
      }

      // Calculate streak
      const lastDate = currentStats?.last_activity_date;
      if (lastDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastDate === yesterdayStr) {
          updates.current_streak = (currentStats?.current_streak || 0) + 1;
          updates.best_streak = Math.max(
            updates.current_streak,
            currentStats?.best_streak || 0
          );
        } else if (lastDate !== new Date().toISOString().split('T')[0]) {
          updates.current_streak = 1;
        }
      } else {
        updates.current_streak = 1;
      }

      await supabase
        .from('user_stats')
        .upsert(updates, { onConflict: 'user_id' });
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  };

  return {
    weeklyActivity,
    stats,
    loading,
    trackActivity,
    refreshProgress: fetchUserProgress,
  };
};
