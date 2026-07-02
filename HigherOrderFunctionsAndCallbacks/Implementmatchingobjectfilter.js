function whatIsInAName(collection, source) {
  // Get the keys of the source object
  const sourceKeys = Object.keys(source);

  // Filter the collection
  return collection.filter(obj => {
    // Check if every key in source exists in obj and has the same value
    return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}