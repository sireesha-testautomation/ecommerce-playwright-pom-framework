class CheckoutPage {
  
  constructor(page) {
    this.page = page;

    this.loginPageLink = page.getByRole('link', { name: 'login page' });
    this.shippingAddress = page.locator('#input-shipping-address');
    this.shippingMethod =  page.locator('#button-shipping-methods');
    this.shippingMethodContBtn = page.getByRole('button', { name: 'Continue' });
    this.paymentMethod =  page.locator('#button-payment-methods');
    this.paymentMethodContBtn = page.getByRole('button', { name: 'Continue' });
    this.confirmOrderButn = page.getByRole('button', { name: 'Confirm Order' });
    this.orderConfirmation = page.getByRole('heading', { name: 'Your order has been placed!' });
  }

  async clickloginPageLink()
  {
    await this.loginPageLink.click();
  }

  async selectShippingAddress()
  {
    await this.shippingAddress.selectOption({index :1});
  }

  async selectShippingMethod()
  {
    await this.shippingMethod.isVisible();
    await this.shippingMethod.click();
    await this.shippingMethodContBtn.click();
  }

  async selectPaymentMethod()
  {
    await this.paymentMethod.isVisible();
    await this.paymentMethod.click();
    await this.paymentMethodContBtn.click();
  }

  async confirmOrder()
  {
    await this.confirmOrderButn.click();
  }

}

module.exports = {CheckoutPage};