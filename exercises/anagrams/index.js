// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* 1: My solution using Regexp and replace to clean strings
      counting the number of keys in the First Character Map and in the second
      and comparing the 2 Character maps
*/
function generateCharacterMap(stringVal) {
  let charMap = {};
  [...stringVal].forEach((c) => {
    charMap[c] = charMap[c] ? charMap[c] + 1 : 1;
  });
  return charMap;
}

function anagrams(stringA, stringB) {
  // generate the cleaned Strings, without spaces and punctuation
  const stringACleaned = stringA.replace(/[^\w]/g, '').toLowerCase();
  const stringBCleaned = stringB.replace(/[^\w]/g, '').toLowerCase();
  // generate the Character Map of the two strings
  const stringACharMap = generateCharacterMap(stringACleaned);
  const stringBCharMap = generateCharacterMap(stringBCleaned);
  // control if the number of keys are the same
  if (Object.keys(stringACharMap).length === Object.keys(stringBCharMap).length) {
    for (const key in stringACharMap) {
      if (stringACharMap[key] !== stringBCharMap[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = anagrams;
