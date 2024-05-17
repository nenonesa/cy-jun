import { BasePage } from "../BasePage";

const PAGE_TITLE = '[data-test="title"]'
const ITEM_TITLES = '[data-test="inventory-item-name"]'

export class CartPage extends BasePage {
    
    static cartPageIsVisible() {
        BasePage.hasText(PAGE_TITLE, 'Your Cart')
    }

    static verifyFirstAddedItem() {
        cy.get(ITEM_TITLES)
        .first()
        .then((itemName) => {
            cy.get('@addedItemName').then((elementFromMemory) => {
                cy.wrap(itemName.text()).should('equal', elementFromMemory)
            })
            //cy.wrap(itemName.text()).as('addedItemName')
        })
    }

}