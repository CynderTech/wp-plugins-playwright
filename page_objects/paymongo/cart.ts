import PageObject from '../Page';

class CartPage extends PageObject {
    async proceedToCheckout() {
        await this.page.getByRole('link', { name: 'Proceed to checkout' }).click();
    }
}

export default CartPage;