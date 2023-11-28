// cutFirst: returns the string with the first 2 characters removed.

// cutLast returns the string with the last 2 characters removed.

// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

// keepFirst returns only the first 2 characters.

// keepLast returns only the last 2 characters.

// keepFirstLast returns the first 2 characters, and the last 2 characters.

function cutFirst(str) {
  return str.slice(2);
}

function keepFirst(str) {
  return str.slice(0, 1);
}

// cutLast returns the string with the last 2 characters removed.

function cutLast(str) {
  return str.slice(0, -2);
}

// keepFirstLast returns the first 2 characters, and the last 2 characters.

function keepFirstLast(str) {
  if (str.length <= 4) {
    return str;
  }
  return str.slice(0, 2) + str.slice(-2);
}

// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

function cutFirstLast(str) {
  return str.slice(2, -2);
}

// keepLast returns only the last 2 characters.

function keepLast(str) {
  return str.slice(-2);
}

console.log(cutFirst("hello")); // "llo"
console.log(cutFirst("hello world")); // "llo world"
console.log(keepFirst("hello")); // "h"
console.log(keepFirst("hello world")); // "h"
console.log(cutLast("hello")); // "hel"
console.log(cutLast("hello world")); // "hello wo"
console.log(keepLast("hello")); // "lo"
console.log(keepLast("hello world")); // "ld"
console.log(keepFirstLast("hello")); // "helo"
console.log(keepFirstLast("heffo world")); // "held"
console.log(cutFirstLast("hello")); // "l"
console.log(cutFirstLast("hello world")); // "llo wo"
