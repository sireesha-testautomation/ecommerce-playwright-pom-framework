const {test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/HomePage');
const {LoginPage} = require('../pages/LoginPage');
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('@sanity @regression TC04_CompletePurchaseTest', async({page}) =>
{
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const categorypage = new CategoryPage(page);
    const productpage = new ProductPage(page);
    const checkoutpage = new CheckoutPage(page);
    await homepage.gotoURL();
    await homepage.openAllLaptopsAndNotebooks();
    await categorypage.selectProductByName('HP LP3065');
    const delDate = ProductPage.currentDatePlusDays(5);
    await productpage.setDeliveryDate(delDate);
    await productpage.addToCart();
    await homepage.goToCheckout();
    await homepage.clickMyAccount();
    await checkoutpage.clickloginPageLink();
    await loginpage.login("nona@yahoo.com", "QWER!@#$");
    await checkoutpage.selectShippingAddress();
    await checkoutpage.selectShippingMethod();
    await checkoutpage.selectPaymentMethod();
    await checkoutpage.confirmOrder();
    await expect(checkoutpage.orderConfirmation).toContainText('Your order has been placed!');
    

}
)