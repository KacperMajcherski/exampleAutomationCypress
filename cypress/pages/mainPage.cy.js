class MainPage {

    siteLogo() { return cy.get('.logo.pull-left') }
    homeBtn() { return cy.get('.fa.fa-home') }
    productsBtn() { return cy.get('.material-icons.card_travel') }
    cartBtn() { return cy.get('.fa.fa-shopping-cart') }
    signupLoginBtn() { return cy.get('.fa.fa-lock') }
    loginForm() { return cy.get('.login-form') }
    navigationBar() { return cy.get('.nav.navbar-nav') }

    openMainPage() {
        cy.visit('/')
        this.siteLogo().should('be.visible')
        this.navigationBar().should('be.visible')
    }

    clickSignupLoginBtn() {
        this.signupLoginBtn().should('be.visible').click()
        this.loginForm().should('be.visible')
    }

}
export default new MainPage