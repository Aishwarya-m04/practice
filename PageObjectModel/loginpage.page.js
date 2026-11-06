class loginpage
{
    constructor(page)
    {
        this.uesrNameTextfield=page.locator("input#username")
        this.passwordTextfield=page.locator("input#password")
        this.submitButton=page.getByRole("button",{name:"Submit"})
    }
}
export default loginpage