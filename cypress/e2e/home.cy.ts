/**
 * describe block takes 2 arguments
 * 1st: description of the test
 * 2nd: callback function
 * */
describe("empty spec", () => {
  it("passes", () => {
    // visit() is a command that tells cypress where to execute our tests
    cy.visit("http://localhost:3000")
    // get(): retrieve element
    // contains(): an assertion to check if the contained text in the element matches the one the user provides
    // Getting elements best practice in Cypress: using data attributes on your elements
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })
})
