/// <reference types="cypress" />
beforeEach(() => {
  cy.log("Before each is happening yo.");
  cy.intercept("POST", "/handler/helpmechoose/query", {
    fixture: "initialHMCState.xhr",
  });
});

describe("Home Page Image Diffs", () => {
  it(`Should display properly on ... screen`, () => {
    cy.visit("https://ao.com/dishwashers");
    cy.intercept("POST", "/handler/helpmechoose/query", {
      fixture: "firstClickState.xhr",
    });
    cy.get("#helpMeChooseContainer")
      .find(".primary.facets")
      .find("li")
      .first()
      .click();
    cy.wait(10000);
    cy.intercept("POST", "/handler/helpmechoose/query", {
      fixture: "secondClickState.xhr",
    });
    cy.get("#helpMeChooseContainer")
      .find(".secondary.facets")
      .find("li")
      .first()
      .click();
  });
});
