import {getSidePanel, getToolbar, getToolbarTitle, getWelcome} from '../support/app.po';

describe('ide-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct layout', () => {
    // Custom command example, see `../support/commands.ts` file
//    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getToolbar();
    getToolbarTitle().contains('Dont-code Builder');
    getSidePanel();
    getWelcome();
  });
});
