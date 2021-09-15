// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* 1: My solution */
/*
function chunk(array, size) {
  let chunked = [];
  for (var i = 0; i < array.length; i = i + size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}
*/

/* 2: First Solution by S. Grider */
/*
function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const lastElementArray = chunked[chunked.length - 1];
    if (!lastElementArray || lastElementArray.length === size) {
      chunked.push([element]);
    } else {
      lastElementArray.push(element)
    }
  }
  return chunked;
}
*/

/* 3: Second Solution by S. Grider using Slice and a While loop */
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
