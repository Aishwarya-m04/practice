import { test,expect } from "../fixtures/buyfixture";
// import buypage from "../PageObjectModel/casanest/casabuypage.page";
// import casaurl from "../testData/casaurl.json"
test("logo @integration",async({buyPage,page})=>
    {
    //     let Buyurl=casaurl.buyurl
    //     let Buypage=new buypage(page)
        // await page.goto(Buyurl)
       
        await buyPage.casnestlogo.click()
        await page.waitForTimeout(2000)
        let title= await page.title()
        await page.waitForTimeout(2000)
        await console.log(title);
        await page.waitForTimeout(2000)
        await expect(page).toHaveTitle(title)

    })