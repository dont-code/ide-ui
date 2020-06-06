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
    getEntityFieldTypeValue('string').contains('string');
    getEntityFieldTypeValue('string').click();
    getIndexEntityAddButton('a').click();
    getIndexEntityName('b').type('2nd');
    getIndexEntityFieldName('b','a').type('description');
    getDevMenu ().click();
    getListOfChanges().should('have.length.greaterThan', 0);
    getEditorMenu().click();
    getIndexEntityFieldNameValue('a','a').should('equal','name');
    getEntityFieldTypeValue('string').contains('string');
    getIndexEntityFieldNameValue('b','a').should('equal','description');

  });

  it('should support add/remove/up/down', () => {

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexEntityName('a').type('ToDo');
    getIndexEntityFieldName('a','a').type('name');
    getIndexEntityFieldType('a','a').click();
    getEntityFieldTypeValue('string').contains('string');
    getEntityFieldTypeValue('string').click();
    getIndexEntityAddButton('a').click();
    getIndexEntityName('b').type('2nd');
    getIndexEntityFieldName('b','a').type('done');
    getIndexEntityFieldType('b','a').click();
    getEntityFieldTypeValue('boolean').contains('boolean');
    getEntityFieldTypeValue('boolean').click();
    getIndexEntityAddButton('b').click();
    getIndexEntityName('c').type('3rd');
    getIndexEntityFieldName('c','a').type('index');
    getIndexEntityFieldType('c','a').click();
    getEntityFieldTypeValue('number').contains('number');
    getEntityFieldTypeValue('number').click();

    getIndexEntityUpButton('c').click();
    getIndexEntityUpButton('c').click();
    getIndexEntityDownButton('a').click();
    getIndexEntityRemoveButton('b').click();
    getIndexEntityRemoveButton('c').click();
    getIndexEntityRemoveButton('a').click();

    getEntityNewButton().click();
  });

});
