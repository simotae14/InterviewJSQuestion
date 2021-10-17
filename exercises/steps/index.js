// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
My solution: using a simple for loop and a console log
*/
/*
function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
}
*/
/*
Stephen's first solution: iterative and easier solution
*/
/*
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
*/
/*
Stephen's second solution: recursive solution
*/
function steps(n, row = 0, stair = '') {
  // base case, atomic case
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  stair += stair.length <= row ? '#' : ' ';
  steps(n, row, stair);
}
module.exports = steps;
