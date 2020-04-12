import {
  getAppMainActionOption,
  getAppMainActionSelect, getAppMainEntityName, getAppNameInput,
  getPropNameOptionName,
  getPropNameSelect
} from '../support/main-editor.po';


describe('main-editor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct text', () => {
    // Custom command example, see `../support/commands.ts` file
//    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file

    getAppNameInput().type('To Do App');
    getAppMainEntityName().type('ToDo');
    getAppMainActionSelect().click();
    getAppMainActionOption().contains('view');
    getAppMainActionOption().click();
    getPropNameSelect().click();
    getPropNameOptionName().contains('name');
    getPropNameOptionName().click();
  });
});
