const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://apex.oracle.com/pls/apex/r/danmende/qa-application/home',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
        
      }
    },
  },
);
