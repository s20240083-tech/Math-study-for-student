import {
  LESSONS,
  LESSONS_BY_STRAND,
  LEVELS,
  STRANDS,
  TOTAL_LESSONS,
} from "../data/curriculum.js";
import { dayKey, offsetDayKey } from "./utils.js";

const STORAGE_KEY = "summa-progress-v1";
export const DAILY_GOAL = 50;

export function createEmptyProgress() {
  return {
    version: 1,
    startedAt: new Date().toISOString(),
    completedLessons: [],
    completedAt: {},
    questionStats: {},
    lessonStats: {},
    days: {},
    activity: [],
    streak: 0,
    lastActive: null,
    xp: 0,
    lastLessonId: null,
  };
}

export function loadProgress() {
  if (typeof window === "undefined") return createEmptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyProgress();
    const parsed = JSON.parse(raw);
    return {
      ...createEmptyProgress(),
      ...parsed,
      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons
        : [],
      completedAt: parsed.completedAt || {},
      questionStats: parsed.questionStats || {},
      lessonStats: parsed.lessonStats || {},
      days: parsed.days || {},
      activity: Array.isArray(parsed.activity) ? parsed.activity : [],
      xp: Number(parsed.xp) || 0,
      streak: Number(parsed.streak) || 0,
    };
  } catch {
    return createEmptyProgress();
  }
}

export function saveProgress(progress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Learning still works when storage is unavailable.
  }
}

function applyStudyEvent(progress, event) {
  const now = new Date();
  const today = dayKey(now);
  const yesterday = offsetDayKey(-1, now);
  const day = progress.days[today] || { xp: 0, questions: 0, lessons: 0 };

  let streak = progress.streak;
  if (progress.lastActive !== today) {
    streak = progress.lastActive === yesterday ? progress.streak + 1 : 1;
  }

  const nextDay = {
    xp: day.xp + (event.xp || 0),
    questions: day.questions + (event.questions || 0),
    lessons: day.lessons + (event.lessons || 0),
  };

  const entry = {
    ts: now.getTime(),
    type: event.type,
    xp: event.xp || 0,
    lessonId: event.lessonId || null,
    questionId: event.questionId || null,
    correct: typeof event.correct === "boolean" ? event.correct : null,
  };

  return {
    ...progress,
    days: { ...progress.days, [today]: nextDay },
    activity: [entry, ...progress.activity].slice(0, 160),
    streak,
    lastActive: today,
    xp: progress.xp + (event.xp || 0),
    lastLessonId: event.lessonId || progress.lastLessonId,
  };
}

export function recordAnswer(progress, question, correct) {
  const previousQuestion = progress.questionStats[question.id] || {
    attempts: 0,
    correct: 0,
  };
  const previousLesson = progress.lessonStats[question.lessonId] || {
    attempts: 0,
    correct: 0,
  };

  const next = {
    ...progress,
    questionStats: {
      ...progress.questionStats,
      [question.id]: {
        attempts: previousQuestion.attempts + 1,
        correct: previousQuestion.correct + (correct ? 1 : 0),
      },
    },
    lessonStats: {
      ...progress.lessonStats,
      [question.lessonId]: {
        attempts: previousLesson.attempts + 1,
        correct: previousLesson.correct + (correct ? 1 : 0),
      },
    },
  };

  return applyStudyEvent(next, {
    type: "answer",
    xp: correct ? 10 : 2,
    questions: 1,
    lessonId: question.lessonId,
    questionId: question.id,
    correct,
  });
}

export function completeLesson(progress, lessonId) {
  if (progress.completedLessons.includes(lessonId)) return progress;

  const next = {
    ...progress,
    completedLessons: [...progress.completedLessons, lessonId],
    completedAt: {
      ...progress.completedAt,
      [lessonId]: new Date().toISOString(),
    },
  };

  return applyStudyEvent(next, {
    type: "complete",
    xp: 15,
    lessons: 1,
    lessonId,
    correct: true,
  });
}

export function getToday(progress) {
  return progress.days[dayKey()] || { xp: 0, questions: 0, lessons: 0 };
}

export function getActiveStreak(progress) {
  if (!progress.lastActive) return 0;
  const today = dayKey();
  const yesterday = offsetDayKey(-1);
  if (progress.lastActive === today || progress.lastActive === yesterday) {
    return progress.streak;
  }
  return 0;
}

export function getDailyPercent(progress) {
  const today = getToday(progress);
  return Math.min(100, Math.round((today.xp / DAILY_GOAL) * 100));
}

export function getLessonMastery(progress, lessonId) {
  const stats = progress.lessonStats[lessonId];
  if (!stats || stats.attempts === 0) return 0;
  return Math.round((stats.correct / stats.attempts) * 100);
}

export function getStrandMastery(progress) {
  return Object.keys(STRANDS).map((strand) => {
    const lessons = LESSONS_BY_STRAND[strand] || [];
    let attempts = 0;
    let correct = 0;
    lessons.forEach((lesson) => {
      const stats = progress.lessonStats[lesson.id];
      if (stats) {
        attempts += stats.attempts;
        correct += stats.correct;
      }
    });
    return {
      strand,
      ...STRANDS[strand],
      lessons: lessons.length,
      attempts,
      mastery: attempts ? Math.round((correct / attempts) * 100) : 0,
    };
  });
}

