import { expect, Locator } from "@playwright/test";



export async function cssSectionTitleCheck (sectionTitle: Locator) {
    const title = await sectionTitle;
    console.log(`Asserting CSS for section title = ${title}`);
    await expect(title).toHaveCSS('font-size', '40px');
    await expect(title).toHaveCSS('text-align', 'center');
    await expect(title).toHaveCSS('box-sizing', 'border-box');
    await expect(title).toHaveCSS('color', 'rgb(51, 51, 51)');
}

export async function cssButtonCheck (btnPagination: Locator) {
    const btn = await btnPagination;
    console.log(`Asserting CSS for button = ${btn}`);
    await expect(btn).toHaveCSS('display', 'inline-block');
    await expect(btn).toHaveCSS('padding', '6px 24px');
    await expect(btn).toHaveCSS('font-size', '21px');
    await expect(btn).toHaveCSS('border-radius', '5px');
    await expect(btn).toHaveCSS('border', '1px solid rgb(101, 155, 148)');
    await expect(btn).toHaveCSS('text-decoration', 'none solid rgb(102, 102, 102)');
    await expect(btn).toHaveCSS('background', 'rgb(222, 239, 236) none repeat scroll 0% 0% / auto padding-box border-box');
    await expect(btn).toHaveCSS('color', 'rgb(102, 102, 102)');
    await expect(btn).toHaveCSS('text-shadow', 'rgb(255, 255, 255) 0px 1px 1px');
    await expect(btn).toHaveCSS('transition', 'background 0.3s');
    await expect(btn).toHaveCSS('box-sizing', 'border-box');
    await expect(btn).toHaveCSS('cursor', 'pointer');
    await expect(btn).toHaveCSS('text-align', 'center');
    await expect(btn).toHaveCSS('line-height', '33.6px');
}

