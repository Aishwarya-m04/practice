class conatactadvertiser
{
    constructor(page)
    {
        this.nameofproperty=page.locator("//h1[text()='3-bedroom villa for sale in Lisboa']")
        this.nametextfield=page.locator("#lead-nome")
        this.emailtextfield=page.locator("#lead-email")
        this.phonetextfield=page.locator("#lead-telefone")
        this.checkbox=page.locator("//input[@type='checkbox']")
        this.contactadvertiserbutton=page.getByRole('button', { name: 'Contact the advertiser' })
        this.successMessage= page.locator(".form-ok")
        this.propertyImage=page.getByAltText('3-bedroom villa for sale in Lisboa')
    }
}
export default conatactadvertiser