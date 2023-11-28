function slice(arr, start, end=input.length) {
  let result = Array.isArray(input) ? [] : "";

  for (let i = start; i < end; i++) {
    if (Array.isArray(input)) {
      result.push(input[i]);
    } else {
      result += input.charAt(i);
    }
  }
  return result;
}


// function slice(input, start, end) {
//   // Check if the input is an array or a string
//   if (Array.isArray(input)) {
//     // If the input is an array, use Array.slice()
//     return input.slice(start, end);
//   } else if (typeof input === 'string') {
//     // If the input is a string, use String.slice()
//     return input.slice(start, end);
//   } else {
//     // If the input is neither an array nor a string, return undefined
//     return undefined;
//   }
// }

// Example usage:
// const arrayInput = [1, 2, 3, 4, 5];
// const stringInput = "Hello, World!";

// const arrayResult = slice(arrayInput, 1, 3);
// const stringResult = slice(stringInput, 7, 12);

// console.log(arrayResult); // Output: [2, 3]
// console.log(stringResult); // Output: World


// Array.prototype.slice = undefined
// String.prototype.slice = undefined