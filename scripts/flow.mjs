import { chromium } from "playwright-core";

const executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
const page = await context.newPage();
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
});
page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
const base = "http://127.0.0.1:4174";

async function state() {
  return page.evaluate(() => JSON.parse(localStorage.getItem("summa-progress-v1") || "{}"));
}

// 1. Home -> lesson -> answer -> complete
await page.goto(`${base}/#/today`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: /继续学习/ }).click();
await page.waitForURL(/lesson\/l1-counting/);
console.log("lesson title:", await page.locator(".lesson-header h1").innerText());
await page.getByRole("button", { name: /5 个十/ }).click();
await page.getByRole("button", { name: "检查答案" }).first().click();
await page.getByText("完全正确。").waitFor();
console.log("feedback shown");
await page.screenshot({ path: "shots/flow-checkpoint.png" });
let s = await state();
console.log("answer stats:", JSON.stringify(s.questionStats["l1-counting-q1"]));
await page.getByRole("button", { name: "标记完成" }).click();
await page.getByRole("button", { name: "已完成" }).waitFor();
s = await state();
console.log("completed:", JSON.stringify(s.completedLessons), "xp:", s.xp, "streak:", s.streak);
await page.screenshot({ path: "shots/flow-completed.png" });

// 2. Practice session (20 unique questions)
await page.goto(`${base}/#/practice`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: /开始练习/ }).click();
await page.getByText(/第 1 题/).waitFor();
const questionDots = await page.locator(".session-dot").count();
console.log("session length:", questionDots);
for (let i = 0; i < 20; i += 1) {
  const input = page.locator(".session-answer");
  if (await input.count()) {
    await input.fill("0");
  } else {
    await page.locator(".session-options .option").first().click();
  }
  await page.getByRole("button", { name: "检查答案" }).click();
  await page.locator(".session-feedback").waitFor();
  const next = page.getByRole("button", { name: /下一题|查看结果/ });
  await next.click();
}
await page.getByText("练习完成").waitFor();
console.log("results heading:", await page.locator(".results-copy h1").innerText());
await page.screenshot({ path: "shots/flow-results.png" });
s = await state();
console.log("total attempts:", Object.values(s.questionStats).reduce((n, q) => n + q.attempts, 0));

// 3. Search
await page.keyboard.press("Meta+k");
await page.getByPlaceholder("搜索知识点、技能或年级…").fill("二次方程");
await page.waitForTimeout(250);
await page.getByRole("button", { name: /二次方程/ }).first().click();
await page.waitForURL(/lesson\/l5-quadratics/);
console.log("search landed:", await page.locator(".lesson-header h1").innerText());
await page.screenshot({ path: "shots/flow-search-result.png" });

// 4. Learn stage navigation
await page.goto(`${base}/#/learn`, { waitUntil: "networkidle" });
await page.getByRole("tab", { name: /高中/ }).click();
await page.waitForURL(/learn\/algebra-connections/);
await page.waitForTimeout(300);
console.log("secondary level:", await page.locator(".level-panel-title h2").innerText());
await page.getByRole("button", { name: /进阶数学/ }).click();
await page.waitForURL(/learn\/advanced-mathematics/);
await page.waitForTimeout(300);
console.log("advanced level:", await page.locator(".level-panel-title h2").innerText());
await page.screenshot({ path: "shots/flow-learn-secondary.png" });

// 5. Mobile flow
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const mp = await mobile.newPage();
mp.on("pageerror", (err) => errors.push(`mobile pageerror: ${err.message}`));
await mp.goto(`${base}/#/practice/lesson/l1-counting`, { waitUntil: "networkidle" });
await mp.waitForTimeout(300);
const dims = await mp.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
}));
console.log("mobile session dims:", dims);
console.log("mobile prompt:", await mp.locator(".session-prompt").innerText());
await mp.screenshot({ path: "shots/flow-mobile-session.png" });
await mp.getByRole("button", { name: "进度", exact: true }).click();
await mp.waitForURL(/progress/);
console.log("mobile nav progress ok");
await mp.screenshot({ path: "shots/flow-mobile-progress.png" });

console.log("ERRORS", errors.length);
errors.forEach((error) => console.log(error));
await browser.close();
