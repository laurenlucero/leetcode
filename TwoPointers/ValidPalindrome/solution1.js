function isPalindrome(s) {
  // Clean the string by converting to lowercase and removing non-alphanumeric characters
  let cleanedString = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  // Compare the cleaned string with its reverse
  let reversedString = cleanedString.split("").reverse().join("");
  // Return true if they are the same, otherwise return false
  return cleanedString === reversedString;
}
