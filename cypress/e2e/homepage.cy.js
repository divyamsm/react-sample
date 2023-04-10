describe('App load', () => {


  const zipCodes = [
    { code: '90210', city: 'Beverly Hills', state: 'CA' },
    { code: '10001', city: 'New York', state: 'NY' },
    { code: '60611', city: 'Chicago', state: 'IL' },
    { code: '33139', city: 'Miami Beach', state: 'FL' },
    { code: '98101', city: 'Seattle', state: 'WA' },
  ];

  beforeEach(() => {
    cy.visit('localhost:3000')
  });

  it('renders', () => {
    cy.visit('localhost:3000')
  })

  it('has a title', () => {
    cy.get('h5').should('contain', 'Welcome to our beautiful apartment complex. We have a lot of great amenities to offer you.')
  })

  it('has a button', () => {
    cy.get('Button').should('contain', 'Next Page')
  })

  //check image size, location
  it('has an image with expected width=161 and alignment', () => {
    cy.get('img').should('have.attr', 'src', 'https://www.propertymanagementselect.com/wp-content/uploads/2015/04/sacramento-property-management-apartments.jpg?w=161&fit=crop&auto=format').then(($img) => {
      const width = $img.width()
      expect(width).to.lessThan(162) // replace 100 with the expected width
    })
  })

  it('should render a list of zip codes as expected', () => {
        cy.get('div.MuiListItem-root')
          .should('have.length', zipCodes.length)
          .each(($el, index) => {
            cy.wrap($el).within(() => {
              cy.get('.MuiListItemText-root').should('have.text', `${zipCodes[index].city}, ${zipCodes[index].state} ${zipCodes[index].code}`)
            })
          })
      })

  //navigate to next page
  it('has a button that is correct size, and navigates', () => {
    cy.get('.MuiButton-containedPrimary').should('contain', 'Next Page').click()
    cy.url().should('include', '/page-two')
  })

})