from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Verify News & Updates page
    page.goto("http://localhost:5173/news-updates")
    page.screenshot(path="jules-scratch/verification/news-updates.png")

    # Verify Funders/Investors page
    page.goto("http://localhost:5173/funders-investors")
    page.screenshot(path="jules-scratch/verification/funders-investors.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
