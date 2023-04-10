describe('Navbar tests', () => {

  beforeEach(() => {
    cy.visit('localhost:3000')
  });

  it('renders', () => {
    cy.get('.MuiToolbar-root').should('exist')
  })

  it('has a title', () => {
    cy.get('a').should('contain', 'SVVT Apartments')
  })

  it('has navigate buttons - Home', () => {
    cy.get('a').should('contain', 'Home').get('#nav-home').click()
    cy.url().should('include', '/')
  })

  it('has navigate buttons - apply', () => {
    cy.get('a').should('contain', 'Apply').get('#nav-apply').click()
    cy.url().should('include', '/')
  })

  it('has navigate buttons - Contact', () => {
    cy.get('a').should('contain', 'Home').get('#nav-contact').click()
    cy.url().should('include', '/')
  })

})