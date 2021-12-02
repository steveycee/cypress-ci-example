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
