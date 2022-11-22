describe("User Journey", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    // Find and click the "Start Course" button
    cy.getByData("next-lesson-button").click()

    // 1st lesson
    // Verify the button has navigated the user to the correct lesson page
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    // Complete the quiz below
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()

    // 2nd lesson
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()

    // 3rd lesson
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()

    // Ensure we have been navigated back to the home page
    cy.location("pathname").should("eq", "/")
  })
})
