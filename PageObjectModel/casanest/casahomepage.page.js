class homepage
{
    constructor(page)
    {
      this.buylink=page.locator("//a[text()='Buy']")
      this.rentlink=page.locator("//a[text()='Rent']")
      this.businesslink=page.locator("//a[text()='Businesses']")
    }
}
export default homepage