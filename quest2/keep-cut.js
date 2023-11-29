function cutFirst(str) {
  return str.slice(2);
}

function keepFirst(str) {
  return str.slice(0, 1);
}

function keepFirstAndCutLast(str) {
  return str.slice(0, -1);
}

function keepLast(str) {
  return str.slice(-1);
}

function cutLast(str) {
  return str.slice(0, -1);
}

function cutFirstLast(str) {
  return str.slice(2, -2);
}

function keepFirstAndLast(str) {
  return str.slice(0, 1) + str.slice(-1);
}

// keepFirstLast returns the first 2 characters, and the last 2 characters.
// if the string is less than or equal to 4, it returns the whole string.

function keepFirstLast(str) {
  if (str.length <= 4) {
    return str;
  }
  return str.slice(0, 2) + str.slice(-2);
}

console.log(keepFirstLast("hello")); // "helo"
console.log(keepFirstLast("hello world")); // "held"
