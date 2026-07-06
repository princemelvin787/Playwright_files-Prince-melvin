import {expect, test} from '@playwright/test';
test("Launching the browser", async({page}) =>
{
    await page.goto('https://www.axisbank.com');
    await page.goto('https://www.myntraaa.com');
    // await page.goBack();
    // await page.goForward();
    // await page.reload();
    const title = await page.title();
    console.log(title);
    //To check the given url is correct or not
    await expect(page).toHaveURL('https://www.myntra.com');
});


/*
test ("launching 2nd browser", async ({page}) =>
{
    await page.goto('https://onlinesbi.sbi.bank.in/');
    const title1 = await page.title();
    console.log(title1);
    //await page.screenshot({path: 'sbiss.png'});
});

test ("Launching 3rd browser", async ({page}) =>
{
    await page.goto('https://www.kotak.bank.in/');
    const title2 = await page.title();
    console.log(title2);
    //await page.screenshot({path: 'file.png'});
});
*/