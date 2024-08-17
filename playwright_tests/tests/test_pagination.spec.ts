import { test, expect } from '@playwright/test';


test.describe('Test Inputs', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://pagination.js.org/');
    })

    test('General Page Layout', async ({ page }) => {

    });

    test('Pagination Functionality', async ({ page }) => {

        test.step('Normal pagination', () => {


        })

        test.step('Show "go" pagination', () => {


        })

        test.step('Auto hide pagination', () => {


        })

    });

})