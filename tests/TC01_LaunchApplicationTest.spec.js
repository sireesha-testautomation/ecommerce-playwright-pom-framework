const{test, expect} = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');

test('@sanity @regression TC01_LaunchApplication', async({page})=>
{
const homepage = new HomePage(page);
await homepage.gotoURL();
await expect(page).toHaveTitle("Your store of fun");
}
)