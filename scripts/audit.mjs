import { chromium } from "playwright-core";

const executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath, headless: true });
const errors = [];

async function open(path, viewport, name) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${name}] console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[${name}] pageerror: ${err.message}`));
  await page.goto(`http://127.0.0.1:4174/#${path}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const dims = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    bodyW: document.body.scrollWidth,
  }));
  console.log(name, viewport, dims);
  await page.screenshot({ path: `shots/${name}.png`, fullPage: false });
  return { context, page };
}

const pages = [
  ["/today", { width: 1440, height: 1100 }, "desktop-home"],
  ["/learn", { width: 1440, height: 1100 }, "desktop-learn"],
  ["/lesson/l1-counting", { width: 1440, height: 1100 }, "desktop-lesson"],
  ["/practice", { width: 1440, height: 1100 }, "desktop-practice"],
  ["/progress", { width: 1440, height: 1100 }, "desktop-progress"],
  ["/today", { width: 390, height: 844 }, "mobile-home"],
  ["/learn", { width: 390, height: 844 }, "mobile-learn"],
  ["/lesson/l1-counting", { width: 390, height: 844 }, "mobile-lesson"],
  ["/practice", { width: 390, height: 844 }, "mobile-practice"],
  ["/progress", { width: 390, height: 844 }, "mobile-progress"],
];

for (const [path, viewport, name] of pages) {
  const { context } = await open(path, viewport, name);
  await context.close();
}

console.log("ERRORS", errors.length);
for (const error of errors) console.log(error);
await browser.close();
