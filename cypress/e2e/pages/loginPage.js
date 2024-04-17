class loginPage {
    welser = {
        inputUser: () => cy.get('[placeholder="Username"]'),
        inputPassword: () => cy.get('[placeholder="Password"]'),
        buttonSubmit: () => cy.get('[type="submit"]'),
        inputFile: () => cy.get('[type="file"]')
    }
    writeUserName(username) {
        this.welser.inputUser().type(username)
    }
    writePassword(option) {
        this.welser.inputPassword().type(option)
    }
    writeUserNamePassword(gonazalito,kchero){
        this.writeUserName(gonazalito)
        this.writePassword(kchero)
    }
    clickButton() {
        this.welser.buttonSubmit().should('be.visible').and('contain', 'Login').click().wait(1000)
    }
    selectFileCypress(){
        this.welser.inputFile().selectFile('cypress/fixtures/ReciboLuzOficinaAdministrativa.pdf', { force: true })
    }
}
export default new loginPage()