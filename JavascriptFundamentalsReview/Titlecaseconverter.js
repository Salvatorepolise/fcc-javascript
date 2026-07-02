function titleCase(str) {
  
  const words = str.toLowerCase().split(" ");
  
  const titledWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return titledWords.join(" ");
}