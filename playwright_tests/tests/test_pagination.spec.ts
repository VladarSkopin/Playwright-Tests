import { test, expect } from '@playwright/test';
import { paginationLocators } from './locators';
import { cssButtonCheck, cssSectionTitleCheck } from './utils';


test.describe('Test Pagination', { tag: '@ui' }, async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://pagination.js.org/');
    });

    test('General Page Layout', async ({ page }) => {

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
            await cssButtonCheck(btnPagination);
            await expect(btnPagination).toContainText('Pagination.js');
            await expect(btnPagination).toHaveAttribute('href', 'dist/2.6.0/pagination.js');

            await page.waitForSelector(paginationLocators.btnPaginationMin, { state: 'visible' });
            const btnPaginationMin = await page.locator(paginationLocators.btnPaginationMin);
            await cssButtonCheck(btnPaginationMin);
            await expect(btnPaginationMin).toContainText('Pagination.min.js');
            await expect(btnPaginationMin).toHaveAttribute('href', 'dist/2.6.0/pagination.min.js');


            // Wait for all the section titles to load before doing assertions
            await page.waitForSelector(paginationLocators.sectionTitleArray, { state: 'visible' });

            const sectionTitle_1 = await page.locator(paginationLocators.sectionTitleArray).nth(0);
            // TODO: Load section titles' texts from a separate file (collection) -> traverse the array in a loop
            await expect(sectionTitle_1).toHaveText('Normal');
            await cssSectionTitleCheck(sectionTitle_1);

            const sectionTitle_2 = await page.locator(paginationLocators.sectionTitleArray).nth(1);
            await expect(sectionTitle_2).toHaveText('Only page numbers');
            await cssSectionTitleCheck(sectionTitle_2);

            const sectionTitle_3 = await page.locator(paginationLocators.sectionTitleArray).nth(2);
            await expect(sectionTitle_3).toHaveText('Show page size changer');
            await cssSectionTitleCheck(sectionTitle_3);

            const sectionTitle_4 = await page.locator(paginationLocators.sectionTitleArray).nth(3);
            await expect(sectionTitle_4).toHaveText('Show "go" input & button');
            await cssSectionTitleCheck(sectionTitle_4);

            const sectionTitle_5 = await page.locator(paginationLocators.sectionTitleArray).nth(4);
            await expect(sectionTitle_5).toHaveText('Auto hide previous & next button');
            await cssSectionTitleCheck(sectionTitle_5);

            const sectionTitle_6 = await page.locator(paginationLocators.sectionTitleArray).nth(5);
            await expect(sectionTitle_6).toHaveText('Mini');
            await cssSectionTitleCheck(sectionTitle_6);

            const sectionTitle_7 = await page.locator(paginationLocators.sectionTitleArray).nth(6);
            await expect(sectionTitle_7).toHaveText('Show all pages');
            await cssSectionTitleCheck(sectionTitle_7);

            const sectionTitle_8 = await page.locator(paginationLocators.sectionTitleArray).nth(7);
            await expect(sectionTitle_8).toHaveText('Asynchronous or JSONP');
            await cssSectionTitleCheck(sectionTitle_8);

            const sectionTitle_9 = await page.locator(paginationLocators.sectionTitleArray).nth(8);
            await expect(sectionTitle_9).toHaveText('Asynchronous & Dynamic total number');
            await cssSectionTitleCheck(sectionTitle_9);

            const sectionTitle_10 = await page.locator(paginationLocators.sectionTitleArray).nth(9);
            await expect(sectionTitle_10).toHaveText('Specify default');
            await cssSectionTitleCheck(sectionTitle_10);

            const sectionTitle_11 = await page.locator(paginationLocators.sectionTitleArray).nth(10);
            await expect(sectionTitle_11).toHaveText('Format result data');
            await cssSectionTitleCheck(sectionTitle_11);

            const sectionTitle_12 = await page.locator(paginationLocators.sectionTitleArray).nth(11);
            await expect(sectionTitle_12).toHaveText('Another format result data');
            await cssSectionTitleCheck(sectionTitle_12);

            const sectionTitle_13 = await page.locator(paginationLocators.sectionTitleArray).nth(12);
            await expect(sectionTitle_13).toHaveText('Format navigator');
            await cssSectionTitleCheck(sectionTitle_13);

            const sectionTitle_14 = await page.locator(paginationLocators.sectionTitleArray).nth(13);
            await expect(sectionTitle_14).toHaveText('Format "go" input');
            await cssSectionTitleCheck(sectionTitle_14);

            const sectionTitle_15 = await page.locator(paginationLocators.sectionTitleArray).nth(14);
            await expect(sectionTitle_15).toHaveText('Methods & Events');
            await cssSectionTitleCheck(sectionTitle_15);


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