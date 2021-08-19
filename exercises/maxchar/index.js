// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const mapStringCharObject = {};
  [...str].forEach(c => mapStringCharObject[c] = mapStringCharObject[c] + 1 || 1);
  let maxChar = str[0];
  Object.keys(mapStringCharObject).reduce((maxValue, currentValue) => {
    const max = maxValue > mapStringCharObject[currentValue] ? maxValue : mapStringCharObject[currentValue];
    if (maxValue < mapStringCharObject[currentValue]) {
      maxChar = currentValue;
    }
    return max;
  }, 0);
  return maxChar;
}

module.exports = maxChar;
