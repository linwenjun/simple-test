function even_group_calculate_average(arr) {
  var result = [];

  var temp = arr.filter(function(val, key) {
    return key % 2 === 1;
  }).filter(function(val) {
    return val % 2 === 0;
  }).reduce(function(a, b) {
    var len = b.toString().length;
    a[len] = a[len] || [];
    a[len].push(b);
    return a;
  }, {});

  for(var i in temp) {
    var avg = temp[i].reduce(function(a ,b) {
      return a + b;
    }) / temp[i].length
    result.push(avg);
  }

  return result.length ? result : [0];
}
