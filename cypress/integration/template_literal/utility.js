// I'm a utility/helper function that will add a character to the broken test id in the fixture. 
// For the purpose of this example lets assume we don't have edit access to the fixture.

import { brokenTestid } from "./fixture.js";

let originalString = brokenTestid;
let addSpaceAfterSecondCharacter = () => {
  let newArray = originalString.split("");
  newArray.splice(6, 0, "_");
  let finalString = newArray.join("");
  return finalString;
};

let fixedTestid = addSpaceAfterSecondCharacter();

export { fixedTestid };
