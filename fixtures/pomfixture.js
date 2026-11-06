import { test as base,expect } from "@playwright/test";
import buypage from "../PageObjectModel/casanest/casabuypage.page"
import rentpage from "../PageObjectModel/casanest/casarentpage.page"
import homepage from "../PageObjectModel/casanest/casahomepage.page"

const test=base.extend(
{
    buyPage:async({page},use)=>
        {
            const buyPage=new buypage(page)
            await page.goto("https://casanest.eu/en/buy")
            await use(buyPage)
        },


    rentPage:async({page},use)=>
        {
            const rentPage=new rentpage(page)
            await page.goto("https://casanest.eu/en/rent")
            await use(rentPage)
        },
     homePage:async({page},use)=>
        {
            const homePage=new homepage(page)
            await page.goto("https://casanest.eu/en")
            await use(homePage)
        }      

})
export{test,expect}