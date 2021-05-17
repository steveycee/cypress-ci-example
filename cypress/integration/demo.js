/// <reference types="cypress" />

context("Demo", () => {
  beforeEach(() => {
    cy.visit("https://ao.com/");
  });

  it("Should go to the basket", () => {
    cy.get(".header-brandbar__basket ico ico-basket").click();
    cy.title().should("eq", "ao.com Shopping Basket");
  });
});
