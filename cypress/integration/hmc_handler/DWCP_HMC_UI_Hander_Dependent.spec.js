/// <reference types="cypress" />
beforeEach(() => {
  // Setting initial state
  cy.visit("https://ao.com/dishwashers");
});

describe("Dishwasher HMC Type Test", () => {
  it(`should...`, () => {
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "data-total-products")
      .as("initialValue");
    // Press the button
    cy.get("#helpMeChooseContainer")
      .find(".primary.facets")
      .find("li")
      .first()
      .click();
    //
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "data-total-products")
      .as("firstClickValue");
    cy.get("@initialValue").should("not.equal", "@firstClickValue");
    // Set up 2nd interception
    cy.get("#helpMeChooseContainer")
      .find(".secondary.facets")
      .find("li")
      .first()
      .click();
    // Validate value of 2nd interception is being displayed
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "data-total-products")
      .as("secondClickValue");
    // Validate the button goes to a lister
    cy.get("#helpMeChooseContainer").find("#shopNow").click();
    cy.url().should("contain", "/l/");
  });
});
