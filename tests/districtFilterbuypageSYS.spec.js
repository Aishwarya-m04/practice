
import { test, expect } from "../fixtures/pomfixture"
// import buypage from "../PageObjectModel/casanest/casabuypage.page";
// import casaurl from "../testData/casaurl.json"
test("Verify filtered property opens correct details @system", async ({ buyPage ,page}) => {

    // let Buyurl=casaurl.buyurl
    // let Buypage = new buypage(page);

    // Step 1: Open Buy page
    // await page.goto(Buyurl);

    // Step 2: Select Lisboa district
    await page.waitForTimeout(2000)
    await buyPage.distictDD.selectOption({ label: "Lisboa" });

    // Step 3: Apply filter
    await page.waitForTimeout(2000)
    await buyPage.applybutton.click();

    // Step 4: Verify 3rd property is visible
    await page.waitForTimeout(2000)
    await expect(buyPage.propertycard.nth(2)).toBeVisible();

    // Step 5: Capture the 3rd property's title
    await page.waitForTimeout(2000)
    let oldpropertytitle = await page
        .locator("span.prop-title")
        .nth(2)
        .innerText();
    await page.waitForTimeout(2000)

    console.log("Filtered property:", oldpropertytitle);

    // Step 6: Open the 3rd property
    await page.waitForTimeout(2000)
    await buyPage.propertycard.nth(2).click();

    // Step 7: Verify details page title
    await page.waitForTimeout(2000)
    let propertytitle = page.locator("div.detail-top>div>h1");

    await expect(propertytitle).toHaveText(oldpropertytitle);
    await page.waitForTimeout(2000)
    console.log("Details page title:", await propertytitle.innerText());
});
