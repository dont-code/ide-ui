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
    cy.intercept('GET','https://test.dont-code.net/e2e/project').as('Load');
    cy.intercept('GET','https://test.dont-code.net/e2e/project/**').as('Reload');

    getMenuWithText("Editor").click();
    getAppNameInput().type('Task Manager');
    getIndexEntityName('a').type('Task');
    getIndexEntityFieldName('a','a').type('Old Name');
    getIndexEntityFieldType('a','a').click();
    selectPopupChoiceWithText('Text');
    getIndexEntityFieldAddButton('a','a').click();
    getIndexEntityFieldName('a','b').type('Done');
    getIndexEntityFieldType('a','b').click();
    selectPopupChoiceWithText('Boolean');
    getMenuWithText("Projects").click();
    cy.wait('@Load');
    getCurrentProjectButtonWithText ("Save").click();
    selectConfirmButtonWithText("Yes").click();
    cy.focused().should('have.id', 'project-name-edit').type("Task Manager "+new Date().getTime());
    getProjectNameValidator().click();
    getCurrentProjectButtonWithText ("Save").click();

    getMenuWithText("Editor").click();
    getIndexEntityFieldRemoveButton('a','a').click();
    getMenuWithText("Projects").click();
    cy.wait('@Load');
    getCurrentProjectButtonWithText ("Reload").click();
    cy.wait('@Reload');
//    cy.wait(1000);  // We must wait until the project reloads as for now the UI doesn't show anything
    getMenuWithText("Editor").click();
    getIndexEntityFieldNameValue('a','a').should('equal','Old Name');
    getIndexEntityFieldName('a','a').clear().type('Name');
    getMenuWithText("Projects").click();
    getCurrentProjectButtonWithText ("Save").click();

  });

});
