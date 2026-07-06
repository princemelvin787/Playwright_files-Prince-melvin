/*
import {test} from '@playwright/test'; 

// {} = Blocks
// () = parameter
// [] = array
// import = keyword
// test = inbuild function from playwright
// Page = particular tab
//inbuild fixture = browers,context,page
//Headless mode = UI will not visible while exceuting.. //Execution faster than headed mode
//Heded mode = UI visible --headed
//specific browerse = file name --project=orspace chromimum


// asyn -> it is a function which handles the asynchronous operation (it will not wait for the previous function so we can use asyn)
// await -> It is keyword which will wait for the promise to solve (only use in under asyn function)
//Have to run partucular test npx playwright test -g "title"

test ('Launching the url', async ({page}) => 
    {
        await page.goto('https://in.puma.com/in/en/lifestyle/');
});
*/


// import {test} from '@playwright/test';
// test ('Launching browser', async ({page}) =>
// {
//     await page.goto('https://youtube.com/');
// }
// );


import {test,expect} from '@playwright/test';
test ('playwright page methods', async ({page}) =>
{
    await page.goto ('https://www.amazon.in');
    //await page.waitForTimeout(4000);

    //console.log(await page.title()); //To check the title
    //console.log(await page.url());   // To check the url

   // console.log(`the title is ${pageTitle}
    //the url is: ${pageUrl}`);
    

    //await page.goto ('https://www.flipkart.com');
    //await page.goBack();
    //await page.goForward();
    //await page.reload();

    //await expect(page).toHaveTitle(/amazon/);

    //await page.screenshot({path: 'File.png'});
});


test('Launching', async ({page}) =>
{
    await page.goto ('https://www.myntralaa.com');
    // const expectidedtitle = "";
    await expect.soft(page).toHaveTitle(/myntra/);
    await page.goto ('https://www.flipkart.com');


}
);

// test('New', async ({page}) =>
// {
//     await page.goto ('https://www.flipkart.com');
//     //const expectidedtitle = "";
//     //await expect(page).toHaveTitle(expectidedtitle);
// });




