import { chromium } from "playwright-core";

const base = process.env.BASE_URL || "http://127.0.0.1:4174";
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto(`${base}/#/home`, { waitUntil: "networkidle" });
await page.waitForTimeout(900);
console.log("zh h1:", (await page.locator("h1").first().innerText()).replace(/\n/g, " "));
console.log("author:", await page.getByText("3D 廖嘉兒").first().isVisible());
console.log("lang:", await page.evaluate(() => document.documentElement.lang));
await page.screenshot({ path: "docs/site-zh.png" });

await page.getByRole("button", { name: "English" }).click();
await page.waitForTimeout(600);
console.log("en h1:", (await page.locator("h1").first().innerText()).replace(/\n/g, " "));
console.log("en lang:", await page.evaluate(() => document.documentElement.lang));
await page.screenshot({ path: "docs/site-en.png" });

await page.getByRole("button", { name: /Open the app/ }).first().click();
await page.waitForURL(/\/#\/today/);
await page.waitForTimeout(600);
console.log("app:", await page.locator("h1").first().innerText());
console.log("app lang:", await page.evaluate(() => document.documentElement.lang));
await page.locator(".sidebar-brand").click();
await page.waitForURL(/\/#\/home/);
await page.waitForTimeout(500);
console.log("returned:", (await page.locator("h1").first().innerText()).replace(/\n/g, " "));

const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto(`${base}/#/home`, { waitUntil: "networkidle" });
await mobile.waitForTimeout(600);
const overflow = await mobile.evaluate(
  () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
);
console.log("mobile overflow:", overflow);
await mobile.screenshot({ path: "docs/site-mobile.png" });

console.log("ERRORS", errors.length);
errors.forEach((error) => console.log(error));
await browser.close();
