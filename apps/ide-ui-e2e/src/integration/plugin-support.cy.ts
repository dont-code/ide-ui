import {
  getAppNameInput, getDropDown,
  getEditorMenu, getField, getFieldValue,
  getIndexScreenComponentEntity,
  getIndexScreenComponentEntityValue,
  getIndexScreenComponentType,
  getIndexScreenEntity,
  getIndexScreenType, getMenuWithText,
  selectPopupChoiceWithText
} from "../support/main-editor.po";
import {
  getCurrentProjectButtonWithText, getProjectActionWithText,
  getProjectNameValidator,
  selectConfirmButtonWithText
} from "../support/projects.po";


describe('plugin-support', () => {
  beforeEach(() => cy.visit('/'));

  it('should support dynamic screen properties', () => {
//    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getEditorMenu().click();
    getAppNameInput().type('To Do App');
    getIndexScreenComponentType('a','a').click();
    selectPopupChoiceWithText('Edit');
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

  it('should load a project with dynamic values properly', () => {
    cy.intercept('GET','https://test.dont-code.net/project').as('Load');
    cy.intercept('GET','https://test.dont-code.net/project/**').as('Reload');

    getEditorMenu().click();
    getAppNameInput().type('Test Dynamic Url');
    getField('sources','a', 'name').type ("testSource");
    getDropDown('sources','a', 'type').click();

    selectPopupChoiceWithText('Rest');
    getField('sources','a', 'url').type('https://test-url.com');

      // Save the project
    getMenuWithText("Projects").click();
    cy.wait('@Load');
    getCurrentProjectButtonWithText ("Save").click();
    selectConfirmButtonWithText("Yes").click();
    const projectName = "Test Dynamic Url "+new Date().getTime();
    cy.focused().should('have.id', 'project-name-edit').type(projectName);
    getProjectNameValidator().click();
    getCurrentProjectButtonWithText ("Save").click();

      // Reloads the project
    getMenuWithText("Editor").click();
    cy.get('[icon="pi pi-cloud-download"]').click();

    getMenuWithText("Projects").click();
    cy.wait('@Load');

    //Find the projectName
getProjectActionWithText (projectName, "Load").click();
    cy.wait('@Reload');

    getMenuWithText("Editor").click();
    getFieldValue('sources','a', 'url').should('equal',"https://test-url.com");
  });

});
