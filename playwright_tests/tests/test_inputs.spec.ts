import { test, expect } from '@playwright/test';


test.describe('Test Inputs', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('p/selenium-practice-form.html');
    })

    test('General Page Layout', async ({ page }) => {
        expect(page.getByText('Techlistic')).toBeVisible;
        expect(page.locator('.post-title.entry-title')).toHaveText('Demo Automation Practice Form')
        expect(page.locator('span[style="font-size:large"]')).toHaveText('AUTOMATION PRACTICE FORM')
        expect(page.locator('h2[style="margin:0;padding:0"]').nth(1)).toHaveText('How to Automate \'Practice Form\' with Selenium WebDriver')
        expect(page.getByText('Steps to Automate:')).toBeVisible()
        expect(page.locator('text="Example Code:"')).toBeVisible()
        expect(page.getByText('Popular Tutorials')).toBeVisible()
        expect(page.getByText('You may also like to read')).toBeVisible()
        expect(page.getByText('You may also like Selenium Practice Exercises with example code:')).toBeVisible()
    });

})
