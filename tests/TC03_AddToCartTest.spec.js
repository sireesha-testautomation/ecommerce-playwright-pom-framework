const {test, expect} = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');
const {LoginPage} = require('../pages/LoginPage');
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage');

test('@sanity @regression TC03_AddToCartTest', async({page}) =>
{
   const homepage = new HomePage(page);
   const loginpage = new LoginPage(page);
   const categorypage = new CategoryPage(page);
   const productpage = new ProductPage(page);
   await homepage.gotoURL();
   await homepage.openAllLaptopsAndNotebooks();
   await categorypage.selectProductByName('HP LP3065');
   const delDate = ProductPage.currentDatePlusDays(5);
   await productpage.setDeliveryDate(delDate);
   await productpage.addToCart();
   await expect(productpage.successMesge).toContainText('Success');

}
)