function factorial(n) {
  // Base case: the factorial of 0 is 1
  if (n === 0) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Example usage:
const result = factorial(5); // 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(result); // Output: 120

// Recursion is a programming concept where a function calls itself in its own definition.
// In other words, a recursive function is one that solves a problem by solving smaller instances of the same problem.
// It involves breaking down a problem into smaller subproblems, solving them, and combining their solutions to solve the original problem.

// In the factorial function, the base case (n === 0) provides the stopping condition for the recursion, preventing an infinite loop.
// The recursive case calculates the factorial by calling the factorial function with a smaller argument (n - 1).

// The reduce method is a higher-order function in JavaScript that is used to reduce an array to a single value.
// It iterates over each element of the array and applies a callback function, accumulating the result as it goes.
// The reduce method takes two main parameters:

//     Callback function: This function is called once for each element in the array and takes four arguments:
// Accumulator: The accumulated result.
// Current Value: The current element being processed.
// Current Index: The index of the current element.
// Source Array: The array being processed.

// Initial Value (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.
// Here's a simple example of using reduce to calculate the sum of an array:

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum); // Output: 15
