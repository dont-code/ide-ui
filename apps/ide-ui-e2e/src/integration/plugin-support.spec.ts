import {
  getAppNameInput,
  getDevMenu,
  getEditorMenu,
  getEntityFieldTypeValue,
  getEntityNewButton,
  getIndexEntityAddButton,
  getIndexEntityDownButton,
  getIndexEntityFieldName,
  getIndexEntityFieldNameValue,
  getIndexEntityFieldType,
  getIndexEntityName,
  getIndexEntityRemoveButton,
  getIndexEntityUpButton,
  getIndexScreenComponentEntity,
  getIndexScreenComponentEntityValue,
  getIndexScreenComponentType,
  getIndexScreenEntity,
  getIndexScreenType,
  getListOfChanges,
  getScreenComponentTypeValue,
  getScreenTypeValue
} from "../support/main-editor.po";


describe('plugin-support', () => {
  beforeEach(() => cy.visit('/'));

  it('should support dynamic screen properties', () => {
//    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexScreenComponentType('a','a').click();
    getScreenComponentTypeValue('edit').click();
    getIndexScreenComponentEntity('a','a').type('testEntity');

    getIndexScreenType('a').click();
    getScreenTypeValue('list').click();
    getIndexScreenEntity ('a').type('newTestEntity');

    getIndexScreenType('a').click();
    getScreenTypeValue('freeform').click();

    getIndexScreenComponentEntityValue('a','a').should('equal','testEntity');

  });
});
