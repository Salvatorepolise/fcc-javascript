function uniteUnique(...arrays) {

  const uniqueValues = new Set();
  
  arrays.forEach(arr => {
    arr.forEach(val => {
      uniqueValues.add(val);
    });
  });
  

  return [...uniqueValues];
}

