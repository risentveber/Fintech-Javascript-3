/* eslint-disable linebreak-style */
/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const regex = /[+-]?\d+(\.\d+)?/g;
  const floats = string.match(regex).map(v => parseFloat(v));
  const min = Math.min(...floats);
  const max = Math.max(...floats);

  return { min, max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x > 2) {
    return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  }
  return 1;
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

let cache = { 0: 0, 1: 1 };

function fibonacciWithCache(x) {
  if (x in cache) {
    return cache[x];
  }
  cache[x] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
  return cache[x];
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
  function getStrNumb(x) {
    return (x < 10) ? ' ' + x : x;
  }
  max += 1;
  const excess = max - cols * Math.trunc(max / cols);
  const cieledNumb = Math.ceil(max / cols);
  let ansStr = '';

  for (let i = 0; i < cieledNumb; i++) {
    let rowRange = (i === cieledNumb - 1 && excess !== 0) ? excess : cols;

    for (let j = 0; j < rowRange; j++) {
      let nextNumb = i + Math.min(j, excess) + j * Math.floor(max / cols);

      ansStr += (nextNumb >= max) ? '' : getStrNumb(nextNumb);
      if (j !== rowRange - 1) {
        ansStr += ' ';
      }
    }
    if (i !== cieledNumb - 1) {
      ansStr += '\n';
    }
  }
  return ansStr;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let ansStr = input[0], cnt = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      ansStr += (cnt > 1) ? cnt : '';
      ansStr += input[i];
      cnt = 1;
    } else {
      cnt += 1;
    }
  }
  if (cnt > 1) {
    ansStr += cnt;
  }
  return ansStr;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
