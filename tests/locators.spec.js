/*
import {test} from '@playwright/test';
test ("playwright common loactors & inbuild loactors", async ({page}) =>
{
await page.goto('https://www.amazon.in');
await page.locator('input#twotabsearchtextbox').fill('laptops');
//await page.locator('input.nav-input').fill('laptops');
await page.waitForTimeout(5000);
});
*/

/*DOM Document object model
pink = Tagname
orange = attri
blue = attri valu
black = text
*/

/*
import {test} from '@playwright/test';
test("Launching amazon browser", async ({page})=>
{
    await page.goto('https://www.amazon.in');
    //ID type
    //await page.locator('input#twotabsearchtextbox').fill('laptops');
    //Class type
    //await page.locator('input.st-search-input').first().fill('footcare');
    //X path
    //await page.locator('//input[@id="twotabsearchtextbox"]').fill('water bottles')
    //      css
    await page.locator('input[id="twotabsearchtextbox"]').fill("toys");
    await page.waitForTimeout(7000);
}
);
*/


// import {test} from '@playwright/test';
// test('Launching blinkit url', async ({page}) =>
// {
//     await page.goto('https://www.flipkart.com');
//     await page.locator('input.nw1UBF').first().fill('Dustbins');
//     await page.waitForTimeout(5000);
// }
// );

/*
import { test } from '@playwright/test';
test("Playwright built-in locators", async ({ page }) => {
    await page.goto('https://www.amazon.in');

    // getByRole
    await page.getByRole('searchbox').fill('iphone');

    // getByPlaceholder
    await page.getByPlaceholder('Search Amazon.in').fill('iphone');

    // Press Enter
    await page.keyboard.press('Enter');

    // getByText
    await page.getByText('Add to cart').first().click();
});
*/

/*
import { test } from '@playwright/test';

test("Click MEN link", async ({ page }) => {
    await page.goto('https://www.myntra.com');

    await page.locator('a[data-group="men"]').hover();
    await page.waitForTimeout(5000);
    //await page.locator('xpath=//a[@href="/men-formal-shirts"]').click();
     await page.locator('a[href="/men-formal-shirts"]').click();
    await page.waitForTimeout(5000);
});

*/


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


/*
import {test} from '@playwright/test';
test("Launching amazon website", async ({page})=>
{
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(5000);
    await page.locator('input[id="twotabsearchtextbox"]').fill('shirts');
    await page.waitForTimeout(5000);
    await page.locator('input[id="nav-search-submit-button"]').click();
    await page.waitForTimeout(5000);
    //await page.locator('button[aria-label="Add to cart"]').click();
    //await page.waitForTimeout(5000);
});
*/
/*
import {test} from '@playwright/test';
test("Launching abhibus website", async({page})=>
{
    await page.goto("https://www.abhibus.com");
    await page.waitForTimeout(6000);
    await page.locator('div[class="from-city col s12"]').fill("ooty");
    
});
*/