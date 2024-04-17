const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on) {
        on('file:preprocessor', cucumber())
      }
  },
});
