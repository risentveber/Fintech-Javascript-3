/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var str = string.match(/\-?\d*\.?\d+/g);

  str.sort((a, b) => a - b);
  var objStr = {
    max: str[str.length - 1],
    min: str[0]
  };

  return objStr;
}
/* ============================================= */
/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}
/* ============================================= */
/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  var memo = [0, 1];

  var fib = x => {
    var result = memo[x];

    if (typeof result !== 'number') {
      result = fib(x - 1) + fib(x - 2);
      memo[x] = result;
    }
    return result;
  };

  return fib(x);
}
/* ============================================= */

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
  var result = [];

  var printNumberAtPosition = (number, row, column) => {
    if (result[row] === undefined) {
      result[row] = [];
    }
    number = number < 10 ? ` ${number}` : `${number}`;
    result[row][column] = number;
  };
  var rows = 1;

  while (rows * cols <= max) {
    rows += 1;
  }
  var current = 0,
    column = 0;

  var row;

  while (current <= max) {
    row = 0;
    while (row < rows && current <= max) {
      printNumberAtPosition(current++, row, column);
      row += 1;
    }
    column += 1;
  }
  var str = '';

  for (row = 0; row < result.length; row++) {
    var buffer = [];

    for (column = 0; column < result[row].length; column++) {
      buffer.push(result[row][column]);
    }
    str += `${buffer.join(' ')}\n`;
  }
  return str.substring(0, str.length - 1);
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  var n = '';

  input.match(/(.)\1*/g).forEach(a => {
    if (a.length > 1) {
      n += a[0] + a.length;
    } else {
      n += a[0];
    }
  });
  return n;
}
module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
