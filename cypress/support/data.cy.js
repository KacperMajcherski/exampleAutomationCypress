class Data {

  createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  generateRandomUsername() {
    const randomUsername = this.createRandomString(12);
    cy.readFile('cypress/fixtures/generatedUserdata.json', { timeout: 5000 }).then((data = {}) => {
      const updatedData = { ...data, username: randomUsername }
      cy.writeFile('cypress/fixtures/generatedUserdata.json', updatedData)
    })
    return cy.wrap(randomUsername);
  }

  generateRandomEmail() {
    cy.visit("https://10minutemail.net").then(() => {
      cy.get('h2:contains("Welcome to 10 Minute Mail")').should('be.visible')
      return cy.get('#fe_text')
        .should('be.visible')
        .invoke('val')
        .then((emailAddress) => {
          cy.readFile('cypress/fixtures/generatedUserdata.json', { timeout: 5000 }).then((data = {}) => {
            const updatedData = { ...data, email: emailAddress }
            cy.writeFile('cypress/fixtures/generatedUserdata.json', updatedData)
          })
          return cy.wrap(emailAddress)
        })
    })
  }

  loadUserData() {
    return cy.readFile('cypress/fixtures/generatedUserdata.json')
  }


}
export default new Data