// https://practice.expandtesting.com/inputs

import { test, expect } from '@playwright/test';


test.describe('Test Inputs', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.techlistic.com/p/selenium-practice-form.html');
    })

    test('General Page Layout', async ({ page }) => {

        test.step('Headings', async () => {
            expect(page.getByText('Techlistic')).toBeVisible;
            expect(page.locator('.post-title.entry-title')).toHaveText('Demo Automation Practice Form')
        })



        test.step('Text blocks', async () => {

        })


        test.step('Lists', async () => {

        })


        test.step('Footer', async () => {

        })

    });

    test.skip('Display and Clear', async ({ page }) => {


        // Negative Test - empty Display and Clear
        test.step('Negative Test - empty Display and Clear', async () => {
            await expect(page.locator('input#input-number')).toHaveClass('input-box');
        })

        // Negative Test - invalid inputs
        test.step('Negative Test - invalid inputs', async () => { })

        // Positive Test - valid inputs
        test.step('Positive Test - valid inputs', async () => { })

    });

})
