export const getLoadSchemaButton = () => cy.get('#loadSchema');
export const getMainMenu = () => cy.get('#mainMenu');
export const getMenuWithText = (text:string) => cy.get("#mainMenu > p-menu > div > .p-menu-list").contains(text);
export const selectPopupChoiceWithText = (text:string) => cy.get(".p-dropdown-items").contains('p-dropdownitem',text).click();

export const getDevMenu = () => getMenuWithText('Dev');
export const getEditorMenu = () => getMenuWithText('Editor');



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
export const getEntityFieldTypeValue = (val:string) => cy.get('#creation-entities-a-fields-a-type > .p-dropdown > .p-dropdown-label').contains(val);
export const getIndexEntityFieldAddButton = (entity:string, field:string) => cy.get('#creation-entities-'+entity+'-fields-'+field+'-add-button');
export const getIndexEntityFieldRemoveButton = (entity:string, field:string) => cy.get('#creation-entities-'+entity+'-fields-'+field+'-remove-button');
export const getIndexScreenComponentType = (screen:string, component:string) => cy.get('#creation-screens-'+screen+'-components-'+component+'-type');
export const getScreenComponentTypeValue = (val:string) => cy.get('[ng-reflect-value='+val+']');
export const getIndexScreenComponentEntity = (screen:string, component:string) => cy.get('#creation-screens-'+screen+'-components-'+component+'-entity');
export const getIndexScreenComponentEntityValue = (screen:string, component:string) => cy.get('#creation-screens-'+screen+'-components-'+component+'-entity').invoke('val');
export const getIndexScreenType = (screen:string) => cy.get('#creation-screens-'+screen+'-type');
export const getScreenTypeValue = (val:string) => cy.get('[ng-reflect-value='+val+']');
export const getIndexScreenEntity = (screen:string) => cy.get('#creation-screens-'+screen+'-entity');

export const getListOfChanges = () => cy.get('.p-datatable-tbody ');

