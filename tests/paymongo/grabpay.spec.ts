import { test, expect } from '@playwright/test';
import CartPage from '../../page_objects/paymongo/cart';
import CheckoutPage from '../../page_objects/paymongo/checkout';
import HostedCheckoutPage from '../../page_objects/paymongo/hostedCheckout';
import ShopPage from '../../page_objects/paymongo/shop';

let shopPage: ShopPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let hostedCheckoutPage: HostedCheckoutPage;

test.beforeEach(async ({ page }) => {
    shopPage = new ShopPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    hostedCheckoutPage = new HostedCheckoutPage(page);

    await shopPage.addToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillForm();
    await checkoutPage.selectPaymentMethod('GrabPay via PayMongo');
    await checkoutPage.placeOrder();
});

test('can successfully pay with gcash', async({ page }) => {
    await hostedCheckoutPage.authorizePayment();

    await expect(page).toHaveURL(/.*checkout\/order-received/);
    await expect(page.getByText('Thank You! Order has been received.')).toBeVisible();
});

test('can redirect to order checkout if there\'s an error', async ({ page }) => {
    await hostedCheckoutPage.failPayment();
    
    await expect(page).toHaveURL(/.*checkout\/order-pay/);
    await expect(page.getByText('Something went wrong with the payment. Please try another payment method. If issue persist, contact support.')).toBeVisible();
});