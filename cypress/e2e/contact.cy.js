describe('Contact Us Page', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/page-three')
  });

  it('renders', () => {
    cy.visit('localhost:3000/page-three')
  })

  it('displays the "Contact Us" heading', () => {
    cy.contains('Contact Us').should('exist');
  });

 
  it('should update the slider value on change', () => {
    cy.get('.MuiSlider-thumb').should('exist');
    // locate the slider element and move the slider to the right
    cy.get('[aria-labelledby="urgency-slider"]')
      .trigger('mousedown', { which: 1, pageX: 0, pageY: 0, force: true })
      .trigger('mousemove', { which: 1, pageX: 1000, pageY: 0,force: true})
      .trigger('mouseup', { force: true });

    // check that the slider value has been updated
    cy.get('[aria-labelledby="urgency-slider"]')
      .should('have.attr', 'aria-valuenow', '50');
  });

  it('displays two apartment images side by side', () => {
    cy.get('img[alt="apartment"]').should('exist').and('have.attr', 'width', '25%');
    cy.get('img[alt="building"]').should('exist').and('have.attr', 'width', '25%');
  });

  it('allows the user to enter their name, email, and message', () => {
    cy.get('#name').type('John Doe').should('have.value', 'John Doe');
    cy.get('#email').type('john.doe@example.com').should('have.value', 'john.doe@example.com');
    cy.get('#message').type('This is a test message.').should('have.value', 'This is a test message.');
  });

  it('allows the user to submit the form', () => {
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#message').type('This is a test message.');
    cy.get('button[type="submit"').should('contain','Send').click();
    cy.url().should('contain', '/');
  });

  it('displays a "Previous Page" button that links to page two', () => {
    cy.contains('Previous Page').should('exist').click();
    cy.url().should('contain', '/page-two');
  });


})