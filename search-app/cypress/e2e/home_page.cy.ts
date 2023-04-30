/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

describe('Home page E2E', () => {
  it('should have menu', () => {
    cy.get('a.header-link').should('have.length', 3);
    cy.get('a.header-link.active').should('have.text', 'Home');
    cy.get('a.header-link').last().should('have.text', 'About Us');
  });

  it('should have HOME in current location', () => {
    cy.get('div.location').should('have.text', 'You are on HOME page');
  });

  it('should have a form', () => {
    cy.get('form').should('have.class', 'search-bar');
    cy.get('.search-input')
      .invoke('attr', 'placeholder')
      .should('contain', 'search characters by name');
  });

  it('should have 20 cards by default', () => {
    cy.get('.card').should('have.length', 20);
  });

  it('should have "Rick" on all 20 cards, when Rick is searched', () => {
    cy.get('input.search-input').type('rick');
    cy.get('button.search-btn').click();
    cy.wait(1000);
    cy.get('#amount-result').should('have.text', 'Found 20 characters');
    cy.get('.card__name').filter(':contains(Rick)').should('have.length', 20);
  });

  it('should have no card', () => {
    cy.get('input.search-input').type('hgfhgfhg');
    cy.get('button.search-btn').click();
    cy.wait(1000);
    cy.get('#amount-result').should('have.text', 'Not found. Try another query');
  });

  it('should have modal card, when card is clicked ', () => {
    cy.get('.card').first().click();
    cy.get('.card-modal').should('be.visible');
    cy.get('.card-modal__name').contains('Rick Sanchez');
    cy.get('.card-modal__status').contains('alive::male');
    cy.get('.card-modal__type').contains('Human');
    cy.get('.card-modal__origin').last().contains('Rickmurai Jack');
  });

  it('should close modal card, when close button was clicked ', () => {
    cy.get('.card').first().click();
    cy.get('.card-modal').should('be.visible');
    cy.get('.card-modal__close').click();
    cy.get('.card-modal').should('not.be.visible');
  });

  it('should close modal card, when black window was clicked ', () => {
    cy.get('.card').first().click();
    cy.get('.card-modal').should('be.visible');
    cy.get('.environment').click();
    cy.get('.card-modal').should('not.be.visible');
  });
});
