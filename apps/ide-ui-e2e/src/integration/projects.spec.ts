import {
  getAppNameInput,
  getIndexEntityFieldAddButton,
  getIndexEntityFieldName,
  getIndexEntityFieldNameValue,
  getIndexEntityFieldRemoveButton,
  getIndexEntityFieldType,
  getIndexEntityName,
  getMenuWithText,
  selectPopupChoiceWithText
} from "../support/main-editor.po";
import {
  getCurrentProjectButtonWithText,
  getProjectNameValidator,
  selectConfirmButtonWithText
} from "../support/projects.po";


describe('projects', () => {
  beforeEach(() => cy.visit('/'));

  it('should save and load projects', () => {
    getMenuWithText("Editor").click();
    getAppNameInput().type('Task Manager');
    getIndexEntityName('a').type('Task');
    getIndexEntityFieldName('a','a').type('Old Name');
    getIndexEntityFieldType('a','a').click();
    selectPopupChoiceWithText('string');
    getIndexEntityFieldAddButton('a','a').click();
    getIndexEntityFieldName('a','b').type('Done');
    getIndexEntityFieldType('a','b').click();
    selectPopupChoiceWithText('boolean');
    getMenuWithText("Projects").click();
    getCurrentProjectButtonWithText ("Save").click();
    selectConfirmButtonWithText("Yes").click();
    cy.focused().should('have.id', 'project-name-edit').type("Task Manager "+new Date().getTime());
    getProjectNameValidator().click();
    getCurrentProjectButtonWithText ("Save").click();

    getMenuWithText("Editor").click();
    getIndexEntityFieldRemoveButton('a','a').click();
    getMenuWithText("Projects").click();
    getCurrentProjectButtonWithText ("Reload").click();
    getMenuWithText("Editor").click();
    getIndexEntityFieldNameValue('a','a').should('equal','Old Name');
    getIndexEntityFieldName('a','a').clear().type('Name');
    getMenuWithText("Projects").click();
    getCurrentProjectButtonWithText ("Save").click();

  });

});
