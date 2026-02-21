const {test, expect} = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');
const {AccountPage} = require('../pages/AccountPage');
const {LoginPage} = require('../pages/LoginPage');
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage');
const {AffiliatePage} = require('../pages/AffiliatePage');

test('@regression TC06_AddAffiliateTest', async({page}) =>

{
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const accountpage = new AccountPage(page);
    const categorypage = new CategoryPage(page);
    const productpage = new ProductPage(page);
    const affiliatepage = new AffiliatePage(page);
    await homepage.gotoURL();
    await homepage.clickMyAccount();
    await homepage.clickLogin();
    await loginpage.login("nona@yahoo.com", "QWER!@#$");
    await expect(accountpage.myAccount).toContainText('My Account');
    await accountpage.clickAffiliate();
    await affiliatepage.enterAffiliateInfo("CloudBerry","cloudberry.services","12345","Sid");
    await affiliatepage.clickContinue();
    await expect(affiliatepage.successMesg).toContainText('Success: Your affiliate account has been successfully updated.');

}
)