import { chromium } from "playwright-core";
import assert from "node:assert/strict";
import { LESSONS, QUESTIONS } from "../src/data/curriculum.js";
import { isAnswerCorrect } from "../src/lib/utils.js";

for (const question of QUESTIONS) {
  const correctValue = question.type === "choice" ? question.answer : question.answer;
  assert.ok(isAnswerCorrect(correctValue, question), `${question.id} rejects its own answer`);
}
console.log("✓ every checkpoint accepts its recorded answer");

const base = process.env.BASE_URL || "http://127.0.0.1:4174";
const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
await page.goto(`${base}/#/today`, { waitUntil: "networkidle" });
for (const lesson of LESSONS) {
  await page.evaluate((id) => { window.location.hash = `#/lesson/${id}`; }, lesson.id);
  await page.waitForFunction(
    (title) => document.querySelector(".lesson-header h1")?.textContent === title,
    lesson.title,
    { timeout: 5000 },
  );
}
console.log(`✓ all ${LESSONS.length} lesson routes render their content`);
assert.deepEqual(errors, []);
await browser.close();
