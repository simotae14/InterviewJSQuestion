// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // #1 simpliest solution with reverse()
  // return str.split('').reverse().join('');

  // #2 solution, with for loop in the string
  // let reversed = '';
  // for (let c of str) {
  //   reversed = c + reversed;
  // }
  // return reversed;

  // #3 solution not using reverse() but just a for loop and arrays
  let solutionArray = [];
  [...str].forEach(char => {
    solutionArray.unshift(char);
  });
  return solutionArray.join("");
}

module.exports = reverse;
