/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var newString = string.replace(/[/,!?;]/g, ' ');

  var arrayOfString = newString.split(' ');
  var newList = [];

  for (let i = 0; i < arrayOfString.length; i++) {
    if (!isNaN(+arrayOfString[i]) && arrayOfString[i] !== '') {
      newList.push(+arrayOfString[i]);
    }
  }
  const minValue = Math.min.apply(null, newList);
  const maxValue = Math.max.apply(null, newList);
  var result = { min: minValue, max: maxValue };

  return result;
}