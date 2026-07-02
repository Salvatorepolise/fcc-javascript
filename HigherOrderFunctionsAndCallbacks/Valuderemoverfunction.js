function destroyer(arr, ...valsToRemove) {
  // Use filter to keep only elements not present in the valsToRemove array
  return arr.filter(item => !valsToRemove.includes(item));
}