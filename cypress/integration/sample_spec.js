// initialize a test
// describe('My First Test', () => {
//   // description of what it should do
//   it('clicks the link "type"', () => {
//     // setup application state
//     cy.visit('https://example.cypress.io')
//     // find the first dom element that contains 'type' and then click it
//     cy.contains('type').click()
//     // Should be on a new URL which includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

describe('App Initializes', () => {
  it('loads the app', ()=> {
    cy.visit('http://localhost:3000/')
    cy.contains('Learn React')
  })
})