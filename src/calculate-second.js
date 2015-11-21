function median(arr) {
  var newArr = arr.sort(function(a,b) {
    return a - b;
  })
  newArr = newArr.concat(newArr);
  var len = newArr.length;

  return (newArr[len/2-1] + newArr[len/2]) / 2
}

function calculate_median(arr) {
  var list = arr.filter(function(val, key) {
    return key % 2 === 1;
  })

  return median(list);
}
