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
  const rowsNumber = Math.ceil((max + 1) / cols);
  const columnsNumber = ((cols > max) ? max + 1 : cols);
  let tempString = '';
  let tempValue = 1;
  let finalString = '';

  for (let i = 0; i < rowsNumber; i++) {
    tempValue = i;
    for (let j = 0; j < columnsNumber; j++) {

      tempString += ((String(tempValue).length === 2 || j === 0) ? ' ' : '  ') + ((tempValue <= max) ? tempValue : '');
      tempValue += rowsNumber;
    }
    finalString += tempString + ((i === rowsNumber - 1) ? '' : '\n');
    tempString = '';
  }
  return finalString;
}
