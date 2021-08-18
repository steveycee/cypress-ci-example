/// <reference types="cypress" />
Cypress.Commands.add("totalProducts", () => {
  cy.get("#helpMeChooseContainer")
    .find("#shopNow")
    .invoke("attr", "data-total-products");
});

before(() => {
  cy.visit("https://ao.com/dishwashers");
  // Used to wait for Post from the helpmechoose handler before comparing any values
  cy.intercept("POST", "/handler/helpmechoose/query").as("hmcQuery");
});

describe("HMC (Dishwasher Type) Test", () => {
  it(`should select an option on the HMC, check the number of products decreases, press the CTA and resolve to a lister`, () => {
    // Alias inital value
    cy.totalProducts().as("initialValue");

    // Press first option
    cy.get("#helpMeChooseContainer")
      .find(".primary.facets")
      .find("li")
      .first()
      .click();

    // Instead of using a static time we are awaiting a response from the HMC handler as aliased in the before above
    cy.wait("@hmcQuery");

    // Check number decreases
    cy.totalProducts().then(($newValue) => {
      cy.get("@initialValue").should("not.equal", $newValue);
    });

    // Validate the button goes to a lister
    cy.get("#helpMeChooseContainer").find("#shopNow").click();
    cy.url().should("contain", "/l/");
  });
});
