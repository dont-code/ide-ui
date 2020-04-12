export const getApplicationSelect = () => cy.get('#appType');
export const getApplicationOption = () => cy.get('[ng-reflect-value=appType-application]');
export const getItemSelect = () => cy.get('#items');
export const getItemScreenOption = () => cy.get('[ng-reflect-value=items-screens]');
