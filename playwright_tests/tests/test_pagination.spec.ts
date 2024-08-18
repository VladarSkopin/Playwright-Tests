import { test, expect } from '@playwright/test';


test.describe('Test Pagination', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://pagination.js.org/');
    });

    test('General Page Layout', async ({ page }) => {
        // TODO: Move CSS locators to a separate file

        await page.waitForSelector('div.header > div.title', { state: 'visible' });
        const pageTitle = await page.locator('div.header > div.title');
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

        await page.waitForSelector('a.build-button-source', { state: 'visible' });
        const btnPagination = await page.locator('a.build-button-source');
        await expect(btnPagination).toContainText('Pagination.js');
        await expect(btnPagination).toHaveAttribute('href', 'dist/2.6.0/pagination.js');
        await expect(btnPagination).toHaveCSS('display', 'inline-block');
        await expect(btnPagination).toHaveCSS('padding', '6px 24px');
        await expect(btnPagination).toHaveCSS('font-size', '21px');
        await expect(btnPagination).toHaveCSS('border-radius', '5px');
        await expect(btnPagination).toHaveCSS('border', '1px solid rgb(101, 155, 148)');
        await expect(btnPagination).toHaveCSS('text-decoration', 'none solid rgb(102, 102, 102)');
        await expect(btnPagination).toHaveCSS('background', 'rgb(222, 239, 236) none repeat scroll 0% 0% / auto padding-box border-box');
        await expect(btnPagination).toHaveCSS('color', 'rgb(102, 102, 102)');
        await expect(btnPagination).toHaveCSS('text-shadow', 'rgb(255, 255, 255) 0px 1px 1px');
        await expect(btnPagination).toHaveCSS('transition', 'background 0.3s');
        await expect(btnPagination).toHaveCSS('box-sizing', 'border-box');
        await expect(btnPagination).toHaveCSS('cursor', 'pointer');
        await expect(btnPagination).toHaveCSS('text-align', 'center');
        await expect(btnPagination).toHaveCSS('line-height', '33.6px');

        await page.waitForSelector('a.build-button-zipped', { state: 'visible' });
        const btnPaginationMin = await page.locator('a.build-button-zipped');
        await expect(btnPaginationMin).toContainText('Pagination.min.js');
        await expect(btnPaginationMin).toHaveAttribute('href', 'dist/2.6.0/pagination.min.js');
        await expect(btnPaginationMin).toHaveCSS('display', 'inline-block');
        await expect(btnPaginationMin).toHaveCSS('padding', '6px 24px');
        await expect(btnPaginationMin).toHaveCSS('font-size', '21px');
        await expect(btnPaginationMin).toHaveCSS('border-radius', '5px');
        await expect(btnPaginationMin).toHaveCSS('border', '1px solid rgb(101, 155, 148)');
        await expect(btnPaginationMin).toHaveCSS('text-decoration', 'none solid rgb(102, 102, 102)');
        await expect(btnPaginationMin).toHaveCSS('background', 'rgb(222, 239, 236) none repeat scroll 0% 0% / auto padding-box border-box');
        await expect(btnPaginationMin).toHaveCSS('color', 'rgb(102, 102, 102)');
        await expect(btnPaginationMin).toHaveCSS('text-shadow', 'rgb(255, 255, 255) 0px 1px 1px');
        await expect(btnPaginationMin).toHaveCSS('transition', 'background 0.3s');
        await expect(btnPaginationMin).toHaveCSS('box-sizing', 'border-box');
        await expect(btnPaginationMin).toHaveCSS('cursor', 'pointer');
        await expect(btnPaginationMin).toHaveCSS('text-align', 'center');
        await expect(btnPaginationMin).toHaveCSS('line-height', '33.6px');

        // Wait for all the section titles to load before doing assertions
        await page.waitForSelector('div.demo-section-title', { state: 'visible' });

        const sectionTitle_1 = await page.locator('div.demo-section-title').nth(0);
        // TODO: Load section titles' texts from a separate file (collection) -> traverse the array in a loop
        await expect(sectionTitle_1).toHaveText('Normal');
        // TODO: move basic CSS checks to a separate helper funtion (font-size, text-align, box-sizing, color)
        await expect(sectionTitle_1).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_1).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_1).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_1).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_2 = await page.locator('div.demo-section-title').nth(1);
        await expect(sectionTitle_2).toHaveText('Only page numbers');
        await expect(sectionTitle_2).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_2).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_2).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_2).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_3 = await page.locator('div.demo-section-title').nth(2);
        await expect(sectionTitle_3).toHaveText('Show page size changer');
        await expect(sectionTitle_3).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_3).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_3).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_3).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_4 = await page.locator('div.demo-section-title').nth(3);
        await expect(sectionTitle_4).toHaveText('Show "go" input & button');
        await expect(sectionTitle_4).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_4).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_4).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_4).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_5 = await page.locator('div.demo-section-title').nth(4);
        await expect(sectionTitle_5).toHaveText('Auto hide previous & next button');
        await expect(sectionTitle_5).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_5).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_5).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_5).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_6 = await page.locator('div.demo-section-title').nth(5);
        await expect(sectionTitle_6).toHaveText('Mini');
        await expect(sectionTitle_6).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_6).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_6).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_6).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_7 = await page.locator('div.demo-section-title').nth(6);
        await expect(sectionTitle_7).toHaveText('Show all pages');
        await expect(sectionTitle_7).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_7).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_7).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_7).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_8 = await page.locator('div.demo-section-title').nth(7);
        await expect(sectionTitle_8).toHaveText('Asynchronous or JSONP');
        await expect(sectionTitle_8).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_8).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_8).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_8).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_9 = await page.locator('div.demo-section-title').nth(8);
        await expect(sectionTitle_9).toHaveText('Asynchronous & Dynamic total number');
        await expect(sectionTitle_9).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_9).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_9).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_9).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_10 = await page.locator('div.demo-section-title').nth(9);
        await expect(sectionTitle_10).toHaveText('Specify default');
        await expect(sectionTitle_10).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_10).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_10).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_10).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_11 = await page.locator('div.demo-section-title').nth(10);
        await expect(sectionTitle_11).toHaveText('Format result data');
        await expect(sectionTitle_11).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_11).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_11).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_11).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_12 = await page.locator('div.demo-section-title').nth(11);
        await expect(sectionTitle_12).toHaveText('Another format result data');
        await expect(sectionTitle_12).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_12).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_12).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_12).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_13 = await page.locator('div.demo-section-title').nth(12);
        await expect(sectionTitle_13).toHaveText('Format navigator');
        await expect(sectionTitle_13).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_13).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_13).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_13).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_14 = await page.locator('div.demo-section-title').nth(13);
        await expect(sectionTitle_14).toHaveText('Format "go" input');
        await expect(sectionTitle_14).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_14).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_14).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_14).toHaveCSS('color', 'rgb(51, 51, 51)');

        const sectionTitle_15 = await page.locator('div.demo-section-title').nth(14);
        await expect(sectionTitle_15).toHaveText('Methods & Events');
        await expect(sectionTitle_15).toHaveCSS('font-size', '40px');
        await expect(sectionTitle_15).toHaveCSS('text-align', 'center');
        await expect(sectionTitle_15).toHaveCSS('box-sizing', 'border-box');
        await expect(sectionTitle_15).toHaveCSS('color', 'rgb(51, 51, 51)');
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