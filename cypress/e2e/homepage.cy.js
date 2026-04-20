describe('Home page', () => {
  it('opens home page in Firefox', () => {
    cy.visit('/')
    cy.contains('h1', 'Do more!').should('be.visible')
  })
})
