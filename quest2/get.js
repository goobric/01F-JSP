function get(src, path) {
  var keys = path.split(".");
  var result = src;
  for (var i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
}

// var obj = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// };
// console.log(get(obj, "a.b.c")); // 1

const src = { nested: { key: "peekaboo" } };
const path = "nested.key";
get(src, path); // -> 'peekaboo'
