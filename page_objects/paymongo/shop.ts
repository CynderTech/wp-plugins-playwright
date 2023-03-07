import PageObject from '../Page';

class ShopPage extends PageObject {
    async addToCart() {
        await this.page.goto('https://app.europa.test/shop/');
        await this.page.getByRole('link', { name: 'Add “Sample Product” to your cart' }).click();
        await this.page.getByRole('link', { name: 'View cart' }).click();
    }
}

export default ShopPage;
