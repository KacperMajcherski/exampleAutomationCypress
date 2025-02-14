import productsPage from "./productsPage.cy"

class CheckoutPage {

    checkoutInfo() { return cy.get('[data-qa="checkout-info"]') }
    commentField() { return cy.get('textarea.form-control') }
    placeOrderBtn() { return cy.get('a[href="/payment"]') }
    paymentInformation() {return cy.get('.payment-information')}
    nameOnCardField() {return cy.get ('[data-qa="name-on-card"]')}
    cardNoField() {return cy.get ('[data-qa="card-number"]')}
    cvcField() {return cy.get('[data-qa="cvc"]')}
    expirationMonthField() {return cy.get('[data-qa="expiry-month"]')}
    expirationYearField() {return cy.get('[data-qa="expiry-year"]')}
    confirmOrderBtn() {return cy.get('[data-qa="pay-button"]')}
    successInfo() {return cy.contains('.title.text-center', 'Order Placed!')}
    continueBtn() {return cy.get('[data-qa="continue-button"]')}

    placeOrder(name, cardNo, cvc, expMonth, expYear) {
        this.commentField().click().clear().type('TEST')
        this.placeOrderBtn().should('be.visible').click()
        this.paymentInformation().should('be.visible')
        this.nameOnCardField().should('be.visible').type(name)
        this.cardNoField().should('be.visible').type(cardNo)
        this.cvcField().should('be.visible').type(cvc)
        this.expirationMonthField().should('be.visible').type(expMonth)
        this.expirationYearField().should('be.visible').type(expYear)
        this.confirmOrderBtn().should('be.enabled').click()
        this.successInfo().should('be.visible')
        this.continueBtn().click()
        productsPage.itemList().should('be.visible')
    }

}
export default new CheckoutPage