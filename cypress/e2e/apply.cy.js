describe('Apply Page', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/page-two')
  });

  it('renders', () => {
    cy.visit('localhost:3000/page-two')
  })

  //test for form and  alignment
  it('has a form - center aligned', () => {
    cy.get('#form-div').should('have.attr', 'align', 'center')
    cy.get('form').should('exist')
  })

  //check title size
  it('has a title with h1 size', () => {
    cy.get('h1').should('have.css', 'font-size', '32px')
  })

  describe('Name field', () => {
    it('can be filled out', () => {
      cy.get('input[name="name"]')
        .type('John Doe')
        .should('have.value', 'John Doe')
    })
  })
  
  describe('Gender field', () => {
    it('can be selected', () => {
      cy.get('input[name="gender"][value="male"]')
        .check()
        .should('be.checked')
      cy.get('input[name="gender"][value="female"]')
        .check()
        .should('be.checked')
    })
  })

  describe('About me field', () => {
    it('can be filled out', () => {
      cy.get('textarea')
        .type('I enjoy hiking and reading.')
        .should('have.value', 'I enjoy hiking and reading.')
    })
  })

  describe('load image and test attributes', () => {
    it('loads successfully', () => {
      cy.get('img')
        .should('have.attr', 'src', 'https://cdn3.iconfinder.com/data/icons/real-estate-27/65/_Apartment_Building-512.png')
        .should('have.attr', 'alt', 'placeholder')
        .should('have.attr', 'width', '600')
        .should('have.attr', 'height', '500')
    })
  })

  describe('Scrollable div', () => {
    it('scrolls properly', () => {
      cy.get('div[style="height: 200px; overflow: scroll;"]')
        .scrollTo('bottom')
        .scrollTo('top')
    })
  })
  
  
})