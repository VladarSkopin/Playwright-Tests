import { test, expect } from '@playwright/test';
import { paginationLocators } from './locators';
import { cssButtonCheck, cssSectionTitleCheck } from './utils';
import { sectionTitles } from './data_ui';


test.describe('Test Pagination', { tag: '@ui' }, async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://pagination.js.org/');
    });

    test('General Page Layout', async ({ page }) => {

        // Page Header

        await page.waitForSelector(paginationLocators.pageTitle, { state: 'visible' });
        const pageTitle = await page.locator(paginationLocators.pageTitle);
        await expect(pageTitle).toContainText('Pagination.js');
        await expect(pageTitle).toHaveCSS('font-size', '60px');
        await expect(pageTitle).toHaveCSS('text-align', 'center');
        await expect(pageTitle).toHaveCSS('color', 'rgb(255, 255, 255)');

        await page.waitForFunction(() => document.body.innerText.includes('A jQuery plugin to provide simple yet fully customisable pagination.'));
        const titleDescription = await page.locator('text="A jQuery plugin to provide simple yet fully customisable pagination."');
        await expect(titleDescription).toBeVisible();
        await expect(titleDescription).toHaveCSS('font-size', '20px');
        await expect(titleDescription).toHaveCSS('box-sizing', 'border-box');
        await expect(titleDescription).toHaveCSS('text-align', 'center');
        await expect(titleDescription).toHaveCSS('color', 'rgb(255, 255, 255)');

        await page.waitForSelector(paginationLocators.btnPagination, { state: 'visible' });
        const btnPagination = await page.locator(paginationLocators.btnPagination);
        await expect(btnPagination).toContainText('Pagination.js');
        await expect(btnPagination).toHaveAttribute('href', 'dist/2.6.0/pagination.js');
        await cssButtonCheck(btnPagination);

        await page.waitForSelector(paginationLocators.btnPaginationMin, { state: 'visible' });
        const btnPaginationMin = await page.locator(paginationLocators.btnPaginationMin);
        await expect(btnPaginationMin).toContainText('Pagination.min.js');
        await expect(btnPaginationMin).toHaveAttribute('href', 'dist/2.6.0/pagination.min.js');
        await cssButtonCheck(btnPaginationMin);


        // Page Titles

        // Wait for all the section titles to load before doing assertions
        await page.waitForSelector(paginationLocators.sectionTitleArray, { state: 'visible' });

        
        const sectionTitlesArray = await page.locator(paginationLocators.sectionTitleArray);
        const numberOfWebTitles = await sectionTitlesArray.count();

        // Check CSS styles for all section titles
        for (let i: number = 0; i < numberOfWebTitles; i ++) {
            await cssSectionTitleCheck(sectionTitlesArray.nth(i));
        }

        // Check that all expected section titles are present on the web page
        for (const title of sectionTitles) {
            let found = false;
            for (let i = 0; i < numberOfWebTitles && !found; i++) {
                const elementHandle = await sectionTitlesArray.nth(i).elementHandle();
                const elementTextContent = await page.evaluate(el => el?.textContent?.trim(), elementHandle);

                if (elementTextContent?.includes(title)) {
                    found = true;
                }
            }

            if (!found) {
                throw new Error(`One of the titles was not found in the web elements: ${title}`);
            }
        }


    });

    test('Pagination Functionality', async ({ page }) => {

        test.step('Normal pagination', () => {


        });

        test.step('Show "go" pagination', () => {


        });

        test.step('Auto hide pagination', () => {


        });

    });

});