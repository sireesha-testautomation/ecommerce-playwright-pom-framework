
class HomePage
{
    

//constructor
constructor(page)
{
    this.page = page;

//Locators

this.myAccountIcon = page.locator('.fa-solid.fa-user');
this.loginLink = page.getByRole('link', { name: 'Login' });
this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
this.checkoutLink = page.getByRole('link', { name: ' Checkout' });

}

//Action methods

  // Launch browser and Open URL: https://cloudberrystore.services/
  async gotoURL()
  {
     await this.page.goto('https://cloudberrystore.services/');
  }

  //Click My Account
  async clickMyAccount()
  {
    await this.myAccountIcon.click();
  }

  //Click Login
  async clickLogin() 
  {
    await this.loginLink.click();
  }

  //click Laptops And Notebooks and All Latops And Notebooks
   async openAllLaptopsAndNotebooks()
    {
     await this.laptopsAndNotebooksMenu.hover(); // important
    await this.showAllLaptopsAndNotebooks.waitFor({ state: 'visible' });
    await this.showAllLaptopsAndNotebooks.click();
   }

   //Click Checkout
   async goToCheckout()
    {
    await this.checkoutLink.click();
   }

}

module.exports = {HomePage};
