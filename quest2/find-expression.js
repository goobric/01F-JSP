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
