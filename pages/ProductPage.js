class ProductPage
{
   //constructor
   constructor(page)
   {
       this.page = page;
       this.addToWishListButton = page.locator("//button//i[@class='fa-solid fa-heart']");
       this.deliveryDate = page.getByRole('textbox', { name: '* Delivery Date' });
       this.addtoCartButton = page.getByRole('button', { name: 'Add to Cart' });
       this.successMesge = page.getByText('Success: You have added HP');
   }

    //Methods

    // Current date plus  days in mm-dd-yyyy format
       static  currentDatePlusDays(days)
        {
           let delDate = new Date();
           delDate.setDate(delDate.getDate() +days);
           let day = String(delDate.getDate()).padStart(2,'0');
           let month = String(delDate.getMonth()+1).padStart(2,'0');
           let year = String(delDate.getFullYear());
           let formattedDate = `${year}-${month}-${day}`;
           console.log(formattedDate);
           return formattedDate;
           
        }

        async setDeliveryDate(delDate)
        {
            await this.deliveryDate.fill(delDate);
        }
        
        async clickAddToWishList()
        {
            await this.addToWishListButton.click();
        }

        async addToCart()
        {
            await this.addtoCartButton.click();
        }

}

    module.exports = {ProductPage};