export function getLevelProgress(progress, level) {
  const completed = level.lessons.filter((lesson) =>
    progress.completedLessons.includes(lesson.id),
  ).length;
  const attempted = level.lessons.filter(
    (lesson) => (progress.lessonStats[lesson.id]?.attempts || 0) > 0,
  ).length;
  return {
    completed,
    total: level.lessons.length,
    attempted,
    percent: Math.round((completed / level.lessons.length) * 100),
  };
}

export function getOverallStats(progress) {
  const attemptedQuestions = Object.values(progress.questionStats);
  const attempts = attemptedQuestions.reduce((sum, item) => sum + item.attempts, 0);
  const correct = attemptedQuestions.reduce((sum, item) => sum + item.correct, 0);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
  const levelsStarted = LEVELS.filter((level) =>
    level.lessons.some((lesson) => (progress.lessonStats[lesson.id]?.attempts || 0) > 0),
  ).length;
  const levelsComplete = LEVELS.filter((level) =>
    level.lessons.every((lesson) => progress.completedLessons.includes(lesson.id)),
  ).length;

  return {
    lessonsComplete: progress.completedLessons.length,
    totalLessons: TOTAL_LESSONS,
    completion: Math.round((progress.completedLessons.length / TOTAL_LESSONS) * 100),
    attempts,
    correct,
    accuracy,
    xp: progress.xp,
    levelsStarted,
    levelsComplete,
  };
}

export function getContinueLesson(progress) {
  const next = LESSONS.find(
    (lesson) => !progress.completedLessons.includes(lesson.id),
  );
  return next || LESSONS[LESSONS.length - 1];
}

export function getWeakestLessons(progress, limit = 3) {
  return LESSONS.filter((lesson) => {
    const stats = progress.lessonStats[lesson.id];
    return stats && stats.attempts >= 2;
  })
    .map((lesson) => ({
      lesson,
      mastery: getLessonMastery(progress, lesson.id),
      attempts: progress.lessonStats[lesson.id].attempts,
    }))
    .sort((a, b) => a.mastery - b.mastery || b.attempts - a.attempts)
    .slice(0, limit);
}

export function getRecentCompletions(progress, limit = 4) {
  return [...progress.completedLessons]
    .reverse()
    .map((id) => LESSONS.find((lesson) => lesson.id === id))
    .filter(Boolean)
    .slice(0, limit);
}

export function getWeek(progress) {
  const formatter = new Intl.DateTimeFormat("zh-Hant", { weekday: "short" });
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = dayKey(date);
    const day = progress.days[key] || { xp: 0, questions: 0, lessons: 0 };
    return {
      key,
      label: formatter.format(date).slice(0, 2),
      fullLabel: new Intl.DateTimeFormat("zh-Hant", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }).format(date),
      ...day,
      isToday: index === 6,
    };
  });
}

export function getHeatmap(progress, length = 84) {
  const weeks = [];
  let currentWeek = [];
  for (let i = length - 1; i >= 0; i -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = dayKey(date);
    const day = progress.days[key] || { xp: 0, questions: 0, lessons: 0 };
    let level = 0;
    if (day.xp > 0) level = 1;
    if (day.xp >= 20) level = 2;
    if (day.xp >= 50) level = 3;
    if (day.xp >= 90) level = 4;
    currentWeek.push({ key, date, ...day, level });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length) weeks.push(currentWeek);
  return weeks;
}

export function getBadges(progress) {
  const stats = getOverallStats(progress);
  const startedLevels = new Set(
    progress.completedLessons
      .map((id) => LESSONS.find((lesson) => lesson.id === id)?.levelId)
      .filter(Boolean),
  );
  const activeStreak = getActiveStreak(progress);

  return [
    {
      id: "first-step",
      title: "邁出第一步",
      description: "完成第一節課程。",
      icon: "spark",
      unlocked: stats.lessonsComplete >= 1,
      progress: Math.min(1, stats.lessonsComplete),
      target: 1,
      unit: "課時",
    },
    {
      id: "streak-3",
      title: "連續三天",
      description: "連續學習三天。",
      icon: "flame",
      unlocked: activeStreak >= 3,
      progress: Math.min(3, activeStreak),
      target: 3,
      unit: "天",
    },
    {
      id: "ten-lessons",
      title: "漸入佳境",
      description: "完成十節課程。",
      icon: "layers",
      unlocked: stats.lessonsComplete >= 10,
      progress: Math.min(10, stats.lessonsComplete),
      target: 10,
      unit: "課時",
    },
    {
      id: "accurate",
      title: "思路清晰",
      description: "答題 20 道，正確率達到 80%。",
      icon: "target",
      unlocked: stats.attempts >= 20 && stats.accuracy >= 80,
      progress: Math.min(20, stats.attempts),
      target: 20,
      unit: "道題",
    },
    {
      id: "all-levels",
      title: "廣闊視野",
      description: "在每個階段都完成一節課。",
      icon: "compass",
      unlocked: startedLevels.size >= LEVELS.length,
      progress: startedLevels.size,
      target: LEVELS.length,
      unit: "個階段",
    },
    {
      id: "whole-path",
      title: "完整旅程",
      description: "完成全部 54 節課程。",
      icon: "trophy",
      unlocked: stats.lessonsComplete >= TOTAL_LESSONS,
      progress: stats.lessonsComplete,
      target: TOTAL_LESSONS,
      unit: "課時",
    },
  ];
}
