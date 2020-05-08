export const getSidePanel = () => cy.get('#mainSidePanel');
export const getToolbar = () => cy.get('#mainToolbar');
export const getToolbarTitle = () => getToolbar().within(() => {
  return cy.get("span");
});
export const getMainEditor = () => cy.get('ide-ui-main-editor');
export const getWelcome = () => cy.get('ide-ui-welcome');
