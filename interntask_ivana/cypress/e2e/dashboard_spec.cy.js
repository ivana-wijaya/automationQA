describe('Dashboard Amount Visibility for All Roles', () => {
  const users = [
    { role: 'HC', username: 'charles.estevez', password: '123456' },
    { role: 'Staff 1', username: 'nancy.martin', password: '123456' },
    { role: 'Staff 2', username: 'cecil.anderson', password: '123456' },
    { role: 'Superadmin', username: 'superadmin.company', password: '123456' },
    { role: 'Finance', username: 'angela.garcia', password: '123456' }
  ];

  users.forEach((user) => {
    it(`should login as ${user.role} and verify amounts on the Dashboard`, () => {
      cy.viewport(1920, 1080);

      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

      cy.get('#Input_UsernameVal', { timeout: 10000 })
        .should('be.visible')
        .type(user.username);
      cy.get('#Input_PasswordVal', { timeout: 10000 })
        .should('be.visible')
        .type(user.password);
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/Dashboard');
      
      cy.get('[id="EnergyKPICards_TodayUsage"]')
        .find('span')
        .should('be.visible')
        .and(($el) => {
          const text = $el.text();
          expect(text).to.match(/^\$\d+(,\d{3})*(\.\d{2})?$/);
        });

      cy.get('[id="EnergyKPICards_TodayEstimatedUsage"]')
        .find('span')
        .should('be.visible')
        .and(($el) => {
          const text = $el.text();
          expect(text).to.match(/^\$\d+(,\d{3})*(\.\d{2})?$/);
        });

      cy.get('[id="EnergyKPICards_TodayCost"]')
        .find('span')
        .should('be.visible')
        .and(($el) => {
          const text = $el.text();
          expect(text).to.match(/^\$\d+(,\d{3})*(\.\d{2})?$/); 
        });

      cy.log(`Dashboard amounts are correctly displayed for ${user.role}.`);
    });
  });
});
