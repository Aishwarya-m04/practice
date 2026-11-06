import { test, expect } from '../fixtures/buyfixture';
// import buypage from "../PageObjectModel/casanest/casabuypage.page";
// import casaurl from "../testData/casaurl.json"
test("CN_INT_009 - Verify properties are sorted by lowest price @integration", async ({ buyPage ,page}) => {

    // let Buyurl=casaurl.buyurl
    // let Buypage=new buypage(page)
    // // Open Buy page
    // await page.goto(Buyurl);

    // Select price: lowest first
    await buyPage.sortDD.selectOption({
        label: "Price: lowest first"
    });

   // Locate the individual property cards
    
    const propertyCards = buyPage.propertycard

    // Wait for the first property to be visible
    await expect(propertyCards.first()).toBeVisible();

    // Store all displayed prices
   const prices = [];
const count = await propertyCards.count();

for (let i = 0; i < count; i++) {
    const card = propertyCards.nth(i);

    const priceText = await card.locator(".prop-price").innerText();

    const price = Number(
        priceText.replace("€", "").replaceAll(",", "").trim()
    );

    console.log(`Property ${i + 1}: ${priceText} => ${price}`);

    prices.push(price);
}
})