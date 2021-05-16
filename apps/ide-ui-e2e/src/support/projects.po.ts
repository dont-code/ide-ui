export const getCurrentProjectButtonWithText = (text:string) => cy.get(".project-list-action").get("p-button").contains(text);
export const selectConfirmButtonWithText = (text:string) => cy.get(".p-confirm-popup-footer .p-button-label").contains(text);
export const getProjectNameInput = () => cy.get("#project-name-edit");
export const getProjectNameValidator = () => cy.get(".pi-check");
