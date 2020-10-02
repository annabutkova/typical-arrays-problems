exports.min = function min (array) {
  if ( typeof array == 'undefined' || array.length === 0 ) {
    return 0;
  } else {
    array.sort((a,b) => a-b);
  return array[0];
  }
  
}

exports.max = function max (array) {
  if ( typeof array == 'undefined' || array.length === 0 ) {
    return 0;
  } else {
    array.sort((a,b) => a-b);
  return array[array.length-1];
  }
}

exports.avg = function avg (array) {
  
  let sum = 0;
  if ( typeof array == 'undefined' || array.length === 0 ) {
    return 0;
  } else {
    
    array.forEach(function(elem) {
      sum += elem;
    });
    return sum/array.length;    
  }
}
