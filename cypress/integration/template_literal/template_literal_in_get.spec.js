import { fixedTestid } from "./utility.js";

context("...", () => {
  it("...", () => {
    cy.visit("https://steveycee.com/");
    cy.get(`[data-automation-id="${fixedTestid}"]`);
  });
});
