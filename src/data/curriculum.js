import { level1 } from "./zh/level1.js";
import { level2 } from "./zh/level2.js";
import { level3 } from "./zh/level3.js";
import { level4 } from "./zh/level4.js";
import { level5 } from "./zh/level5.js";
import { level6 } from "./zh/level6.js";
import { EXTRA_QUESTIONS } from "./zh/extraQuestions.js";

export const STRANDS = {
  Number: {
    label: "數與運算",
    short: "數與運算",
    color: "#D9633C",
    soft: "#F8E3D9",
    description: "數位、四則運算、分數、小數與數系。",
    icon: "number",
  },
  Geometry: {
    label: "圖形與幾何",
    short: "圖形與測量",
    color: "#34725F",
    soft: "#DFECE6",
    description: "形狀、空間、角、面積、圖形變換與證明。",
    icon: "shape",
  },
  Measurement: {
    label: "測量",
    short: "測量",
    color: "#36718D",
    soft: "#DFEBF1",
    description: "單位、刻度、時間、長度、質量與體積。",
    icon: "ruler",
  },
  Data: {
    label: "數據與概率",
    short: "數據與概率",
    color: "#89623B",
    soft: "#F0E7D9",
    description: "統計圖、平均數、抽樣、隨機與分佈。",
    icon: "data",
  },
  Algebra: {
    label: "代數",
    short: "代數",
    color: "#855476",
    soft: "#EFE1EA",
    description: "規律、表達式、方程、函數與結構。",
    icon: "algebra",
  },
  Ratio: {
    label: "比與比例",
    short: "比與比例",
    color: "#A47925",
    soft: "#F3E8C6",
    description: "數量比較、比率、縮放與比例推理。",
    icon: "ratio",
  },
  Functions: {
    label: "函數",
    short: "函數",
    color: "#4C5F91",
    soft: "#E3E7F2",
    description: "關係、圖象、變換與變化。",
    icon: "function",
  },
  Calculus: {
    label: "微積分",
    short: "微積分",
    color: "#A8493E",
    soft: "#F2DEDA",
    description: "極限、導數、積分與描述變化的數學。",
    icon: "calculus",
  },
  Advanced: {
    label: "進階專題",
    short: "進階專題",
    color: "#5B5853",
    soft: "#EAE7E1",
    description: "向量、矩陣、複數與更遠的世界。",
    icon: "advanced",
  },
};

export const STAGES = [
  {
    id: "Primary",
    label: "小學",
    grades: "1–6 年級",
    description: "建立數感、空間感，以及思考與發現的樂趣。",
  },
  {
    id: "Middle",
    label: "初中",
    grades: "7–8 年級",
    description: "用負數與比例，搭起從算術到代數的橋樑。",
  },
  {
    id: "Secondary",
    label: "高中",
    grades: "9–12 年級",
    description: "函數、微積分，以及為未來學習打下的基礎。",
  },
];

export const DIFFICULTIES = {
  easy: {
    label: "簡單",
    range: "1–2 階段",
    description: "從小學低年級的基礎題開始。",
    color: "#2F7D63",
    soft: "#DDEEE5",
  },
  normal: {
    label: "普通",
    range: "3–4 階段",
    description: "小學高年級到初中的核心題。",
    color: "#A47925",
    soft: "#F3E8C6",
  },
  hard: {
    label: "困難",
    range: "5–6 階段",
    description: "高中與進階數學的挑戰題。",
    color: "#A8493E",
    soft: "#F2DEDA",
  },
};

export const LEVELS = [level1, level2, level3, level4, level5, level6];

function getDifficultyForLevel(levelIndex) {
  if (levelIndex <= 1) return "easy";
  if (levelIndex <= 3) return "normal";
  return "hard";
}

const levelOffsets = [];
let lessonTotal = 0;
for (const level of LEVELS) {
  levelOffsets.push(lessonTotal);
  lessonTotal += level.lessons.length;
}

