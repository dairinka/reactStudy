/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/form');
});

describe('Home page E2E', () => {
  it('should have menu', () => {
    cy.wait(1000);
    cy.get('a.header-link').should('have.length', 3);
    cy.get('a.header-link.active').should('have.text', 'Form');
    cy.get('a.header-link').last().should('have.text', 'About Us');
  });

  it('should have HOME in current location', () => {
    cy.get('div.location').should('have.text', 'You are on FORM page');
  });

  it('should have a form', () => {
    cy.wait(1000);
    cy.get('form').should('have.class', 'form');
    cy.get('#user-name').invoke('attr', 'placeholder').should('contain', 'Tony');
    cy.get('#user-email').invoke('attr', 'placeholder').should('contain', 'example@gmail.com');
  });

  it('should show error message ', () => {
    cy.wait(2000);
    cy.get('button[type=submit]').should('be.visible');
    cy.get('.form').submit();
    cy.get('.error-message').should('have.length', 6);
    cy.get('.error-message').first().should('have.text', 'Please select the city');
    cy.get('.error-message').last().should('have.text', 'Please upload the file');
  });

  it('should clear error message ', () => {
    cy.wait(2000);
    cy.get('button[type=submit]').should('be.visible');
    cy.get('.form').submit();
    cy.get('.error-message').first().should('have.text', 'Please select the city');
    cy.get('#city-select').first().select('Gaeta').should('have.value', 'Gaeta');
    cy.get('.select-block.form-block').contains('.error-message').should('not.exist');
  });
});
