class AccountPage
{
    //constructor

    constructor(page)
    {
        this.page = page;

    //Locators
    this.myAccount = page.locator("//h1[normalize-space()='My Account']");
    this.affiliate = page.getByRole('link', { name: 'Affiliate', exact: true });

    }

    // Action methods

   async verifyMyAccount()
    {
       return await this.myAccount.isVisible();
    }

    async clickAffiliate()
    {
        await this.affiliate.click();
    }

}

module.exports = {AccountPage};

