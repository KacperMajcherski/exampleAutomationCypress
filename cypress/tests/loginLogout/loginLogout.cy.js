import mainPage from "../../pages/mainPage.cy"

describe('Login test', () => {
    
    it('Login to the online shop', () => {
        mainPage.openMainPage()
        mainPage.clickSignupLoginBtn()
        
    })

})