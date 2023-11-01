const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'src/cypress/integration/**/*.cy.js',
    supportFile: false // Set to false if you don't need a support file
  }
})