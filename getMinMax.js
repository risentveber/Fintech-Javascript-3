function getMinMax(str) {
  let min = Infinity, max = -Infinity, x;

  while (str !== '') {
    while (isNaN(parseFloat(str[0])) && str[0] !== '-') {
      str = str.slice(1);
    }
    if (str === '') {
      break;
    }
    x = parseFloat(str);
    if (x > max) {
      max = x;
    }
    if (x < min) {
      min = x;
    }
    x += '';
    str = str.slice(x.length);
  }
  return {min: min, max: max};
}
