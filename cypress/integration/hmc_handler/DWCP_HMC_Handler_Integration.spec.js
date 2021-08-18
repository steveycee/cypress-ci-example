/// <reference types="cypress" />

describe("Products Handler Test", () => {
  it(`Should make a request to the products handler and recieve a valid response`, () => {
    cy.request(
      "https://ao.com/ProductsHandler.axd?productQuery=/l/dishwashers/1/21/&itemsperpagesize=10&numberToReturn=10&filterOutOfStock=true"
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.to.be.greaterThan(1);
      expect(response).to.have.property("headers");
    });
  });
});
