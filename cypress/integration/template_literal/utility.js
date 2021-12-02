// I'm a utility/helper function that will add a character to the broken test id in the fixture (i know we can fix it in the fixture but lets assume that we can't.

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
