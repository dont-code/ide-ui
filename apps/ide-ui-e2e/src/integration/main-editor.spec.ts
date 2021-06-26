import {
  getAppNameInput,
  getDevMenu,
  getEditorMenu,
  getEntityNewButton,
  getIndexEntityAddButton,
  getIndexEntityDownButton,
  getIndexEntityFieldName,
  getIndexEntityFieldNameValue,
  getIndexEntityFieldType,
  getIndexEntityFieldTypeInput,
  getIndexEntityFieldTypeValue,
  getIndexEntityName,
  getIndexEntityRemoveButton,
  getIndexEntityUpButton,
  getListOfChanges,
  selectPopupChoiceWithText
} from "../support/main-editor.po";


describe('main-editor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct text', () => {
//    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexEntityName('a').type('ToDo');
    getIndexEntityFieldName('a','a').type('name');
    getIndexEntityFieldType('a','a').click();
    selectPopupChoiceWithText('Text');
    getIndexEntityAddButton('a').click();
    getIndexEntityName('b').type('2nd');
    getIndexEntityFieldName('b','a').type('description');
    getIndexEntityFieldTypeInput('b','a').type('boolean');
    getIndexEntityFieldTypeValue('b','a').should('equal', 'Boolean');
    getDevMenu ().click();
    getListOfChanges().should('have.length.greaterThan', 0);
    getEditorMenu().click();
    getIndexEntityFieldNameValue('a','a').should('equal','name');
    getIndexEntityFieldTypeValue('a','a').should('equal','Text');
    getIndexEntityFieldNameValue('b','a').should('equal','description');
    getIndexEntityFieldTypeValue('b','a').should('equal', 'Boolean');

  });

  it('should support add/remove/up/down', () => {

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexEntityName('a').type('ToDo');
    getIndexEntityFieldName('a','a').type('name');
    getIndexEntityFieldType('a','a').click();
    selectPopupChoiceWithText('Text');
    getIndexEntityAddButton('a').click();
    getIndexEntityName('b').type('2nd');
    getIndexEntityFieldName('b','a').type('done');
    getIndexEntityFieldType('b','a').click();
    selectPopupChoiceWithText('Boolean');
    getIndexEntityAddButton('b').click();
    getIndexEntityName('c').type('3rd');
    getIndexEntityFieldName('c','a').type('index');
    getIndexEntityFieldType('c','a').click();
    selectPopupChoiceWithText('Number');

    getIndexEntityUpButton('c').click();
    getIndexEntityUpButton('c').click();
    getIndexEntityDownButton('a').click();
    getIndexEntityRemoveButton('b').click();
    getIndexEntityRemoveButton('c').click();
    getIndexEntityRemoveButton('a').click();

    getEntityNewButton().click();
  });

});
