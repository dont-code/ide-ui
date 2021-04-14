import {
  getAppNameInput,
  getEditorMenu,
  getIndexScreenComponentEntity,
  getIndexScreenComponentEntityValue,
  getIndexScreenComponentType,
  getIndexScreenEntity,
  getIndexScreenType,
  getScreenComponentTypeValue,
  getScreenTypeValue, selectPopupChoiceWithText
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
    selectPopupChoiceWithText('freeform'); // We have to click twice to close the popup
    getIndexScreenType('a').click();
    selectPopupChoiceWithText('list');
    selectPopupChoiceWithText('list');  // We have to click twice to close the popup
    getIndexScreenEntity ('a').type('newTestEntity');

    getIndexScreenType('a').click();
    selectPopupChoiceWithText('freeform');

    getIndexScreenComponentEntityValue('a','a').should('equal','testEntity');

  });
});
