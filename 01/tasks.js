/**
 * Найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(string) {
  const numberPattern = /[-+]?\d*\.?\d+/g;
  let min;
  let max;
  const arr = string.match(numberPattern);

  if (arr === null) {
    return { min: NaN, max: NaN };
  }
  min = +arr[0];
  max = +arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x < 1) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }

  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

const cache = [1, 1];

function fibonacciWithCache(x) {
  if (x < 1) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  if (cache.length >= x + 1) {
    return cache[x];
  }
  const fib = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);

  cache.push(fib);

  return fib;
}
/*
console.log(fibonacciWithCache(7));
console.log(fibonacciWithCache(5));
console.log(fibonacciWithCache(8));
console.log(fibonacciWithCache(9));
console.log(fibonacciWithCache(12));
console.log(fibonacciWithCache(11));
console.log(fibonacciWithCache(10));
console.log(cache);
*/

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let encoding = '';
  let prev;
  let count;
  let i;

  for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
    if (input[i] !== prev) {
      encoding = encoding + prev + (count === 1 ? '' : count);
      count = 1;
      prev = input[i];
    } else {
      count += 1;
    }
  }
  encoding = encoding + prev + (count === 1 ? '' : count);

  return encoding;
}

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
  max = +max;
  cols = +cols;
  let str = '';
  let num = 0;

  for (let i = 0; i < (Math.floor((max + 1) / cols) + ((max + 1) % cols > 0 ? 1 : 0)); i++) {
    let clmnVal = 1;

    str += Math.floor(i / 10) > 0 ? ('' + i) : (' ' + i);
    for (let j = 1; j < cols; j++) {
      num = i + Math.floor((max + 1) / cols) * j + clmnVal * ((max + 1) % cols > 0 ? 1 : 0);
      if (clmnVal < (max + 1) % cols) {
        clmnVal += 1;
      } else if (i === Math.floor((max + 1) / cols)) {
        break;
      }
      str += (Math.floor(num / 10)) ? (' ' + num.toString()) : ('  ' + num.toString());
    }
    str += '\n';
  }
  return str.replace(/\n$/, '');
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
