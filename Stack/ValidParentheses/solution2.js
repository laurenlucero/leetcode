function isValid(s) {
  // Initialize an empty stack
  const stack = [];

  // Define a map for bracket pairs
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Iterate through each character in the input string
  for (let char of s) {
    // Check if char is an open bracket and push it onto the stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // Check if char is a closing bracket
    else {
      // If the stack is empty, there's no matching open bracket
      if (stack.length === 0) {
        return false;
      }
      // Pop the top element from the stack and compare it to the current closing bracket
      const top = stack.pop();
      if (bracketPairs[top] !== char) {
        return false;
      }
    }
  }

  // After the loop, check if the stack is empty and return true or false
  return stack.length === 0;
}
