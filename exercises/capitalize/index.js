// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
/* 
My solution: using the splice method to divede the sentence in words and
*/
function capitalize(str) {
  const splittedString = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1));
  return splittedString.join(" ");
}

module.exports = capitalize;
