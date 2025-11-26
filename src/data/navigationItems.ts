import { Home, Mic, BookText, BookA, GraduationCap, TrendingUp, BookOpen, Hash, Radio, Zap, Bot, Lightbulb, Flag, BookMarked, Plane, FileText, LucideIcon } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Lista de navegação em ordem alfabética
export const navigationItems: NavigationItem[] = [
  { id: "alphabet", label: "Alfabeto / Alphabet", icon: BookA },
  { id: "auPairCourse", label: "Au Pair / Au Pair", icon: Plane },
  { id: "citizenship", label: "Cidadania / Citizenship", icon: Flag },
  { id: "virtualCoach", label: "Coach Virtual / Virtual Coach", icon: Bot },
  { id: "dictionary", label: "Dicionário / Dictionary", icon: BookMarked },
  { id: "dashboard", label: "Início / Home", icon: Home },
  { id: "lessons", label: "Lições / Lessons", icon: GraduationCap },
  { id: "numbers", label: "Números / Numbers", icon: Hash },
  { id: "pronunciation", label: "Pronúncia / Pronunciation", icon: Mic },
  { id: "progress", label: "Progresso / Progress", icon: TrendingUp },
  { id: "radio", label: "Rádio 24h / Radio 24/7", icon: Radio },
  { id: "survivalEnglish", label: "Survival English", icon: Lightbulb },
  { id: "leveling-test", label: "Teste de Nível / Level Test", icon: Zap },
  { id: "toeflCourse", label: "TOEFL 360° / TOEFL 360°", icon: FileText },
  { id: "verbs", label: "Verbos / Verbs", icon: BookOpen },
  { id: "vocabulary", label: "Vocabulário / Vocabulary", icon: BookText },
];
