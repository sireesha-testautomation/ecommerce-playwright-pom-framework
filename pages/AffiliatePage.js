class AffiliatePage
{

    //constructor
    constructor(page)
    {
        this.page = page;
        this.company = page.getByRole('textbox', { name: 'Company' });
        this.website =  page.getByRole('textbox', { name: 'Web Site' });
        this.taxId = page.getByRole('textbox', { name: 'Tax ID' });
        this.checkPayeeName = page.getByRole('textbox', { name: '* Cheque Payee Name' });
        this.continueButn = page.getByRole('button', { name: 'Continue' });
        this.successMesg = page. getByText('Success: Your affiliate');
    }

    //Actions

    async enterAffiliateInfo(company, website, taxid, payeeName)
    {
    await this.company.fill(company);
    await this.website.fill(website);
    await this.taxId.fill(taxid);
    await this.checkPayeeName.fill(payeeName);
    }

    async clickContinue()
    {
       await this.continueButn.click();
    }
}

module.exports = {AffiliatePage};