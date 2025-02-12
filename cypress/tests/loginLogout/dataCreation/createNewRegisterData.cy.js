import data from "../../../support/data.cy"

describe('Create new data for user registration', () => {

    it('Generates random username and email', () => {
        data.generateRandomUsername()
        data.generateRandomEmail()
    })

})