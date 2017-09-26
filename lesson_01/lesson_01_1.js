/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let numbPattern = /[0-9]|[.-]/i;
  let minNumber = Infinity;
  let maxNumber = -Infinity;
  let tempString = String();

  for (let i = 0; i < string.length; i++) {
    if (numbPattern.test(string[i])) {
      tempString = tempString + string[i];
      if (!numbPattern.test(string[i + 1])) {

        if (+tempString > maxNumber) {
          maxNumber = +tempString;
        }
        if (+tempString < minNumber) {
          minNumber = +tempString;
        }
        tempString = '';
      }
    }
  }
  return { min: minNumber, max: maxNumber };
}
