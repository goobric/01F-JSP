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


724 B
Raw
Permalink
Blame
History
function f(target, current_sum = 0, start = 1, result = [], output = []) {
  if (target === 0 || target === 1) return output;
  // .slice() => no modifications on result
  if (current_sum === target) return output.push(result.slice());
  for (let i = start; i < target; i++) {
    let temp_sum = current_sum + i;
    if (temp_sum <= target) {
      result.push(i);
      f(target, temp_sum, i, result, output);
      // remove last element => backtracking
      result.pop();
    } else {
      return;
    }
  }
}
let sums = function (target) {
  let output = [];
  let result = [];
  f(target, 0, 1, result, output);
  return output;
};
let n = 4;
let result = sums(n);
console.log(result);


console.log(sums(4));
console.log(sums(5));
console.log(sums(6));
console.log(sums(7));
console.log(sums(8));
