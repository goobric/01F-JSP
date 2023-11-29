function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
// console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
// console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

function triangle(character, height) {
  var triangle = '';
  for (var i = 1; i <= height; i++) {
    triangle += character.repeat(i) + '\n';
  }
  return triangle;
}

console.log(triangle('*', 5));
console.log(triangle('*', 3));
