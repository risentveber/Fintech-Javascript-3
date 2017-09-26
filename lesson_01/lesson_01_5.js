/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  var rows = (max > cols ? (max + 1) / cols : 1);
  cols = (max > cols ? cols : max + 1);
  var resultString = String();

  for (let i = 0; i < rows ; i++) {
    var tmpString = '';
    var tmpNumb = i;
    var separator = '';

    for (let j = 0; j < cols ; j++) {
      // console.log(String(tmpNumb + rows).length)
      if (String(tmpNumb + rows).length === 2) {
        separator = ' ';
      }
      if (String(tmpNumb + rows).length === 1) {
        separator = '  ';
      }
      if (j === cols - 1) {
        separator = '\n';
        if (i === rows - 1) {
          separator = '';
        }
      }
      tmpString = tmpString + tmpNumb + separator;
      tmpNumb = tmpNumb + rows;
    }
    resultString = resultString + ' ' + tmpString;
  }
  return resultString;
}
