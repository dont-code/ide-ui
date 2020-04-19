export const getLoadSchemaButton = () => cy.get('#loadSchema');
export const getAppNameInput = () => cy.get('#creation-name');
export const getAppMainEntityName = () => cy.get('#creation-entities-name');

export const getEntityFieldName = () => cy.get('#creation-entities-fields-name');
export const getEntityFieldType = () => cy.get('#creation-entities-fields-type');
export const getEntityFieldTypeString = () => cy.get('[ng-reflect-value=string]');
