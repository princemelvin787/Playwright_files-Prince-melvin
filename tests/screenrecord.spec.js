/*
import {test} from '@playwright/test'
    test("Screen record", async ({browser})=>
    {

        const context = await browser.newContext(
            {
                recordVideo:{dir:'./record videos'}
            });

        const page = await context.newPage();
        await page.goto('https://www.amazon.in');
        await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone");
           await page.waitForTimeout(3000);   
        await page.locator('//input[@id="nav-search-submit-button"]').click();
           await page.waitForTimeout(3000);

        const page2 = await context.newPage();
        await page2.goto('https://www.flipkart.com');
        await page2.locator('//input[@title="Search for Products, Brands and More"]').first().fill("laptops");
           await page2.waitForTimeout(2000);
        await page2.locator('//button[@type="submit"]').click()
            await page2.waitForTimeout(2000);

        await page.close();
        await page2.close();
        await context.close();
           
        const video = await page.video();
        const path =  await video.path();
        console.log(path);
});
*/



import {test} from '@playwright/test'
    test("Screen record", async ({browser})=>
    {

        const context = await browser.newContext(
            {
                recordVideo: {dir:'./videosnew'}
            });

        const page = await context.newPage();
        await page.goto('https://www.amazon.in');
        await page.locator('//input[@id="twotabsearchtextbox"]').fill("airconditioner");
           await page.waitForTimeout(3000);   
        await page.locator('//input[@id="nav-search-submit-button"]').click();
           await page.waitForTimeout(3000);

        
        const context2 = await browser.newContext(
            {
                recordVideo: {dir:'/videosnew'}
            });
     
        const page2 = await context2.newPage();
        await page2.goto('https://www.flipkart.com');
        await page2.locator('//input[@title="Search for Products, Brands and More"]').first().fill("refrigirator");
           await page2.waitForTimeout(2000);
        await page2.locator('//button[@type="submit"]').click()
            await page2.waitForTimeout(2000);

        await page.close();
        await page2.close();
        await context.close();
        await context2.close();
           
        const video = await page.video();
        const path =  await video.path();
        console.log(path);
});









