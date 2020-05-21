export const getLoadSchemaButton = () => cy.get('#loadSchema');
export const getDevMenu = () => cy.get('#devMenu');
export const getEditorMenu = () => cy.get('#editorMenu');


export const getAppNameInput = () => cy.get('#creation-name');

export const getEntityNewButton = () => cy.get('#creation-entities-new-button');
export const getIndexEntityName = (entity:string) => cy.get('#creation-entities-'+entity+'-name');
export const getIndexEntityAddButton = (entity:string) => cy.get('#creation-entities-'+entity+'-add-button');
export const getIndexEntityRemoveButton = (entity:string) => cy.get('#creation-entities-'+entity+'-remove-button');
export const getIndexEntityUpButton = (entity:string) => cy.get('#creation-entities-'+entity+'-up-button');
export const getIndexEntityDownButton = (entity:string) => cy.get('#creation-entities-'+entity+'-down-button');

export const getIndexEntityFieldName = (entity:string, field:string) => cy.get('#creation-entities-'+entity+'-fields-'+field+'-name');
export const getIndexEntityFieldNameValue = (entity:string, field:string) => cy.get('#creation-entities-'+entity+'-fields-'+field+'-name').invoke('val');
export const getIndexEntityFieldType = (entity:string, field:string) => cy.get('#creation-entities-'+entity+'-fields-'+field+'-type');
export const getEntityFieldTypeValue = (val:string) => cy.get('[ng-reflect-value='+val+']');

export const getListOfChanges = () => cy.get('.mat-list .mat-list-item');

