const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/tests/**/*.cy.js",
    
  },
});
