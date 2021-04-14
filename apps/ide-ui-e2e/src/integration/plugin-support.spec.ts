import {
  getAppNameInput,
  getEditorMenu,
  getIndexScreenComponentEntity,
  getIndexScreenComponentEntityValue,
  getIndexScreenComponentType,
  getIndexScreenEntity,
  getIndexScreenType,
  selectPopupChoiceWithText
} from "../support/main-editor.po";


describe('plugin-support', () => {
  beforeEach(() => cy.visit('/'));

  it('should support dynamic screen properties', () => {
//    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexScreenComponentType('a','a').click();
    selectPopupChoiceWithText('edit');
    getIndexScreenComponentEntity('a','a').type('testEntity');

    getIndexScreenType('a').click();
    selectPopupChoiceWithText('freeform');
    getAppNameInput().click();
    getIndexScreenType('a').click();
    selectPopupChoiceWithText('list');
    getIndexScreenEntity ('a').type('newTestEntity');

    getIndexScreenType('a').click();
    selectPopupChoiceWithText('freeform');

    getIndexScreenComponentEntityValue('a','a').should('equal','testEntity');

  });
});
