/*Dropdown Handling
import {test} from '@playwright/test';
test('dropdown handling', async ({page})=>
{
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.waitForTimeout(3000);
    await page.locator('select[id="dropdown"]').selectOption({value: '2'});
    await page.waitForTimeout(3000);
    await page.locator('select[id="elementsPerPageSelect"]').selectOption({value: '100'});
    await page.waitForTimeout(5000);
    await page.locator('select[id="country"]').selectOption({index: 6});
    await page.waitForTimeout(3000);
});
*/


/*2 tabs
import { test } from '@playwright/test';

test('multiple pages', async ({ browser }) => {

  const context2 = await browser.newContext();
  
  const page1 = await context2.newPage();
  const page2 = await context2.newPage();

  await page1.goto('https://www.amazon.com');
  await page2.goto('https://www.flipkart.com');

  await page1.waitForTimeout(3000);
  await page2.waitForTimeout(3000);

});
*/


// //VIDEO RECORDING
// import {test} from '@playwright/test';
// test("video recording", async ({browser})=>
// {
//     const context = await browser.newContext(
//         {
//             recordVideo:
//             {
//                 dir: 'videos/'
//             }
//         });

//   const page = await context.newPage();
//   await page.goto('https://www.myntra.com');
//   await page.waitForTimeout(3000);
// });


// // TO DOWNLOAD THE FILE
// const [download] = await Promise.all
// ([
//     page.waitForEvent('download'), //uSING COMMA
//     page.click('#downlbtn')
// ]);

// await download.saveAs('filepath');

// //TO HANDLE DIALOG BOX
// await page.getBYText('Alert Box', {exact :true}) .click(); //To get exact only alert box




//drop down

import {test} from "@playwright/test";
// test("Dropdown", async ({page}) =>
// {
//     await page.goto('https://www.amazon.in');
//     //await page.selectOption('//select[@id="searchDropdownBox"]', {value:"search-alias=mobile-apps"});
//      //await page.selectOption('//select[@id="searchDropdownBox"]', 'Audible Audiobooks');
//         await page.selectOption('//select[@id="searchDropdownBox"]', {index: 0});
//     await page.waitForTimeout(2000);
// })



test("multiple dropdown", async({page}) =>
{
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');
    // await page.locator('//button[@data-target="multi-select-dropdown"]').click();
    // //await page.selectOption('.form-multiselect',[{value:"option1"},{value:"option4}"]);
    // //await page.selectOption('.form-multiselect',["Option 1", "Option 3"]);
    // //await page.selectOption('.form-multiselect',[{label: "Option 1"}, {label: "Option 4"}]);
    // await page.selectOption('.form-multiselect', [{index: 1}, {index:4}]);
    // await page.waitForTimeout(2000);

   // await page.locator('//button[@data-target="simple-dropdown"]').click();
    await page.getByRole('button', {name:"Simple Dropdown"}).click();
    await page.selectOption('//div[@id="simple-dropdown"]/select', ["Option 2"]);
    await page.waitForTimeout(2000);
});




