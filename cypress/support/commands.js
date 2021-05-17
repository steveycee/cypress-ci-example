// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//https://stackoverflow.com/questions/50750956/how-to-select-nth-item-inside-select-element-in-cypress
Cypress.Commands.add(
    'selectNth',
    { prevSubject: 'element' },
    (subject, pos) => {
      cy.wrap(subject)
        .children('option')
        .eq(pos)
        .then(e => {
          cy.wrap(subject).select(e.val())
        })
    }
  )

  Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('#pci-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })

  Cypress.Commands.add('getIframeCvv', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('#Cardinal-CCA-IFrame')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })

  Cypress.Commands.add('steve', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('#pci-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.get('#Cardinal-CCA-IFrame')
    .its('0.contentDocument.body').should('not.be.empty')().then(cy.wrap))
  })