// We are given a multi-dimensional array arr and an integer n. We need to flatten the array by replacing subarrays with their elements, but only if the depth of the subarray is less than n. The depth of elements in the initial array is considered to be 0.

// This problem involves recursion, where we traverse the array and flatten subarrays based on their depth compared to n. We'll need a recursive function to handle this.

// Define a function called 'flat' that takes an array 'arr', an integer 'n', and a depth tracker 'depth' as parameters.
var flat = function (arr, n, depth = 0) {
  // Create an empty array called 'result' to store the flattened elements.
  let result = [];

  // Loop through each element in the 'arr' array using a 'for...of' loop.

  // Check if the 'element' is an array and if the 'depth' is less than 'n'.

  // Recursively call the 'flat' function on the 'element' with an increased 'depth'.

  // Concatenate (combine) the 'recursivelyFlatten' array with the 'result' array.

  // Add the 'element' to the 'result' array as is (not flattened).

  // Return the 'result' array, which contains the flattened elements.
  return result;
};

// Initialize depth as 0
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1; // You can change the value of n as needed
let flattenedArr = flat(arr, n);
console.log(flattenedArr); // expected output: [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
