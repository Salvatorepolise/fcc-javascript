function dropElements(arr, func) {
  // Loop while the array is not empty and the first element fails the test
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Remove the first element
  }
  
  return arr;
}

// Example usage:
// console.log(dropElements([1, 2, 3, 4], n => n >= 3)); // [3, 4]
// console.log(dropElements([1, 2, 3, 4], n => n > 5));   // []