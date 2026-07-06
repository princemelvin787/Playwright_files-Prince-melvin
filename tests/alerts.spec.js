import {test} from '@playwright/test';
test("alerts handling", async ({page}) =>
{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog' , async (d)=>
    {
        if(d.type()=='alert')
        {
            await d.accept();
        }
        else if (d.type()=='confirm')
        {
            d.dismiss();
        }
        else
        {
            d.accept("Melvin");
        }
        console.log(d.type());
        console.log(d.message());
    });
    //await page.locator('//button[@onclick="jsAlert()"]').click();
    await page.locator('//button[@onclick="jsConfirm()"]').click();
     await page.locator('//button[@onclick="jsPrompt()"]').click();
     await page.waitForTimeout(2000);
});
