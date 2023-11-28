function pyramid(character, height) {
  var pyramid = '';
  for (var i = 1; i <= height; i++) {
    pyramid += ' '.repeat(height - i);
    pyramid += character.repeat(2 * i - 1);
    pyramid += '\n';
  }
  return pyramid;
}

console.log(pyramid('*', 3));
console.log(pyramid('*', 5));
console.log(pyramid('*', 9));
console.log(pyramid('*', 15));

// You can also call the pyramid function with other arguments directly in the console.
// For example, you can type pyramid('*', 7) and press Enter to see the result.
