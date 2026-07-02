function largestOfAll(arr) {
  const results = [];
  
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = Math.max(...arr[i]);
    results.push(largestNumber);
  }
  
  return results;
}