import {
  getApplicationOption,
  getApplicationSelect,
  getItemScreenOption,
  getItemSelect
} from '../support/main-editor.po';


describe('main-editor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct text', () => {
    // Custom command example, see `../support/commands.ts` file
//    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file

    getApplicationSelect().click();
    getApplicationOption().contains('application');
    getApplicationOption().click();
    getItemSelect().click();
    getItemScreenOption().contains('screens');
    getItemScreenOption().click();
  });
});
