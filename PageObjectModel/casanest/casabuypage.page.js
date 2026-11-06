class buypage{
    constructor(page)
    {
        this.pricefromtextfield=page.locator("input#f-preco-min")
        this.pricetotextfield=page.locator("input#f-preco-max")
        this.areatextfield=page.locator("input#f-area")
        this.applybutton=page.locator("//button[text()='Apply']")
        //this.casnestlogo=page.locator("//a[@aria-label='Casanest — home page']")
        this.casnestlogo=page.locator("a.brand")
        this.sortDD=page.locator("select#f-ordenar")
        this.distictDD=page.locator("select#f-distrito")
        this.muncipaltyDD=page.locator("#f-concelho")
        this.allpostcards=page.locator("//div[@class='listing-grid']")
        this.propertycard=page.locator("a.prop-card")
        this.propertycardprice=page.locator("span.detail-price")
        this.propertycardloc=page.locator("p.detail-loc")
    }
}
export default buypage