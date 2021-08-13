// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // #1 solution, using the reverse method
  // return str === str.split('').reverse().join('');

  // #2 solution, using the every() method and arrays
  return str.split('').every((char, index) => char === str[str.length - index - 1])
}

module.exports = palindrome;
