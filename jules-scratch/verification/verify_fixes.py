
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Verify Vision & Impact page
        await page.goto("http://localhost:5174/vision-impact")
        await page.wait_for_selector('div[style*="height: 400px"]') # Wait for map to load
        await page.screenshot(path="jules-scratch/verification/vision-impact.png")

        # Verify Funders & Investors page - simplified for debugging
        await page.goto("http://localhost:5174/funders-investors")
        await page.screenshot(path="jules-scratch/verification/funders-investors-debug.png")

        await browser.close()

asyncio.run(main())
