function sumAll(arr) {
  // Find the smallest and largest numbers
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  
  let sum = 0;
  
  // Iterate from min to max (inclusive) and add to sum
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

// Example usage:
// console.log(sumAll([1, 4])); // Output: 10
// console.log(sumAll([4, 1])); // Output: 10