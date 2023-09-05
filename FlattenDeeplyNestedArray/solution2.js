/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
// Define a function called 'flat' that takes an array 'arr' and an integer 'n' as parameters.
var flat = function (arr, n) {
  // Define a helper function called 'flattenHelper' within the 'flat' function.

  // Create an empty array called 'result' to store the flattened elements.

  // Loop through each element in the 'arr' array using a 'for...of' loop.

  // Check if the 'element' is an array and if the 'depth' is less than 'n'.

  // Recursively flatten the subarray and append its elements to 'result'.

  // Add the element to 'result' as is (not flattened).

  // Start with depth 0 and call the helper function.
  return flattenHelper(arr, 0);
};

// Example usage:
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 2;
let flattenedArr = flat(arr, n);
console.log(flattenedArr); // expected output: [ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15 ]
