import PageObject from '../Page';

class HostedCheckoutPage extends PageObject {
    async authorizePayment() {
        await this.page.getByRole('button', { name: 'Authorize Test Payment' }).click();
    }

    async failPayment() {
        await this.page.getByRole('button', { name: 'Fail Test Payment' }).click();
    }

    async cancelPayment() {
        await this.page.getByRole('button', { name: 'Cancel Test Payment' }).click();
    }
}

export default HostedCheckoutPage;