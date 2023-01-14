Cypress.Commands.add('loginByUserAccount', (account) => {
  cy.visit('https://member.ithome.com.tw/'); // 進入登入頁
  cy.get('#account').clear().type(account);
  cy.get('#password').clear().type(Cypress.env('password'));
  cy.get('.btn-agree').click({ force: true });
  cy.get('#navbar').contains(account).should('be.visible');
});
