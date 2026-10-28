import { level1 } from "./zh/level1.js";
import { level2 } from "./zh/level2.js";
import { level3 } from "./zh/level3.js";
import { level4 } from "./zh/level4.js";
import { level5 } from "./zh/level5.js";
import { level6 } from "./zh/level6.js";
import { EXTRA_QUESTIONS } from "./zh/extraQuestions.js";

export const STRANDS = {
  Number: {
    label: "数与运算",
    short: "数与运算",
    color: "#D9633C",
    soft: "#F8E3D9",
    description: "数位、四则运算、分数、小数与数系。",
    icon: "number",
  },
  Geometry: {
    label: "图形与几何",
    short: "图形与测量",
    color: "#34725F",
    soft: "#DFECE6",
    description: "形状、空间、角、面积、图形变换与证明。",
    icon: "shape",
  },
  Measurement: {
    label: "测量",
    short: "测量",
    color: "#36718D",
    soft: "#DFEBF1",
    description: "单位、刻度、时间、长度、质量与体积。",
    icon: "ruler",
  },
  Data: {
    label: "数据与概率",
    short: "数据与概率",
    color: "#89623B",
    soft: "#F0E7D9",
    description: "统计图、平均数、抽样、随机与分布。",
    icon: "data",
  },
  Algebra: {
    label: "代数",
    short: "代数",
    color: "#855476",
    soft: "#EFE1EA",
    description: "规律、表达式、方程、函数与结构。",
    icon: "algebra",
  },
  Ratio: {
    label: "比与比例",
    short: "比与比例",
    color: "#A47925",
    soft: "#F3E8C6",
    description: "数量比较、比率、缩放与比例推理。",
    icon: "ratio",
  },
  Functions: {
    label: "函数",
    short: "函数",
    color: "#4C5F91",
    soft: "#E3E7F2",
    description: "关系、图象、变换与变化。",
    icon: "function",
  },
  Calculus: {
    label: "微积分",
    short: "微积分",
    color: "#A8493E",
    soft: "#F2DEDA",
    description: "极限、导数、积分与描述变化的数学。",
    icon: "calculus",
  },
  Advanced: {
    label: "进阶专题",
    short: "进阶专题",
    color: "#5B5853",
    soft: "#EAE7E1",
    description: "向量、矩阵、复数与更远的世界。",
    icon: "advanced",
  },
};

export const STAGES = [
  {
    id: "Primary",
    label: "小学",
    grades: "1–6 年级",
    description: "建立数感、空间感，以及思考与发现的乐趣。",
  },
  {
    id: "Middle",
    label: "初中",
    grades: "7–8 年级",
    description: "用负数与比例，搭起从算术到代数的桥梁。",
  },
  {
    id: "Secondary",
    label: "高中",
    grades: "9–12 年级",
    description: "函数、微积分，以及为未来学习打下的基础。",
  },
];

export const DIFFICULTIES = {
  easy: {
    label: "简单",
    range: "1–2 阶段",
    description: "从小学低年级的基础题开始。",
    color: "#2F7D63",
    soft: "#DDEEE5",
  },
  normal: {
    label: "普通",
    range: "3–4 阶段",
    description: "小学高年级到初中的核心题。",
    color: "#A47925",
    soft: "#F3E8C6",
  },
  hard: {
    label: "困难",
    range: "5–6 阶段",
    description: "高中与进阶数学的挑战题。",
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
