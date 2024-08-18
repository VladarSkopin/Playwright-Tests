import { test, expect } from '@playwright/test';


test.describe('Test Pagination', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://pagination.js.org/');
    })

    test('General Page Layout', async ({ page }) => {
        // ADD CSS STYLES CHECKS - COLORS AND FONTS !!!

        await page.waitForSelector('div.header > div.title', { state: 'visible' });
        await expect(page.locator('div.header > div.title')).toContainText('Pagination.js');

        await page.waitForFunction(() => document.body.innerText.includes('A jQuery plugin to provide simple yet fully customisable pagination.'));
        await expect(page.locator('text="A jQuery plugin to provide simple yet fully customisable pagination."')).toBeVisible();

        await page.waitForSelector('a.build-button-source', { state: 'visible' });
        await expect(page.locator('a.build-button-source')).toContainText('Pagination.js');

        await page.waitForSelector('a.build-button-source', { state: 'visible' });
        await expect(page.locator('a.build-button-source')).toHaveAttribute('href', 'dist/2.6.0/pagination.js')

        await page.waitForSelector('a.build-button-zipped', { state: 'visible' });
        await expect(page.locator('a.build-button-zipped')).toContainText('Pagination.min.js')

        await page.waitForSelector('div.demo-section-title', { state: 'visible' });
        await expect(page.locator('div.demo-section-title').nth(0)).toHaveText('Normal')

        await expect(page.locator('div.demo-section-title').nth(1)).toHaveText('Only page numbers')

        await expect(page.locator('div.demo-section-title').nth(2)).toHaveText('Show page size changer')

        await expect(page.locator('div.demo-section-title').nth(3)).toHaveText('Show "go" input & button')

        await expect(page.locator('div.demo-section-title').nth(4)).toHaveText('Auto hide previous & next button')

        await expect(page.locator('div.demo-section-title').nth(5)).toHaveText('Mini')

        await expect(page.locator('div.demo-section-title').nth(6)).toHaveText('Show all pages')

        await expect(page.locator('div.demo-section-title').nth(7)).toHaveText('Asynchronous or JSONP')

        await expect(page.locator('div.demo-section-title').nth(8)).toHaveText('Asynchronous & Dynamic total number')

        await expect(page.locator('div.demo-section-title').nth(9)).toHaveText('Specify default')

        await expect(page.locator('div.demo-section-title').nth(10)).toHaveText('Format result data')

        await expect(page.locator('div.demo-section-title').nth(11)).toHaveText('Another format result data')

        await expect(page.locator('div.demo-section-title').nth(12)).toHaveText('Format navigator')

        await expect(page.locator('div.demo-section-title').nth(13)).toHaveText('Format "go" input')

        await expect(page.locator('div.demo-section-title').nth(14)).toHaveText('Methods & Events')
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