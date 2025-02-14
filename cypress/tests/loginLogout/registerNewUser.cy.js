import loginPage from "../../pages/loginPage.cy"
import mainPage from "../../pages/mainPage.cy"
import data from "../../support/data.cy"

let username
let email
let dataForRegistration

describe('Register a new user using randomly generated email and username', () => {

    before(() => {
        data.loadGeneratedUserData().then((registrationData) => {
            username = registrationData.username
            email = registrationData.email
            dataForRegistration = registrationData.dataForRegistration
        })
    })

    it('Open the site and register a new user', () => {
        mainPage.openMainPage()
        mainPage.signupLoginBtn().should('be.enabled').click()
        loginPage.registerNewUser(username, email, ...dataForRegistration)
    })

})
