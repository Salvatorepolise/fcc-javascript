function pyramid(character, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    const row = inverted ? rows - 1 - i : i;
    
    const spaceCount = rows - 1 - row;
    
    const charCount = 2 * row + 1;
    
    result += " ".repeat(spaceCount) + character.repeat(charCount) + "\n";
  }

  return result;
}