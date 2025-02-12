import loginPage from "../../pages/loginPage.cy"
import mainPage from "../../pages/mainPage.cy"
import data from "../../support/data.cy"

let username
let email
const registrationData = ["Start123!", "26", "September", "1999", "Kacper", "Tester", "TestCompany", "Test Address 26", "India", "Wielkopolskie", "Bombay", "60-680", "123456789123"]

describe('Register a new user using randomly generated email and username', () => {

    before(() => {
        data.loadUserData().then((data) => {
            username = data.username
            email = data.email
        })
    })

    it('Open the site and register a new user', () => {
            mainPage.openMainPage()
            mainPage.clickSignupLoginBtn()
            loginPage.registerNewUser(username, email, ...registrationData)
    })

})
