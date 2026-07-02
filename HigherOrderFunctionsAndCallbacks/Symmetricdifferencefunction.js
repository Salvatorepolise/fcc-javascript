function diffArray(arr1, arr2) {
  // Find items in arr1 that are not in arr2
  const part1 = arr1.filter(item => !arr2.includes(item));
  
  // Find items in arr2 that are not in arr1
  const part2 = arr2.filter(item => !arr1.includes(item));
  
  // Combine the results
  return part1.concat(part2);
}