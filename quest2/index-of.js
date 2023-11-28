function indexOf(arr, value, start = 0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, value, start = arr.length - 1) {
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// Array.prototype.indexOf = undefined
// Array.prototype.lastIndexOf = undefined
// Array.prototype.includes = undefined

// [ 1, 2, 3, 4, 5 ]
// count an array
// [0] -> 1
// Array.length-1 (last)-> 5

console.log(indexOf([1, 2, 3, 4, 5], 3));
// output 2
// console.log(arr.length);

console.log(lastIndexOf([1, 2, 3, 4, 5, 3], 3)); // Outputs: 5
console.log(includes([1, 2, 3, 4, 5], 3)); // Outputs: true
