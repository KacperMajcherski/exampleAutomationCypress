import data from "../support/data.cy"

class RegisterPage {

    registerForm() { return cy.get('.login-form') }
    genderMaleRadioBtn() { return cy.get('#id_gender1') }
    nameField() { return cy.get('#name') }
    emailField() { return cy.get('#email') }
    passwordField() { return cy.get('#password') }
    dobDaySelect() { return cy.get('#days') }
    dobMonthSelect() { return cy.get('#months') }
    dobYearSelect() { return cy.get('#years') }

    firstNameField() { return cy.get('#first_name') }
    lastNameField() { return cy.get('#last_name') }
    companyField() { return cy.get('#company') }
    addressField() { return cy.get('#address1') }
    countrySelect() { return cy.get('#country') }
    stateField() { return cy.get('#state') }
    cityField() { return cy.get('#city') }
    zipcodeField() { return cy.get('#zipcode') }
    mobileNumberField() { return cy.get('#mobile_number') }
    createAccoundBtn() { return cy.get('[data-qa="create-account"]') }
    accountCreatedInfo() {return cy.get('[data-qa="account-created"]')}
    continueBtn() {return cy.get('[data-qa="continue-button"]')}

    fillRegistrationForm(password, birthDay, birthMonth, birthYear, firstName, lastName, companyName, address, country, state, city, zipcode, mobileNumber) {
        let username
        let email
        data.loadGeneratedUserData().then((data) => {
            username = data.username
            email = data.email
        })
        this.registerForm().should('be.visible').within(() => {
            this.genderMaleRadioBtn().should('be.visible').click()
            this.nameField().should('be.visible').should('have.value', username)
            this.emailField().should('be.visible').should('have.value', email).should('be.disabled')
            this.passwordField().should('be.visible').click().clear().type(password)
            this.dobDaySelect().select(birthDay)
            this.dobMonthSelect().select(birthMonth)
            this.dobYearSelect().select(birthYear)
            this.firstNameField().should('be.visible').click().clear().type(firstName)
            this.lastNameField().should('be.visible').click().clear().type(lastName)
            this.companyField().should('be.visible').click().clear().type(companyName)
            this.addressField().should('be.visible').click().clear().type(address)
            this.countrySelect().should('be.visible').select(country)
            this.stateField().should('be.visible').click().clear().type(state)
            this.cityField().should('be.visible').click().clear().type(city)
            this.zipcodeField().should('be.visible').click().clear().type(zipcode)
            this.mobileNumberField().should('be.visible').click().clear().type(mobileNumber)
            this.createAccoundBtn().should('be.enabled').click()
        })
    }

}
export default new RegisterPage