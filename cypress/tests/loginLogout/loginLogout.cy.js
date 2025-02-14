import loginPage from "../../pages/loginPage.cy"
import mainPage from "../../pages/mainPage.cy"
import data from "../../support/data.cy"

let username
let email
let password

describe('Login test', () => {

    before(() => {
        data.loadUserData().then((userData) => {
            username = userData.testUser1.name
            email = userData.testUser1.email
            password = userData.testUser1.password
        })
    })

    it('Login to the online shop, then logout', () => {
        mainPage.openMainPage()
        mainPage.signupLoginBtn().should('be.visible').click()
        loginPage.login(email, password, username)
        mainPage.logout()
    })

})