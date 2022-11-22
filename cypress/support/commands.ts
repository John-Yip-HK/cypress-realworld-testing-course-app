/// <reference types="cypress" />

// Command: Reuse code or functionality across all of our Cypress spec files.

// This command will allow us to pass selector value into data-test attribute.
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test='${selector}']`)
})
