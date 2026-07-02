function pairElement(str) {
  // Create an object to store the base pairs
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  // Convert the string to an array and map each character to its pair
  return str.split("").map(char => [char, pairs[char]]);
}

// Example usage:
// console.log(pairElement("ATCGA")); 
// Output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]