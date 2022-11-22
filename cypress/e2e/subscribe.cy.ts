describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    // type(): enter some text into an element
    cy.getByData("email-input").type("tom@aol.com")
    // click(): click on an elemenet
    cy.getByData("submit-button").click()

    // Make sure success message does exist after submission
    // and contains the email "tom@aol.com"
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it.only("cannot sign up if already subscribed", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})
