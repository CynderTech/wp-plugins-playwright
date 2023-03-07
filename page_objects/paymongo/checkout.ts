import PageObject from '../Page';

class CheckoutPage extends PageObject {
    async fillForm() {
        await this.page.goto('https://app.europa.test/checkout/');
        await this.page.getByRole('textbox', { name: 'First name *' }).fill('Micah Andrew');
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill('Bule');
        await this.page.getByRole('textbox', { name: 'Street address *' }).fill('35D Matiwasay St.');
        await this.page.getByRole('textbox', { name: 'Town / City *' }).fill('Quezon City');
        await this.page.getByRole('textbox', { name: 'Postcode / ZIP *' }).fill('1101');
        await this.page.getByLabel('Phone *').fill('+639153009472');
        await this.page.getByLabel('Email address *').fill('micah.bule@gmail.com');
    }

    async selectPaymentMethod(paymentMethod: string) {
        await this.page.getByText(paymentMethod).click();
    }

    async placeOrder() {
        await this.page.getByRole('button', { name: 'Place order' }).click();
    }
}

export default CheckoutPage;