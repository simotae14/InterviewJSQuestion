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
/*
function capitalize(str) {
  const splittedString = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1));
  return splittedString.join(" ");
}
*/

/*
Stephen's first solution: split the string into an array of words, for every word uppercase just 
the first letter and slice the remaining chars and then return the joined string
*/
/*
function capitalize(str) {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
*/
/*
Stephen's second solution: split the string into an array of words, for every word uppercase just 
the first letter and slice the remaining chars and then return the joined string
*/
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    result += str[i -1] === ' ' ? str[i].toUpperCase() : str[i];
  }
  return result;
}
module.exports = capitalize;
