// 告訴 TypeScript 這個不是 Jest 而是 Cypress。

describe('測試 it 邦操作', () => {
  it('輸入帳密後應該要可以登入登出', () => {
    cy.loginByUserAccount('mobilesuit0922');
    cy.get('.navbar-right > li > a').contains('登出').click({ force: true });
  });

  it('點擊 it 鐵人賽文章的下一篇', () => {
    cy.visit('https://ithelp.ithome.com.tw/articles/10265802');
    cy.get('.text-right .article-series-page__title').click();
    cy.url().should('contains', 'https://ithelp.ithome.com.tw/articles/10265803');
  });
});
