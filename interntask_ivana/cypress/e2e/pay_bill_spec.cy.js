describe('Pay Bill', () => {
  it('should login, navigate to Invoices, open an unpaid invoice, and pay the bill', () => {
    cy.viewport(1920, 1080);

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

    cy.get('#Input_UsernameVal', { timeout: 10000 })
      .should('be.visible')
      .type('angela.garcia');
    cy.get('#Input_PasswordVal', { timeout: 10000 })
      .should('be.visible')
      .type('123456');
    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/Dashboard');
    cy.contains('Invoices', { timeout: 10000 }).should('be.visible').click();

    cy.url().should('include', '/Invoices');
    cy.contains('Invoices', { timeout: 10000 }).should('be.visible');

    cy.contains('td', 'Unpaid') 
      .parent() 
      .find('a') 
      .click(); 

    cy.url().should('include', '/ClaimPortal/InvoiceDetail');
    cy.contains('Overview', { timeout: 10000 }).should('be.visible');
    cy.contains('Unpaid', { timeout: 10000 }).should('be.visible');

    cy.contains('Pay bill', { timeout: 10000 }).should('be.visible').click();

    cy.contains('Credit card details', { timeout: 10000 }).should('be.visible');

    cy.get('#Input_HolderName')
      .should('be.visible')
      .type('Angela Garcia');

    cy.get('#Input_CardNumber')
      .should('be.visible')
      .type('4111111111111111');

    cy.get('div#Input_ExpMonth')
      .click();
    cy.get('div#Input_ExpMonth')
      .find('span')
      .contains('12')
      .click();

    cy.get('div#Input_ExpYear')
      .click();
    cy.get('div#Input_ExpYear')
      .find('span')
      .contains('2025')
      .click();
    cy.get('input#Input_CVV')
      .should('be.visible')
      .type('123');

    cy.contains('Pay', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('Paid', { timeout: 10000 }).should('be.visible');
    cy.log('Payment successfully completed.');
  });
});
