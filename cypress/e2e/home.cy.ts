/**
 * describe block takes 2 arguments
 * 1st: description of the test
 * 2nd: callback function
 * */
describe("empty spec", () => {
  // beforeEach(): a function that will get called “before each” test is run,
  beforeEach(() => {
    // visit() is a command that tells cypress where to execute our tests
    cy.visit("http://localhost:3000")
  })

  // context() allows us to group related tests together. It is an alias of describe()
  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      // get(): retrieve element
      // contains(): an assertion to check if the contained text in the element matches the one the user provides
      // Getting elements best practice in Cypress: using data attributes on your elements
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    // Sometimes we cannot modify the underlying HTML of 3rd-party library code and add custom data-* attributes.
    it("the features on the homepage are correct", () => {
      // eq(): access a specific index within an array of elements
      // Bear in mind that contains() is case-sensitive. Thus, entering "4 courses" will fail the test.
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context.only("course selection", () => {
    it("Course: Testing Your First Next.js Application", () => {
      // find(): narrow down the scope in which Cypress looks for an element.
      // Find the specified elemenet within another element.
      cy.getByData("course-0").find("a").eq(3).click()
    })
  })
})
