function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  // Continue while the current Fibonacci number is within the limit
  while (curr <= num) {
    // Check if the current Fibonacci number is odd
    if (curr % 2 !== 0) {
      sum += curr;
    }
    
    // Generate the next Fibonacci number
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

// Example usage:
// console.log(sumFibs(1000)); // Output: 1785