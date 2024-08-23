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

    test.only('Normal Pagination Functionality', async ({ page }) => {

        await page.waitForSelector('div.data-container > ul', { state: 'visible' });
        await page.waitForSelector('div.paginationjs-pages', { state: 'visible' });

        const paginationListNormal = await page.locator('div.data-container > ul').nth(0).locator('li');
        const paginationListCountNormal = await paginationListNormal.count();
        expect (paginationListCountNormal).toEqual(10);
        // Check that numbers are 1-10

        const paginationPanelNormal = await page.locator('div.paginationjs-pages').nth(0);
        // toHaveCount(0) means that this element is not present on the page ("Back" button is disabled)
        await expect(paginationPanelNormal.locator('li.paginationjs-prev.J-paginationjs-previous ')).toHaveCount(0);

        // Check that "1" is grey

        // Check that "2" is white


        // Click the "Next" button
        await paginationPanelNormal.locator('li.paginationjs-next.J-paginationjs-next ').click();

        // Check that "1" is white

        // Check that "2" is grey

        // "Back" button is enabled
        await expect(paginationPanelNormal.locator('li.paginationjs-prev.J-paginationjs-previous ')).toHaveCount(1);

        // Check that numbers are 11-20


        // Click the "20" page

        // "Next" button is disabled

        // Check that "2" is white

        // Check that "20" is grey

        // Check that numbers are 191-195


        // Click the "Back" button

        // Check that "20" is white

        // Check that "19" is grey

        // Check that numbers are 181-190

    });


    
    test('"Go"" Pagination Functionality', async ({ page }) => {

        await page.waitForSelector('div.data-container > ul', { state: 'visible' });
        await page.waitForSelector('div.paginationjs-pages', { state: 'visible' });

        const paginationListNormal = await page.locator('div.data-container > ul').nth(3).locator('li');
        const paginationListCountNormal = await paginationListNormal.count();
        expect (paginationListCountNormal).toEqual(5);
        // Check that numbers are 1-5

        const paginationPanelNormal = await page.locator('div.paginationjs-pages').nth(0);
        // toHaveCount(0) means that this element is not present on the page ("Back" button is disabled)
        await expect(paginationPanelNormal.locator('li.paginationjs-prev.J-paginationjs-previous ')).toHaveCount(0);

        // Check that "1" is grey

        // Check that "2" is white


        // Click the "Next" button
        await paginationPanelNormal.locator('li.paginationjs-next.J-paginationjs-next ').click();

        // Check that "1" is white

        // Check that "2" is grey

        // "Back" button is enabled
        await expect(paginationPanelNormal.locator('li.paginationjs-prev.J-paginationjs-previous ')).toHaveCount(1);

        // Check that numbers are 6-10


        // Fill in "8"
        // Click the "Go" button

        // "Next" button is disabled

        // Check that "2" is white

        // Check that "8" is grey

        // Check that numbers are 36-40


        // Click the "Back" button

        // Check that "8" is white

        // Check that "7" is grey

        // Check that numbers are 31-35

    });


});