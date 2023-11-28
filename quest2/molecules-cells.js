function RNA(DNA) {
  var RNA = "";
  for (var i = 0; i < DNA.length; i++) {
    switch (DNA[i]) {
      case "G":
        RNA += "C";
        break;
      case "C":
        RNA += "G";
        break;
      case "T":
        RNA += "A";
        break;
      case "A":
        RNA += "U";
        break;
    }
  }
  return RNA;
}

function DNA(RNA) {
  var DNA = "";
  for (var i = 0; i < RNA.length; i++) {
    switch (RNA[i]) {
      case "C":
        DNA += "G";
        break;
      case "G":
        DNA += "C";
        break;
      case "A":
        DNA += "T";
        break;
      case "U":
        DNA += "A";
        break;
    }
  }
  return DNA;
}

console.log(RNA("GCTA")); // Outputs: 'CGAU'

console.log(DNA("CGAU")); // Outputs: 'GCTA'

// function split(str, separator) {
//   var result = [];
//   var temp = "";
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === separator) {
//       result.push(temp);
//       temp = "";
//     } else {
//       temp += str[i];
//     }
//   }
//   result.push(temp);
//   return result;
// }

// Open your browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect").
// Navigate to the "Console" tab.
// Copy and paste the entire code into the console.
// Press Enter to run the code.
// Now you can call the DNA and split functions directly in the console.
// For example, you can type DNA('CGAU') or split('hello world', ' ') and press Enter to see the results.
