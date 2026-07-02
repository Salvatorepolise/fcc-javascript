function getIndexToIns(arr, num) {
  // Sort the array in ascending order numerically
  arr.sort((a, b) => a - b);

  // Find the index of the first element that is greater than or equal to the num
  const index = arr.findIndex(element => element >= num);

  // If findIndex returns -1, it means the number is greater than all elements
  // or the array is empty, so it should be inserted at the end.
  return index === -1 ? arr.length : index;
}