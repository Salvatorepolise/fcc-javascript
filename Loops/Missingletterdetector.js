function fearNotLetter(str) {
  // Iterate through the string starting from the second character
  for (let i = 0; i < str.length - 1; i++) {
    // Get the character code of the current and next letter
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    // If the difference between codes is greater than 1, a letter is missing
    if (nextCode - currentCode > 1) {
      // Return the missing letter by converting the code back to a string
      return String.fromCharCode(currentCode + 1);
    }
  }

  // If the loop finishes without finding a gap, return undefined
  return undefined;
}