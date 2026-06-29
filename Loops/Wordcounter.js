function getMatchedWordCount(sentence, match) {
  let count = 0;

  for (const word of sentence) {
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
    
    if (word === match) {
      count = count + 1;
    }
  }

  return count;
}


console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);


console.log(
  getMatchedWordCount(
    ["Do", "not", "fear", "the", "dandy", "lion"],
    "dandy"
  )
);