function isValid(s) {
  // Initialize an empty stack
  const stack = [];

  // Define regular expressions to match brackets
  const openBrackets = /[\[\{\(]/;
  const closeBrackets = /[\]\}\)]/;

  // Iterate through each character in the input string
  for (let char of s) {
    // Check if char is an open bracket and push it onto the stack
    if (char.match(openBrackets)) {
      stack.push(char);
    }
    // Check if char is a closing bracket
    else if (char.match(closeBrackets)) {
      // If the stack is empty, return false
      if (stack.length === 0) {
        return false;
      }
      // Pop the top element from the stack and compare it to the current closing bracket
      const top = stack.pop();
      // Check if they are matching brackets
      if (!areBracketsMatching(top, char)) {
        return false;
      }
    }
  }

  // After the loop, check if the stack is empty and return true or false
  return stack.length === 0;
}

// Helper function to check if two brackets are matching
function areBracketsMatching(open, close) {
  return (
    (open === "[" && close === "]") ||
    (open === "{" && close === "}") ||
    (open === "(" && close === ")")
  );
}
