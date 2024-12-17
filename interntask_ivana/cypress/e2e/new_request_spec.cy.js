describe('New Request Test for Multiple Staff in Desktop View', () => {
  const staffAccounts = [
    { username: 'nancy.martin', password: '123456' },
    { username: 'cecil.anderson', password: '123456' },
  ];

  staffAccounts.forEach((staff) => {
    it(`should login as ${staff.username}, navigate to Invoice, and open New Request`, () => {
      cy.viewport(1920, 1080);

      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

      cy.get('#Input_UsernameVal', { timeout: 10000 }).type(staff.username);
      cy.get('#Input_PasswordVal', { timeout: 10000 }).type(staff.password);
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/Dashboard');
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible');

      cy.contains('Invoices', { timeout: 10000 }).click();
      cy.url().should('include', '/Invoices');
      cy.contains('Invoices', { timeout: 10000 }).should('be.visible');

      cy.get('button').contains('New Request', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });

      cy.wait(2000);
      cy.get('body').then(($body) => {
        cy.log($body.html());
      });

      cy.get('form, .modal-content, #new-request-form', { timeout: 10000 })
        .should('be.visible')
        .log('New Request form is now visible.');
    });
  });
});
