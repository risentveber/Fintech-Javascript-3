/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const array = string.split(/[\s,;:]+/);
  const objectMinMax = { min: null, max: null };

  for (let i = 0; i < array.length; i++) {
    const number = +array[i];

    if (!isNaN(number)) {
      if (objectMinMax.min === null) {
        objectMinMax.min = number;
      } else if (objectMinMax.min > number) {
        objectMinMax.min = number;
      }
      if (objectMinMax.max === null) {
        objectMinMax.max = number;
      } else if (objectMinMax.max < number) {
        objectMinMax.max = number;
      }
    }
  }

  return objectMinMax;
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return (x === 0 || x === 1) ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const fibonacciWithCache = (function() {
  const memo = {};

  function fibonacci(x) {
    let value;

    if (x in memo) {
      value = memo[x];
    } else {
      value = (x === 0 || x === 1) ? x : fibonacci(x - 1) + fibonacci(x - 2);
      memo[x] = value;
    }
    return value;
  }

  return fibonacci;
}());

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
  let string = '';
  const row = Math.ceil(max / cols);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (i + j * row <= max) {
        string += (i + j * row < 10) ? ` ${i + j * row} ` : `${i + j * row} `;
      } else {
        break;
      }
    }
    string = `${string.slice(0, -1)}\n`;
  }
  return string.slice(0, -1);
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  const newString = [],
    array = input.split('');
  let newPosition = 0,
    symbolRepeat = 0,
    currUniqueSymbol = array[0];

  for (let j = 0; j < array.length; j++) {
    if (currUniqueSymbol !== array[j]) {
      newString[newPosition++] = currUniqueSymbol + ((symbolRepeat < 2) ? '' : symbolRepeat);
      currUniqueSymbol = array[j];
      symbolRepeat = 1;
    } else {
      symbolRepeat++;
    }
  }

  newString[newPosition] = currUniqueSymbol + ((symbolRepeat < 2) ? '' : symbolRepeat);

  return newString.join('');
}


module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
