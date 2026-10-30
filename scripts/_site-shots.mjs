import { chromium } from "playwright-core";
const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--no-sandbox"] });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: "block" });
await context.addInitScript(() => localStorage.setItem("summa-site-lang", "zh"));
const page = await context.newPage();
await page.goto("http://127.0.0.1:4180/#/home", { waitUntil: "networkidle" });
await page.waitForTimeout(700);
const height = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < height; y += 700) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(120);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
console.log("images loaded", await page.evaluate(() => [...document.images].map(i => ({src: i.getAttribute("src"), ok: i.complete && i.naturalWidth > 0}))));
await page.screenshot({ path: "docs/site-zh-full.png", fullPage: true });
await page.screenshot({ path: "docs/site-zh.png" });
const zhH1 = await page.locator("h1").first().innerText();
console.log("zh", zhH1.replace(/\n/g," "), "lang", await page.evaluate(()=>document.documentElement.lang));
// English
await page.getByRole("button", { name: "English" }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: "docs/site-en.png" });
const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto("http://127.0.0.1:4180/#/home", { waitUntil: "networkidle" });
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: "docs/site-mobile.png", fullPage: true });
console.log("mobile overflow", await mobile.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth));
await browser.close();
