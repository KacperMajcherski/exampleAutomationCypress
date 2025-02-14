import mainPage from "./mainPage.cy"
import shoppingCartPage from "./shoppingCartPage.cy"

class ProductsPage {

    //Use the constructor to map full names to product IDs, which can be used in the selector
    constructor() {
        this.productMap = {
            "Frozen Tops For Kids": "13",
            "Blue Top": "1",
            "Winter Top": "5"
        }
    }
   
    itemList() { return cy.get('.features_items') }
    item(name) { return cy.get('.col-sm-4').contains(name) }
    addItemToCartBtn(itemId) { return cy.get(`[data-product-id="${itemId}"]`).first() }
    itemAddedInfo() { return cy.contains('.modal-title.w-100', 'Added!') }
    continueShoppingBtn() { return cy.contains('.btn.btn-success.close-modal.btn-block', 'Continue Shopping') }

    addItemToCart(item) {
        const itemId = this.productMap[item]
        //Add the item by using the ID in the selector
        this.addItemToCartBtn(itemId).click({force:true})
        this.itemAddedInfo().should('be.visible')
        this.continueShoppingBtn().should('be.visible').click()
        mainPage.cartBtn().should('be.visible').click()
        //Check by name if the item has been added to the cart
        shoppingCartPage.checkIfItemInCart(item)
        mainPage.productsBtn().click()
        this.itemList().should('be.visible')
    }
}
export default new ProductsPage