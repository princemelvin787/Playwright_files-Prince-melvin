/*
import {test} from '@playwright/test';
test("Launching google website", async({page})=> 
{
    await page.goto ('https://www.bing.com/search?EID=MSNBC&form=BGGCMF&pc=W099&DPC=U519&q=google&PC=U316&FORM=CHROMN');
    await page.waitForTimeout(3000);
    await page.locator('//input[@id="uaseabox"]').fill('india');
      await page.waitForTimeout(5000);
    let locate = await page.locator('//form[@role="search"]/descendant::ul[@role="listbox"]/li');
    await page.waitForTimeout(3000);
    console.log(await locate.textContent());
    await page.waitForTimeout(6000);

});
*/

/*
//FLIPKART LOGIN BUTTON
import {test} from '@playwright/test';
test("Launching flipkart website", async({page})=> {

    await page.goto('https://www.flipkart.com/?redirectFrom=logout');
     await page.waitForTimeout(3000);
     await page.locator('//span[@role="button"]').click();
     await page.waitForTimeout(3000);
     await page.locator('//div[@data-id="stickyElement"]/descendant::a[text() = "Login"]').click();
        await page.waitForTimeout(3000);
});
*/



/*Particular Product price
import { test } from '@playwright/test';
test("Amazon website", async ({ page }) => 
  {
      await page.goto('https://www.amazon.in/');
      await page.waitForTimeout(3000);

      await page.locator('//input[@id="twotabsearchtextbox"]').fill('laptops');
      await page.locator('//input[@id="nav-search-submit-button"]').click();
      
   let price = await page.locator('//div[@role="listitem"]//div[@class="a-row"]//descendant::span[@class="a-price-whole"]');
      await page.waitForTimeout(3000);
      console.log("Product_Price = " + await price.nth(0).textContent());
  });
*/


  /*Find 2 elements among 4 elements.
  import {test} from '@playwright/test';
  test("Launching amazon website", async ({page}) =>
{
     await page.goto('https://www.amazon.in/');
      await page.waitForTimeout(2500);
       await page.locator('//div[@class="a-cardui-header"]/ancestor::div[@id="gw-layout"]//descendant::a[@aria-label="ACs" or @aria-label="Refrigerators"]').nth(0).click();
        await page.waitForTimeout(2500);
});
*/

/*
import {test} from '@playwright/test';
  test("Launching flipkart website", async ({page}) => 
  {
     await page.goto('https://www.flipkart.com/');
     let closeBtn = page.locator('//button[text()="✕"]');
if (await closeBtn.isVisible()) {
    await closeBtn.click();
}
      await page.locator('//a[@title="Login"]').hover();
       await page.locator('//a[@title="Sign Up"]').click();
        await page.locator('//input[@maxlength="10"]').fill('8072880586');
          await page.locator('//span[contains(text(), "CONTINUE")]').click();
           await page.waitForTimeout(5000);
});
*/

/*
import { test } from '@playwright/test';
test('Myntra url', async ({page}) =>
{
    await page.goto('https://www.myntra.com');
    await page.locator('a[data-group="women"]').hover();
     await page.waitForTimeout(5000);
    await page.locator('a[href="/women-jackets"]').click();
     await page.waitForTimeout(5000);
     await page.locator('[title="StyleCast Oversized Denim Jacket"]').click();
     await page.waitForTimeout(5000);
     await page.locator('//input[@name="pincode"]').fill("631005");
     await page.waitForTimeout(5000);
     await page.locator('//input[@value="Check"]').click();
     await page.waitForTimeout(5000);
});
*/

import {test} from '@playwright/test';
  test("Launching flipkart website", async ({page}) => 
  {
     await page.goto('https://www.myntra.com/');
        await page.locator('//div[@class="desktop-user"]').hover();
          await page.locator('//a[@data-track="login"]').click();
            await page.locator('//input[@class="form-control mobileNumberInput"]').fill("8072880586");
                await page.locator('//input[@class="consentCheckbox"]').click();
                   await page.locator('//div[@class="submitBottomOption"]').click();
                        await page.waitForTimeout(5000);
});
