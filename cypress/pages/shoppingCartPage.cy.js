import checkoutPage from "./checkoutPage.cy"
import mainPage from "./mainPage.cy"

class ShoppingCartPage {

    itemInCart(name) { return cy.contains('.cart_description', name) }
    checkoutBtn() { return cy.contains('.btn.btn-default.check_out', 'Proceed To Checkout') }

    checkIfItemInCart(item) {
        this.itemInCart(item).should('be.visible')
    }

    proceedToCheckout() {
        mainPage.cartBtn().click()
        this.checkoutBtn().should('be.visible').click()
        checkoutPage.checkoutInfo().should('be.visible')
    }

}
export default new ShoppingCartPage