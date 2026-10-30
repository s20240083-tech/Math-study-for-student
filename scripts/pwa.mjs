import { chromium } from "playwright-core";
const executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const base = process.env.BASE_URL || "http://127.0.0.1:4174";
const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1200, height: 900 } });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
await page.goto(`${base}/#/today`, { waitUntil: "networkidle" });
await page.waitForTimeout(1600);
const pwa = await page.evaluate(async () => {
  const reg = await navigator.serviceWorker.getRegistration();
  const keys = await caches.keys();
  const cache = await caches.open(keys[0]);
  const requests = await cache.keys();
  const manifest = document.querySelector('link[rel="manifest"]')?.getAttribute("href");
  return {
    registered: Boolean(reg),
    scope: reg?.scope,
    caches: keys,
    cached: requests.map((request) => new URL(request.url).pathname),
    manifest,
  };
});
console.log(JSON.stringify(pwa, null, 2));
await context.setOffline(true);
await page.reload({ waitUntil: "domcontentloaded" });
await page.waitForTimeout(900);
console.log("offline heading:", await page.locator(".home-heading h1").innerText());
console.log("offline font:", await page.evaluate(() => document.fonts.check('16px Fraunces')));
console.log("offline body font:", await page.evaluate(() => getComputedStyle(document.body).fontFamily));
await page.screenshot({ path: "shots/offline.png" });
console.log("ERRORS", errors.length);
errors.forEach((e) => console.log(e));
await browser.close();
