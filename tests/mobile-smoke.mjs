import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const base = process.env.BASE_URL || "http://127.0.0.1:3000";
const routes = ["/", "/about", "/work", "/work/revenue-assurance", "/leadership", "/speaking", "/contact"];
const widths = [320, 360, 390, 430, 768, 1024];
const browser = await chromium.launch({ headless: true });
const failures = [];
await mkdir("mobile-screenshots", { recursive: true });

try {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: width <= 430 ? 812 : 1024 }, deviceScaleFactor: 1, isMobile: width <= 430, hasTouch: width <= 430 });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 30000 });
      assert(response && response.status() === 200, width+"px "+route+": HTTP "+(response?.status()||"no response"));
      await page.locator("main").waitFor({ state: "visible" });
      await page.evaluate(() => document.fonts.ready);
      const check = await page.evaluate(() => {
        const viewport = window.innerWidth;
        const widest = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        const headings = Array.from(document.querySelectorAll("main h1, main h2"));
        const clipped = headings.map(h => {
          const r = h.getBoundingClientRect();
          return { text: h.textContent?.trim().slice(0,32), left:r.left, right:r.right };
        }).filter(h => h.left < -4 || h.right > viewport + 4);
        return {viewport,widest,clipped};
      });
      if (check.widest > width + 3) failures.push(width+"px "+route+" document overflow "+check.widest+"px");
      if (check.clipped.length) failures.push(width+"px "+route+" heading overflow "+JSON.stringify(check.clipped));
      if (errors.length) failures.push(width+"px "+route+" runtime errors: "+errors.join("; "));

      if (width === 390 && ["/", "/work", "/contact"].includes(route)) {
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y=0; y<height; y+=600) {
          await page.evaluate(pos => window.scrollTo(0,pos),y);
          await page.waitForTimeout(45);
        }
        await page.evaluate(() => window.scrollTo(0,0));
        await page.waitForTimeout(220);
        await page.screenshot({path:"mobile-screenshots/"+(route==="/" ? "home":route.slice(1))+"-390.png",fullPage:true,animations:"disabled"});
      }
      console.log(width+"px "+route+" -> content width "+check.widest);
    }
    if (width <= 430) {
      await page.goto(base,{waitUntil:"domcontentloaded"});
      await page.getByRole("button",{name:"Open navigation menu"}).click();
      assert.equal(await page.getByRole("button",{name:"Close navigation menu"}).getAttribute("aria-expanded"),"true");
      assert.equal(await page.evaluate(() => getComputedStyle(document.body).overflow),"hidden");
      const mobile = page.getByRole("navigation",{name:"Mobile navigation"});
      await mobile.getByRole("link",{name:/Selected work/}).click();
      await page.waitForURL(/\/work$/);
      assert.notEqual(await page.evaluate(() => getComputedStyle(document.body).overflow),"hidden");
      await page.goto(base,{waitUntil:"domcontentloaded"});
      await page.locator(".ds-stage").first().click();
      assert.equal(await page.locator(".ds-stage").first().getAttribute("aria-pressed"),"true");
    }
    await page.close();
  }
  const motionPage = await browser.newPage({viewport:{width:390,height:812},reducedMotion:"reduce",isMobile:true,hasTouch:true});
  await motionPage.goto(base,{waitUntil:"domcontentloaded"});
  assert.equal(await motionPage.locator(".reading-progress").evaluate(el=>getComputedStyle(el).display),"none");
  await motionPage.close();
} finally {
  await browser.close();
}
if (failures.length) { failures.forEach(e=>console.error("FAIL: "+e)); process.exit(1); }
console.log("Mobile/responsive audit PASSED.");
