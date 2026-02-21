const {test, expect} = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');
const {AccountPage} = require('../pages/AccountPage');
const {LoginPage} = require('../pages/LoginPage');
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage');

test('@regression TC03_AddToCartTest', async({page}) =>

{
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const accountpage = new AccountPage(page);
    const categorypage = new CategoryPage(page);
    const productpage = new ProductPage(page);
    await homepage.gotoURL();
    await homepage.clickMyAccount();
    await homepage.clickLogin();
    await loginpage.login("nona@yahoo.com", "QWER!@#$");
    await expect(accountpage.myAccount).toContainText('My Account');
    await homepage.openAllLaptopsAndNotebooks();
    await categorypage.selectProductByName('HP LP3065');
    await productpage.clickAddToWishList();
    await expect(productpage.successMesge).toContainText(' Success: You have added HP LP3065 to your wish list!');
}
)