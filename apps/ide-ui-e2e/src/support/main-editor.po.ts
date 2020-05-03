export const getLoadSchemaButton = () => cy.get('#loadSchema');
export const getAppNameInput = () => cy.get('#creation-name');
export const getAppMainEntityName = () => cy.get('#creation-entities-a-name');

export const getEntityFieldName = () => cy.get('#creation-entities-a-fields-a-name');
export const getEntityFieldType = () => cy.get('#creation-entities-a-fields-a-type');
export const getEntityFieldTypeString = () => cy.get('[ng-reflect-value=string]');
export const getDevMenu = () => cy.get('#devMenu');
export const getEditorMenu = () => cy.get('#editorMenu');
