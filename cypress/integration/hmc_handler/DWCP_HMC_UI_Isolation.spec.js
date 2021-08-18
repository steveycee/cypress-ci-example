/// <reference types="cypress" />
beforeEach(() => {
  // Setting initial state
  cy.intercept("POST", "/handler/helpmechoose/query", {
    fixture: "initialHMCState.xhr",
  });
  cy.visit("https://ao.com/dishwashers");
});

describe("Dishwasher HMC Type Test", () => {
  it(`should...`, () => {
    // Set up 1st interception
    cy.intercept("POST", "/handler/helpmechoose/query", {
      fixture: "firstClickState.xhr",
    });
    // Press the button
    cy.get("#helpMeChooseContainer")
      .find(".primary.facets")
      .find("li")
      .first()
      .click();
    // get value of 1st interception is being displayed
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "data-total-products")
      .should("equal", "010");
    // Set up 2nd interception
    cy.intercept("POST", "/handler/helpmechoose/query", {
      fixture: "secondClickState.xhr",
    });
    cy.get("#helpMeChooseContainer")
      .find(".secondary.facets")
      .find("li")
      .first()
      .click();
    // Validate value of 2nd interception is being displayed
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "data-total-products")
      .should("equal", "005");
    // Validate the button 'intends' to go to a lister
    cy.get("#helpMeChooseContainer")
      .find("#shopNow")
      .invoke("attr", "href")
      .should("contains", "/l/");
  });
});
