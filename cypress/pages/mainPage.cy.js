class MainPage {

    siteLogo() { return cy.get('.logo.pull-left') }
    homeBtn() { return cy.get('.fa.fa-home') }
    productsBtn() { return cy.get('.material-icons.card_travel') }
    cartBtn() { return cy.get('li a[href="/view_cart"]').first() }
    signupLoginBtn() { return cy.get('a[href="/login"]') }
    logoutBtn() { return cy.get('a[href="/logout"]') }
    loginForm() { return cy.get('.login-form') }
    navigationBar() { return cy.get('.nav.navbar-nav') }

    openMainPage() {
        cy.visit('/')
        this.siteLogo().should('be.visible')
        this.navigationBar().should('be.visible')
    }

    logout() {
        this.logoutBtn().should('be.visible').click()
        this.loginForm().should('be.visible')
    }

}
export default new MainPage