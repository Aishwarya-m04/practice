class rentpage
{
    constructor(page){
        this.districtdd=page.locator("#f-distrito")
        this.typedd=page.locator("#f-tipo")
        this.bedroomdd=page.locator("#f-tipologia")
        this.applybutton=page.locator("//button[text()='Apply']")
        this.fovoriteicon=page.locator("button.favorito")
        this.propertycard=page.locator("a.prop-card")
        this.propertyname=page.locator("span.prop-title")
        this.favoritelink=page.locator("a.nav-favoritos")
        this.allproperty=page.locator("div.prop-grid")
        this.proertyprice=page.locator("span.detail-price")
        this.propertytitleold=page.locator("span.prop-title")
        this.propertytitlenew=page.locator("div.detail-top>div>h1")
    }
}
export default rentpage