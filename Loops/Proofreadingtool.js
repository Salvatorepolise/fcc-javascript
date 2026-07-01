function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}
function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}
function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];
  
  const phrases = new Map();
  const results = [];

  // Extract all possible sequences of phraseLength
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    phrases.set(phrase, (phrases.get(phrase) || []).concat(i));
  }

  // Filter sequences that appear more than once
  for (const indices of phrases.values()) {
    if (indices.length > 1) {
      results.push(...indices);
    }
  }

  return results.sort((a, b) => a - b);
}
function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) return [];

  return texts.map(words => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words)
  }));
}