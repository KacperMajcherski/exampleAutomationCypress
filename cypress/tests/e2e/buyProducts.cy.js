import checkoutPage from "../../pages/checkoutPage.cy"
import loginPage from "../../pages/loginPage.cy"
import mainPage from "../../pages/mainPage.cy"
import productsPage from "../../pages/productsPage.cy"
import shoppingCartPage from "../../pages/shoppingCartPage.cy"
import data from "../../support/data.cy"

let username
let email
let password
let paymentInfo

describe('Login to the online store, buy some products, then logout', () => {

    before(() => {
        data.loadUserData().then((userData) => {
            username = userData.testUser1.name
            email = userData.testUser1.email
            password = userData.testUser1.password
            paymentInfo = userData.testUser1.paymentInfo
        })

    })

    it('Time to buy some unneccessary stuff!', () => {
        mainPage.openMainPage()
        mainPage.signupLoginBtn().should('be.visible').click()
        loginPage.login(email, password, username)
        mainPage.productsBtn().should('be.visible').click()
        productsPage.itemList().should('be.visible')
        productsPage.addItemToCart('Frozen Tops For Kids')
        productsPage.addItemToCart('Blue Top')
        productsPage.addItemToCart('Winter Top')
        shoppingCartPage.proceedToCheckout()
        checkoutPage.placeOrder(...paymentInfo)
        mainPage.logout()
    })
})