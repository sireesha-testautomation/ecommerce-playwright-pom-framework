const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const {AccountPage} = require('../pages/AccountPage');
const dataset = JSON.parse(JSON.stringify(require('../utilities/CloudBerryStoreTestData.json')));
const users = dataset.Sheet1;

//Looping through users to test login for each user on each iteration
for(const data of users)
{
    test(`@sanity @datadriven @regression TC02_LoginTest - ${data.username}`, async({page})=>
    {

    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const accountpage = new AccountPage(page);
    await homepage.gotoURL();
    await homepage.clickMyAccount();
    await homepage.clickLogin();
    await loginpage.login(data.username, data.password);
    await expect(accountpage.myAccount).toContainText('My Account');

    }
    
    );
}
