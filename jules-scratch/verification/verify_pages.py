from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Vision & Impact page
    page.goto("http://localhost:5173/vision-impact")
    page.screenshot(path="jules-scratch/verification/vision-impact.png")

    # For Schools page
    page.goto("http://localhost:5173/schools")
    page.screenshot(path="jules-scratch/verification/for-schools.png")

    # For Business page
    page.goto("http://localhost:5173/for-business")
    page.screenshot(path="jules-scratch/verification/for-business.png")

    # Funders & Investors page
    page.goto("http://localhost:5173/funders")
    page.screenshot(path="jules-scratch/verification/funders-investors.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
