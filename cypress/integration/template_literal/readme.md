# Template literals

This is a super round about way of using a template literal in cy.get, if you're just interested in template literals then take a look straight in the spec.

You can (should) also look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to see what MDN has to say about it.

If you're interested in the particular usecase of having to import a testid from another location that you have no control over AND the testid in question is broken in some way then take a look at the utility function and fixture to see how you can edit a string at the tests end to get around the broken value you cant control.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="NWaqrKX" data-user="steveycee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/steveycee/pen/NWaqrKX">
  Add character (a space) to string</a> by Steven Chapman (<a href="https://codepen.io/steveycee">@steveycee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
