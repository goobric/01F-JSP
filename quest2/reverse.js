function reverse(input) {
  var isString = typeof input === "string";
  var arr = isString ? input.split("") : input;
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return isString ? result.join("") : result;
}

console.log(reverse("hello")); // "olleh"
console.log(reverse("hello world")); // "dlrow olleh"
console.log(reverse([1, 2, 3])); // [3, 2, 1]
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([])); // []
