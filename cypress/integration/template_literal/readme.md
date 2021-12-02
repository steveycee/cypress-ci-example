# Template literals & Utility functions

This is a super round about way of using a template literal in cy.get, if you're just interested in template literals then take a look straight in the spec.

You can (should) also look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to see what MDN has to say about it.

If however you're interested in why this is a super round about example then read on.

## Usecase

- We are importing a testid from an external file
- We do not control the external file
- The testid in the external file is missing a character thus our test is failing
- We want to keep using the external file because say it is automatically updated in line with the website itself but that update function is broken in a consistent way. e.g. it strips out characters we want to keep in the id. Imagine some weird solution that seemed like a good idea at the time but now its doing your head in.

If you take a look at the `utility.js` file you will see a function that is editing the test id value so it will be effective again in the test.

See the utility function working on Codepen [here](https://codepen.io/steveycee/pen/NWaqrKX).
