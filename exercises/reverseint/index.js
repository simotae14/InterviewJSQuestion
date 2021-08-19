// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const nSign = Math.sign(n);
  const reversedValue = parseInt(n.toString().split('').reverse().join(''));
  return nSign >= 0 ? reversedValue : reversedValue * -1;
}

module.exports = reverseInt;
