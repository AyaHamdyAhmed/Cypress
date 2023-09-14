
export function navigate() {
    cy.visit('https://neurocpweb.azurewebsites.net/account/sign-in')
}

export function loginWithValidUsernameAndPassword(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.actions > .p-element').click()
}

export function validateLoginSuccessfully(expectedTxt) {
    cy.get('h3.text', { timeout: 10000 }).should('have.text', expectedTxt)
}