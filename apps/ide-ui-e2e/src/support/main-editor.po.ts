export const getAppNameInput = () => cy.get('#appName');
export const getAppMainEntityName = () => cy.get('#appMainEntityName');

export const getAppMainActionSelect = () => cy.get('#appMainAction');
export const getAppMainActionOption = () => cy.get('[ng-reflect-value=appMainAction-view]');
export const getPropNameSelect = () => cy.get('#entityPropNameType');
export const getPropNameOptionName = () => cy.get('[ng-reflect-value=entityPropNameType-name]');
