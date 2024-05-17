/// <reference types="cypress" />
import { LoginPage } from "../pageObjects/pages/LoginPage"
import { ProductsPage } from "../pageObjects/pages/ProductsPage"
import { CartPage } from "../pageObjects/pages/CartPage"

describe('SauceDemo Checkout Page Tests', () => {
    

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Adding and item to the cart', () => {
        LoginPage.openLoginPage()
        LoginPage.inputUsername('standard_user')
        LoginPage.inputPassword()
        LoginPage.clickLoginButton()
        ProductsPage.productsPageIsVisible()

        ProductsPage.addFirstItemToTheCart()
        cy.get('[data-test="shopping-cart-link"]').click()
        CartPage.cartPageIsVisible()
        CartPage.verifyFirstAddedItem()
    })
    
  })