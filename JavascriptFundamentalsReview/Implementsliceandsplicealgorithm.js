function frankenSplice(arr1, arr2, n) {
  const localArr = arr2.slice();
  
  localArr.splice(n, 0, ...arr1);
  
  return localArr;
}