const enrichedLevels = LEVELS.map((level, levelIndex) => ({
  ...level,
  lessonCount: level.lessons.length,
  lessons: level.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    levelId: level.id,
    levelIndex,
    levelTitle: level.title,
    stage: level.stage,
    grades: level.grades,
    accent: level.accent,
    soft: level.soft,
    lessonIndex,
    order: levelOffsets[levelIndex] + lessonIndex,
    strandInfo: STRANDS[lesson.strand] || STRANDS.Number,
    strandLabel: (STRANDS[lesson.strand] || STRANDS.Number).label,
    difficulty: getDifficultyForLevel(levelIndex),
    difficultyLabel: DIFFICULTIES[getDifficultyForLevel(levelIndex)].label,
    questions: [
      ...lesson.questions,
      ...(EXTRA_QUESTIONS[lesson.id] || []),
    ].map((question) => ({
      ...question,
      difficulty: getDifficultyForLevel(levelIndex),
      difficultyLabel: DIFFICULTIES[getDifficultyForLevel(levelIndex)].label,
    })),
  })),
}));

export const CURRICULUM = enrichedLevels;

export const LESSONS = enrichedLevels.flatMap((level) => level.lessons);

export const QUESTIONS = LESSONS.flatMap((lesson) =>
  lesson.questions.map((question) => ({
    ...question,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    levelId: lesson.levelId,
    levelTitle: lesson.levelTitle,
    strand: lesson.strand,
    strandInfo: lesson.strandInfo,
    strandLabel: lesson.strandLabel,
    difficulty: lesson.difficulty,
    difficultyLabel: lesson.difficultyLabel,
  })),
);

export const LESSON_MAP = new Map(LESSONS.map((lesson) => [lesson.id, lesson]));
export const LEVEL_MAP = new Map(CURRICULUM.map((level) => [level.id, level]));
export const QUESTION_MAP = new Map(QUESTIONS.map((question) => [question.id, question]));

export const TOTAL_LESSONS = LESSONS.length;
export const TOTAL_QUESTIONS = QUESTIONS.length;
export const TOTAL_MINUTES = LESSONS.reduce((sum, lesson) => sum + lesson.minutes, 0);

export const LESSONS_BY_STRAND = Object.keys(STRANDS).reduce((acc, strand) => {
  acc[strand] = LESSONS.filter((lesson) => lesson.strand === strand);
  return acc;
}, {});

export function getLessonById(id) {
  return LESSON_MAP.get(id) || null;
}

export function getLevelByLessonId(id) {
  const lesson = LESSON_MAP.get(id);
  return lesson ? LEVEL_MAP.get(lesson.levelId) : null;
}

export function getNextLesson(id) {
  const lesson = LESSON_MAP.get(id);
  if (!lesson) return LESSONS[0];
  return LESSONS[lesson.order + 1] || null;
}

export function getPreviousLesson(id) {
  const lesson = LESSON_MAP.get(id);
  if (!lesson || lesson.order === 0) return null;
  return LESSONS[lesson.order - 1] || null;
}

export function getLessonQuestions(lessonId) {
  return QUESTIONS.filter((question) => question.lessonId === lessonId);
}

export function getFirstLesson() {
  return LESSONS[0];
}

export function getLessonsForLevel(levelId) {
  return LESSONS.filter((lesson) => lesson.levelId === levelId);
}

export function getStageLevels(stage) {
  return CURRICULUM.filter((level) => level.stage === stage);
}

export function searchCurriculum(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const tokens = normalized.split(/\s+/).filter(Boolean);
  const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = tokens.map(
    (token) => new RegExp(`(^|[^a-z0-9])${escape(token)}`, "i"),
  );

  return LESSONS.filter((lesson) => {
    const haystack = [
      lesson.title,
      lesson.summary,
      lesson.strand,
      lesson.strandLabel,
      lesson.levelTitle,
      lesson.grades,
      ...lesson.objectives,
    ].join(" ");
    return patterns.every((pattern) => pattern.test(haystack));
  }).slice(0, 12);
}
