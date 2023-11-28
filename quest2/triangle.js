function triangle(character, height) {
  var triangle = '';
  for (var i = 1; i <= height; i++) {
    triangle += character.repeat(i) + '\n';
  }
  return triangle;
}

console.log(triangle('*', 3));
console.log(triangle('*', 5));
console.log(triangle('*', 9));

// Now you can call the triangle function directly in the console.
// For example, you can type triangle('*', 5) and press Enter to see the result.
