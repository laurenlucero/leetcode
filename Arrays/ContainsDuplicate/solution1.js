const containsDuplicate = function (nums) {
  // Initialize an empty Set to keep track of seen values
  const seen = new Set();

  // Iterate through the array nums
  for (const num of nums) {
    // Check if num is already in the Set
    // If yes, return true (duplicate found)
    if (seen.has(num)) return true;
    // If not, add num to the Set
    else seen.add(num);
  }
  // After the loop, return false (no duplicates found)
  return false;
};
