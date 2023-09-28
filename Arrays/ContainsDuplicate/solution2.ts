function containsDuplicate(nums: number[]): boolean {
    // Initialize an empty Set to keep track of seen values
    const seen = new Set<number>();
    // Iterate through the array nums
    for (const num of nums) {
      // Check if num is already in the Set
      if (seen.has(num)) {
        return true; // Duplicate found
      }
      // If not, add num to the Set
      seen.add(num);
    }
    // After the loop, return false (no duplicates found)
    return false;
  }
