import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";
 
Given('I open Orange Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
 
When('I write {string} and {string}', (username, password) => {
    loginPage.writeUserNamePassword(username,password)
})
 
Then('I click in the button', () => {
    loginPage.clickButton()
})
Then('Select files', () => {
 
    // cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    // cy.get('.orangehrm-action-header > .oxd-button').click()
    // loginPage.selectFileCypress()
   
})