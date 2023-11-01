describe('Search Results Page', () => {
  it('displays 10 results and correct pagination number', () => {
    cy.visit('http://localhost:3000/searchResults?page=statista&p=11')
    cy.get('.rounded-md').should('have.length', 10)
    cy.scrollTo('bottom')
    cy.get('span.bg-white').should('contain', '11/20')
  })
})

  