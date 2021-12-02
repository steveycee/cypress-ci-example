# Template literals

This is a super round about way of using a template literal in cy.get, if you're just interested in template literals then take a look straight in the spec.

You can (should) also look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to see what MDN has to say about it.

If you're interested in the particular usecase of having to import a testid from another location that you have no control over AND the testid in question is broken in some way then take a look at the utility function and fixture to see how you can edit a string at the tests end to get around the broken value you cant control.

See the function working on codepen [here](https://codepen.io/steveycee/pen/NWaqrKX).
