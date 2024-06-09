const { defineConfig } = require('cypress')
const installLogsPrinter= require ('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  "fileServerFolder": ".",
  "fixturesFolder": "./src/fixtures",
  "modifyObstructiveCode": false,
  "video": true,
  "videosFolder": "../../dist/cypress/apps/ide-ui-e2e/videos",
  "screenshotsFolder": "../../dist/cypress/apps/ide-ui-e2e/screenshots",
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        printLogsToConsole: "always",
      });
  },
  specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  },
})
