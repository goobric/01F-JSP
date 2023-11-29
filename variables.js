// VARIABLES
// Declered variables with var, let, const
// var is global scope
// let is block scope
// const is block scope and constant
// Assign variables before they are used, normally at the top of the scope

// FORMATTING OF VARIABLE NAMES
// firstName = camelCase
// first_name = snake_case
// FirstName = PascalCase
// first-name = kebab-case
// firstname = lowercase

// React components are PascalCase

let firstName = 'John'; // String
let lastName = 'Doe'; // String
console.log(firstName, lastName);
let age = 29; // Number

// Re-assigning variables
age = 31;

console.log(age);

score = 1;
console.log(score);
if (true) {
  score = score + 1;
}
console.log(score);
const x = 100;
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

