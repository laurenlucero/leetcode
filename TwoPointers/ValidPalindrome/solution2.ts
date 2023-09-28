function isPalindrome(s: string): boolean {
    // Clean the string by converting to lowercase and removing non-alphanumeric characters
    const cleanedString: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the cleaned string with its reverse
    const reversedString: string = cleanedString.split('').reverse().join('');
    // Return true if they are the same, otherwise return false
    return cleanedString === reversedString;
}
