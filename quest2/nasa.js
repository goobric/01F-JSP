function nasa(N) {
  var result = "";
  for (var i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "Fizz-Buzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += i;
    }
    result += " ";
  }
  return result.trim();
}
console.log(nasa(15));
console.log(nasa(20));
console.log(nasa(30));
console.log(nasa(50));
