function split(str, separator) {
  var result = [];
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      result.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  result.push(temp);
  return result;
}

function join(arr, separator) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }
  return result;
}

// Now you can call the split and join functions directly in the console.
// For example, you can type split('hello world', ' ') or join(['hello', 'world'], ' ') and press Enter to see the results.
