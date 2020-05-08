import {
  get2ndEntityFieldName,
  get2ndEntityFieldNameValue,
  getAppMainEntityName,
  getAppNameInput,
  getDevMenu,
  getEditorMenu,
  getEntityAddButton,
  getEntityFieldName,
  getEntityFieldNameValue,
  getEntityFieldType,
  getEntityFieldTypeString,
  getListOfChanges
} from '../support/main-editor.po';


describe('main-editor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct text', () => {
//    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getAppMainEntityName().type('ToDo');
    getEntityFieldName().type('name');
    getEntityFieldType().click();
    getEntityFieldTypeString().contains('string');
    getEntityFieldTypeString().click();
    getEntityAddButton().click();
    get2ndEntityFieldName().type('description');
    getDevMenu ().click();
    getListOfChanges().should('have.length.greaterThan', 0);
    getEditorMenu().click();
    getEntityFieldNameValue().should('equal','name');
    getEntityFieldTypeString().contains('string');
    get2ndEntityFieldNameValue().should('equal','description');

  });

});
