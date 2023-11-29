function fits(word, position) {
  var { line, char, direction } = position;
  if (direction === 'horizontal') {
    if (char + word.length > lines[line].length) {
      return false;
    }
    for (var i = 0; i < word.length; i++) {
      if (lines[line][char + i] !== '.') {
        return false;
      }
    }
  } else {
    // direction === 'vertical'
    if (line + word.length > lines.length) {
      return false;
    }
    for (var i = 0; i < word.length; i++) {
      if (lines[line + i][char] !== '.') {
        return false;
      }
    }
  }
  return true;
}

function replace(lines, word, position) {
  var { line, char, direction } = position;
  if (direction === 'horizontal') {
    lines[line] =
      lines[line].substring(0, char) +
      word +
      lines[line].substring(char + word.length);
  } else {
    // direction === 'vertical'
    for (var i = 0; i < word.length; i++) {
      lines[line + i] =
        lines[line + i].substring(0, char) +
        word[i] +
        lines[line + i].substring(char + 1);
    }
  }
  return lines;
}

function crosswordSolver(puzzle, words, index = 0) {
  var lines = puzzle.split('\n');
  var wordPositions = getWordPositions(lines);
  if (index === wordPositions.length) {
    return words.length === 0 ? lines.join('\n') : null;
  }
  var position = wordPositions[index];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (fits(word, position, lines)) {
      var newLines = replace([...lines], word, position);
      var result = crosswordSolver(
        newLines.join('\n'),
        words.filter((_, j) => j !== i),
        index + 1
      );
      if (result !== null) {
        return result;
      }
    }
  }
  return null;
}

// Call the function
var result = crosswordSolver(emptyPuzzle, words);
if (result !== null) {
  console.log(result);
} else {
  console.log('Error');
}
