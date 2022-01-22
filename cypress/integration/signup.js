/* eslint-disable quotes */
/* eslint-disable no-undef */
describe('Sign-up Page', () => {
  beforeEach(()=>{
    cy.visit('/');
  });
  
  it("renders correctly", () => {
    cy.get('#sign-up-page');
  });

  it("has a sign up form", () => {
    cy.get('#signup-form');
  });

  it('has a submit button', () => {
    cy.get('button');
  });

  it('allows you to fill out the form', () =>{
    const input = 'test';
    cy.get('#first-name')
      .type(input)
      .should('have.value', input);
    
    cy.get('#last-name')
      .type(input)
      .should('have.value', input);
    
    cy.get('#email')
      .type(input)
      .should('have.value', input);

    cy.get('#password')
      .type(input)
      .should('have.value', input);
    
    cy.get('#password2')
      .type(input)
      .should('have.value', input);
  });

  it('allows you to submit the form', () =>{
    cy.get('.form-submit-button')
      .click();
  });
});