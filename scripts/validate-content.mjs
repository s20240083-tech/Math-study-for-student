import assert from "node:assert/strict";
import {
  CURRICULUM,
  DIFFICULTIES,
  LESSONS,
  QUESTIONS,
  STRANDS,
  TOTAL_LESSONS,
  TOTAL_QUESTIONS,
  getNextLesson,
  getPreviousLesson,
} from "../src/data/curriculum.js";

assert.equal(CURRICULUM.length, 6);
assert.equal(TOTAL_LESSONS, 54);
assert.equal(TOTAL_QUESTIONS, 120);
assert.equal(LESSONS.length, 54);
assert.equal(new Set(LESSONS.map((lesson) => lesson.id)).size, 54);
assert.equal(new Set(QUESTIONS.map((question) => question.id)).size, 120);

for (const level of CURRICULUM) {
  assert.equal(level.lessons.length, 9, `${level.title} lesson count`);
  for (const lesson of level.lessons) {
    assert.ok(lesson.title && lesson.summary && lesson.keyIdea);
    assert.ok(lesson.body.length >= 2, `${lesson.id} body`);
    assert.ok(lesson.objectives.length >= 2, `${lesson.id} objectives`);
    assert.ok(lesson.example?.prompt && lesson.example?.steps?.length >= 2 && lesson.example?.answer);
    assert.ok(STRANDS[lesson.strand], `${lesson.id} strand ${lesson.strand}`);
    assert.ok(lesson.questions.length >= 2 && lesson.questions.length <= 3, `${lesson.id} question count`);
    for (const question of lesson.questions) {
      assert.ok(question.prompt, `${question.id} prompt`);
      assert.ok(question.difficulty, `${question.id} difficulty`);
      assert.ok(question.hint, `${question.id} hint`);
      assert.ok(question.explanation, `${question.id} explanation`);
      if (question.type === "choice") {
        assert.ok(Array.isArray(question.options) && question.options.length === 4, `${question.id} options`);
        assert.equal(new Set(question.options).size, 4, `${question.id} unique options`);
        assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, `${question.id} answer index`);
      } else if (question.type === "input") {
        assert.ok(String(question.answer).trim().length > 0, `${question.id} answer`);
      } else {
        assert.fail(`${question.id} unknown type ${question.type}`);
      }
    }
  }
}

for (const level of CURRICULUM) {
  const levelQuestions = QUESTIONS.filter((question) => question.levelId === level.id);
  assert.equal(levelQuestions.length, 20, `${level.title} practice bank`);
}
for (const key of Object.keys(DIFFICULTIES)) {
  assert.equal(
    QUESTIONS.filter((question) => question.difficulty === key).length,
    40,
    `${key} difficulty pool`,
  );
}

for (const lesson of LESSONS) {
  if (lesson.order > 0) assert.ok(getPreviousLesson(lesson.id), `${lesson.id} previous`);
  if (lesson.order < LESSONS.length - 1) assert.ok(getNextLesson(lesson.id), `${lesson.id} next`);
}
assert.equal(getNextLesson("l1-data")?.levelId, "building-blocks");
assert.equal(getNextLesson("l6-vectors"), null);

console.log("✓ 6 levels, 20 questions each, 120 validated checkpoints");
console.log("✓ easy / normal / hard pools contain 40 questions each");
console.log("✓ sequential navigation works across level boundaries");
