import { chromium } from "playwright-core";
const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--no-sandbox"] });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: "block" });
const page = await context.newPage();
const issues = [];
page.on("console", (m) => { if (m.type() === "error") issues.push(`console: ${m.text()}`); });
page.on("pageerror", (e) => issues.push(`pageerror: ${e.message}`));
await page.goto("http://127.0.0.1:4180/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
console.log("url", page.url());
console.log("title", await page.title());
console.log("h1", await page.locator("h1").first().innerText());
console.log("lang", await page.evaluate(() => document.documentElement.lang));
console.log("author", await page.getByText("3D 廖嘉兒").first().isVisible());
console.log("stats", await page.locator(".site-stat strong").allInnerTexts());
await page.screenshot({ path: "/tmp/site-zh.png", fullPage: false });
await page.screenshot({ path: "/tmp/site-zh-full.png", fullPage: true });
// Toggle English
await page.getByRole("button", { name: "English" }).click();
await page.waitForTimeout(700);
console.log("en h1", await page.locator("h1").first().innerText());
console.log("en lang", await page.evaluate(() => document.documentElement.lang));
await page.screenshot({ path: "/tmp/site-en.png", fullPage: false });
await page.screenshot({ path: "/tmp/site-en-full.png", fullPage: true });
// Open app
await page.getByRole("button", { name: /Open the app/ }).first().click();
await page.waitForURL(/\/#\/today/);
await page.waitForTimeout(800);
console.log("app h1", await page.locator("h1").first().innerText());
console.log("app url", page.url());
console.log("app lang", await page.evaluate(() => document.documentElement.lang));
await page.screenshot({ path: "/tmp/site-app.png" });
// Return via brand
await page.locator(".sidebar-brand").click();
await page.waitForURL(/\/#\/home/);
console.log("back home", await page.locator("h1").first().innerText());
// Mobile
const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto("http://127.0.0.1:4180/#/home", { waitUntil: "networkidle" });
await mobile.waitForTimeout(700);
console.log("mobile overflow", await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth));
await mobile.screenshot({ path: "/tmp/site-mobile.png", fullPage: false });
await mobile.screenshot({ path: "/tmp/site-mobile-full.png", fullPage: true });
console.log("issues", issues);
await browser.close();
