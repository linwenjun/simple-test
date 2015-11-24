function median(arr) {
  var len = arr.length;

  arr.sort(function(a, b) {
    return a - b;
  });

  if(len % 2 == 0) {
    return (arr[len/2-1] + arr[len/2]) / 2;
  } else {
    return arr[(len-1)/2];
  }
}

function calculate_median(arr) {
  var list = arr.filter(function(val, key) {
    return key % 2 === 1;
  })

  return median(list);
}
