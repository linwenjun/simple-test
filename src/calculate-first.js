function single_element(arr) {
  return arr.filter(function(val, key) {
    return key % 2 === 1
  }).filter(function(val, key, newArr) {
    return newArr.indexOf(val) === newArr.lastIndexOf(val);
  })
}
