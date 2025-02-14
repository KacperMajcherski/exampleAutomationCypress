import mainPage from "./mainPage.cy"
import registerPage from "./registerPage.cy"

class LoginPage {

    loginEmailField() { return cy.get('input[data-qa="login-email"]') }
    loginPasswordField() { return cy.get('input[data-qa="login-password"]') }
    loginBtn() { return cy.get('button[data-qa="login-button"]') }

    signupNameField() { return cy.get('input[data-qa="signup-name"]') }
    signupEmailField() { return cy.get('input[data-qa="signup-email"]') }
    signupBtn() { return cy.get('button[data-qa="signup-button"]') }

    login(email, password, username) {
        this.loginEmailField().should('be.visible').click().clear().type(email)
        this.loginPasswordField().should('be.visible').click().clear().type(password)
        this.loginBtn().should('be.enabled').click()
        mainPage.navigationBar().should('be.visible').should('contain', username)
    }

    registerNewUser(username, email, password, birthDay, birthMonth, birthYear, firstName, lastName, companyName, address, country, state, city, zipcode, mobileNumber) {
        this.signupNameField().click().clear().type(username)
        this.signupEmailField().click().clear().type(email)
        this.signupBtn().should('be.enabled').click()
        registerPage.fillRegistrationForm(password, birthDay, birthMonth, birthYear, firstName, lastName, companyName, address, country, state, city, zipcode, mobileNumber)
        registerPage.accountCreatedInfo().should('be.visible')
        registerPage.continueBtn().should('be.visible').click()
        mainPage.navigationBar().should('be.visible').should('contain', username)
    }

}
export default new LoginPage