import { test } from '@playwright/test';
test("Launching myntra website", async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    //let pricelocator = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
    let pricelocator = page.locator(' //li[@class="product-base"]/descendant::div[@class="product-price"]');
    //let namelocator = page.locator('h4[class="product-product"]');
    let namelocator = page.locator(' //li[@class="product-base"]/descendant::div[@class="product-price"]/ancestor::div[@class="product-productMetaInfo"]/child::h4[@class="product-product"]');

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
    });  


/*
    import {test} from '@playwright/test';
    test("myntra site", async({page})=>
    {
        await page.goto('https://www.myntra.com/boy-tshirts');
        let total = await page.locator('//li[@class="product-base"]');
        console.log("total no of products" + " " + await total.count());

        let discountedcount = await page.locator('//li[@class="product-base"][.//span[@class="product-discountedPrice"]]');
        console.log("Totaldiscountedproducts" + " " + await discountedcount.count());

        let notdiscountedcount = await page.locator('//li[@class="product-base"][not(.//span[@class="product-discountedPrice"])]');
        console.log("Totalofwithoutdiscountproductscount" + " " + await notdiscountedcount.count());

        let mergingbothproducts = await page.locator(' //li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or text() and not(@class)]');
        console.log("Totalproductsaftermerging" + " " + await mergingbothproducts.count());
    });
*/

*
import {test} from '@playwright/test';
test("yahoo", async ({page})=>
{
    await page.goto('https://in.search.yahoo.com/?fr2=inr');
    let trending = await page.locator(`//span[text() ='Trending now']/ancestor::li[@class="last"]/descendant::a[4]`);
    console.log("current trending name is" + " " + await trending.textContent());
});
*/