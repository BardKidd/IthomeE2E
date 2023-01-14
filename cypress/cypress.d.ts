export {};

declare global {
  namespace Cypress {
    interface Chainable {
      loginByUserAccount(account: string): Chainable<string>;
    }
  }
}
