function sums(n) {
  function findPartitions(target, max) {
    if (target === 0) {
      return [[]];
    }
    if (target < 0 || max === 0) {
      return [];
    }
    var withoutMax = findPartitions(target, max - 1);
    var withMax = findPartitions(target - max, max);
    withMax = withMax.map((partition) => [max, ...partition]);
    return withoutMax.concat(withMax);
  }
  return findPartitions(n, n);
}

console.log(sums(4));
console.log(sums(5));
console.log(sums(6));
console.log(sums(7));
console.log(sums(8));
