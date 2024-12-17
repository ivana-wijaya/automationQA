describe('Set Invoice to Unpaid', () => {
  it('should login, navigate to Invoices, open an invoice, and set status to Unpaid', () => {
    cy.viewport(1920, 1080);

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

    cy.get('#Input_UsernameVal', { timeout: 10000 }) 
      .should('be.visible')
      .type('charles.estevez');
    cy.get('#Input_PasswordVal', { timeout: 10000 })
      .should('be.visible')
      .type('123456');
    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/Dashboard');
    cy.contains('Invoices', { timeout: 10000 }) 
      .should('be.visible')
      .click();

    cy.url().should('include', '/Invoices');
    cy.contains('Invoices', { timeout: 10000 }).should('be.visible');

    cy.contains('123456', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.url().should('include', '/ClaimPortal'); 
    cy.contains('Overview', { timeout: 10000 }).should('be.visible');

    cy.contains('Set Unpaid', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('Unpaid', { timeout: 10000 })
      .should('be.visible')
      .log('Status successfully updated to Unpaid.');
  });
});
