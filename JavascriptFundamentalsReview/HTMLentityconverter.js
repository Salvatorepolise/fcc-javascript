function convertHTML(str) {
  // Define the characters and their corresponding HTML entities
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Use a regular expression to find any of the special characters
  // The 'g' flag ensures it replaces all occurrences in the string
  return str.replace(/[&<>"']/g, function(match) {
    return entities[match];
  });
}

// Example usage:
// console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"
// console.log(convertHTML("Schindler's List")); // "Schindler&apos;s List"