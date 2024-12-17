// describe('Login Test for Claim Portal', () => {
//   const users = [
//     { role: 'HC', username: 'charles.estevez', password: '123456' },
//     { role: 'Staff 1', username: 'nancy.martin', password: '123456' },
//     { role: 'Staff 2', username: 'cecil.anderson', password: '123456' },
//     { role: 'Superadmin', username: 'superadmin.company', password: '123456' },
//     { role: 'Finance', username: 'angela.garcia', password: '123456' }
//   ];

//   users.forEach((user) => {
//     it(`Login as ${user.role}`, () => {
//       cy.viewport(1920, 1080);
//       cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

//       cy.get('body').then(($body) => {
//           console.log('HTML Body:', $body.html());
//       });

//       cy.get('#Input_UsernameVal').should('exist').then((el) => {
//           console.log('Username Input:', el);
//       });

//       cy.get('#Input_UsernameVal').type(user.username);
//       cy.get('#Input_PasswordVal').type(user.password);
//       cy.get('button[type="submit"]').click();

//       cy.url().then((url) => {
//           console.log('Current URL:', url);
//       });

//       });
//     });
//   });

describe('Login Test for Claim Portal', () => {
  const users = [
    { role: 'HC', username: 'charles.estevez', password: '123456' },
    { role: 'Staff 1', username: 'nancy.martin', password: '123456' },
    { role: 'Staff 2', username: 'cecil.anderson', password: '123456' },
    { role: 'Superadmin', username: 'superadmin.company', password: '123456' },
    { role: 'Finance', username: 'angela.garcia', password: '123456' }
  ];

  users.forEach((user) => {
    it(`Login as ${user.role}`, () => {
      cy.viewport(1920, 1080);
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal');

      // Verify that the username input exists
      cy.get('#Input_UsernameVal').should('exist');

      // Type the username and password
      cy.get('#Input_UsernameVal').type(user.username);
      cy.get('#Input_PasswordVal').type(user.password);

      // Submit the login form
      cy.get('button[type="submit"]').click();

      // Wait for the dashboard to load (you can adjust the wait time if necessary)
      cy.wait(5000);

      // Check if the URL contains '/Dashboard'
      cy.url().should('include', '/Dashboard');

      // Verify that the Dashboard is visible by checking a specific element
      cy.contains('Dashboard').should('be.visible');
      
      // Optionally, log the current URL to confirm redirection
      cy.url().then((url) => {
        console.log('Current URL:', url);
      });

    });
  });
});
