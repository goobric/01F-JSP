// round: which behaves similar to Math.round()

// function round(number) {
//   return Math.round(number);
// }

function round(number) {
  var integerPart = Math.floor(number);
  var decimalPart = number - integerPart;
  return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
}

// ceil: which behaves similar to Math.ceil()

// function ceil(number) {
//   return Math.ceil(number);
// }

function ceil(number) {
  var integerPart = Math.floor(number);
  return number > integerPart ? integerPart + 1 : integerPart;
}

// floor: which behaves similar to Math.floor()

// function floor(number) {
//   return Math.floor(number);
// }
function floor(number) {
  var integerPart = parseInt(number, 10);
  return number >= integerPart ? integerPart : integerPart - 1;
}

// trunc: which behaves similar to Math.trunc()

// function trunc(number) {
//   return Math.trunc(number);
// }
function trunc(number) {
  return number < 0 ? ceil(number) : floor(number);
}

const number = [3.7, -3.7, 3.1, -3.1];
console.log(number.map(round));
console.log(number.map(floor));
console.log(number.map(trunc));
console.log(number.map(ceil));

// Math.round = Math.ceil = Math.floor = Math.trunc = undefined
