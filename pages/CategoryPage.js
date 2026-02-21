class CategoryPage
{
    //constructor
    constructor(page)
    {
        this.page = page;
    }

    //Methods
    async selectProductByName(productName)
    {
       await this.page.getByText(productName, { exact: true }).click();
    }

}

module.exports = {CategoryPage};