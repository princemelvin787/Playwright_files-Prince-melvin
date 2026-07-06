/* To find the count of the products.
import {test} from '@playwright/test';
import { parse } from 'node:path';
test("launching myntra website", async ({page})=>
{
    await page.goto("https://www.myntra.com/boy-tshirts");
    //let num = await page.locator('//li[@class="product-base"]');
    //console.log(await num.count());
    let list  = await page.locator('span[class="product-discountedPrice"]');
    console.log(await list.count());
});



// import { test } from '@playwright/test';
//  test("launching myntra website", async ({ page }) => {
//  await page.goto("https://www.myntra.com/boy-tshirts");

//     let priceLocator = page.locator('//div[class="product-price"]');
//     let nameLocator = page.locator('//h4[@class="product-product"]'); // product name

//     let count = await priceLocator.count();
//     let minPrice = Number.MAX_VALUE;
//     let minProduct = "";

//     for (let i = 0; i < count; i++) {
//         let priceText = await priceLocator.nth(i).textContent();
//         console.log(pricetext);
//     }


//         let price = parseInt(priceText.replace(/[^\d]/g, '')); // ₹1,299 → 1299

//         if (price < minPrice) {
//             minPrice = price;
//            minProduct = await nameLocator.nth(i).textContent(); // store name, not locator
//         }
//     }
// console.log("Cheapest Product:", minProduct);
// console.log("Minimum Price: ₹", minPrice);
// });
*/


/*
import {test} from '@playwright/test';
test("Launching myntra website", async({page})=>
    {
        await page.goto('https://www.myntra.com/boy-tshirts');
        let total = await page.locator('li[class="product-base"]')
        console.log("Total no of products" + " " + await total.count());

        let pricelocator = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
        let namelocator = await page.locator('h4[class="product-product"]');
        let count = await pricelocator.count();
        console.log("total no of discounted products" + " " + count);

        let minprice = Number.MAX_VALUE;
        let minproduct = "";
        for(let i=0;i<count;i++)
        {
            let pricetext = await pricelocator.nth(i).textContent();
            let price = parseInt(pricetext.replace(/[^\d]/g, ''));

            if(price<minprice)
            {
                minprice = price;
                minproduct = await namelocator.nth(i).textContent();
            }
        }
        console.log("mininum price:",minprice);
        console.log("Name of the min Product"+ " "+ minproduct);
    }
);

*/
/*
//Dis + Acutual price
import {test} from '@playwright/test';
test("Launching myntra website", async({page})=>
{

await page.goto('https://www.myntra.com/boy-tshirts');
let disprice = await page.locator('span[class="product-discountedPrice"]');
let dispricecount = disprice.count();
console.log(await dispricecount);

let actualprice = await page.locator('div[class="product-price"]');
let actualpricecount = actualprice.count();
console.log(await actualpricecount);
});
*/


import { test } from '@playwright/test';
test("Launching myntra website", async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');


    let pricelocator = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]');
    let namelocator = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/ancestor::div[@class="product-productMetaInfo"]/child::h4[@class="product-product"]');

    // Step 1 — get ALL prices at once as an array
    let allPrices = await pricelocator.allTextContents();
    //console.log("All Prices:", allPrices);
    // ["₹399", "₹799", "₹299", "₹599"...]

    // Step 2 — convert all to numbers
    let parsedPrices = allPrices.map(p => parseInt(p.replace(/[^\d]/g, '')));
    //console.log("Parsed Prices:", parsedPrices);
    // [399, 799, 299, 599...]

    // Step 3 — find minimum price
    let minprice = Math.min(...parsedPrices);
    console.log("Minimum Price: ₹", minprice);

    // Step 4 — find index of minimum price
     let minIndex = parsedPrices.indexOf(minprice);
     //console.log("Min Price Index:", minIndex);

    // Step 5 — fetch product name at that index
    let minproduct = await namelocator.nth(minIndex).textContent();
    console.log("Name of the min Product:", minproduct);
    
        let discountedcount = await page.locator('//li[@class="product-base"][.//span[@class="product-discountedPrice"]]');
        console.log("Totaldiscountedproducts" + " " + await discountedcount.count());

        let notdiscountedcount = await page.locator('//li[@class="product-base"][not(.//span[@class="product-discountedPrice"])]');
        console.log("Totalofwithoutdiscountproducts" + " " + await notdiscountedcount.count());

        let mergingbothproducts = await page.locator('c;
        console.log("Totalproductsaftermerging" + " " + await mergingbothproducts.count());
    });


    