function findExpression(n) {
  function findPath(current, target) {
    if (current > target) {
      return null;
    }
    if (current === target) {
      return '';
    }
    var path = findPath(current * 2, target);
    if (path !== null) {
      return '*2' + path;
    }
    path = findPath(current + 4, target);
    if (path !== null) {
      return '+4' + path;
    }
    return null;
  }
  var path = findPath(1, n);
  if (path !== null) {
    return '1' + path;
  }
  return undefined;
}

// The output of findExpression(10) would be 1*2*2+4.
// Here's the sequence of operations:
// Start with 1.
// Multiply by 2 to get 2.
// Multiply by 2 again to get 4.
// Add 4 to get 8.
// Add 4 again to get 12, which is greater than 10, so this path is not valid.
// Go back to step 3, but this time add 4 after multiplying by 2 once. This gives 1*2+4 = 6, which is less than 10, so continue.
// From 6, multiply by 2 to get 12, which is greater than 10, so this path is not valid.
// Go back to step 6, but this time add 4 after getting 6. This gives 1*2+4+4 = 10, which is the target number.
// So, the sequence of operations is 1*2+4+4, but the function findExpression always tries to multiply before adding, so it will return 1*2*2+4 instead.