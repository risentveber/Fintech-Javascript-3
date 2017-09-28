/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const numbersStringArray = string.split(/\D* /g);
  let numbersArray = [];

  for (let i = 0; i < numbersStringArray.length; i++) {
    numbersArray.push(+numbersStringArray[i]);
  }
  return { min: Math.min.apply(null, numbersArray), max: Math.max.apply(null, numbersArray) };
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
  if (x === 2 || x === 1) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const memoize = (fn) => {
  let cache = {};

  return (...args) => {
    let n = args[0];

    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const fibonacciWithCache = memoize(
  (x) => {
    if (x <= 2) {
      return 1;
    }
    else {
      return fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
    }
  }
);


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

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let a0 = input[0];
  let numberCount = 1;
  let finalString = '';

  for (let i = 1; i <= input.length; i++) {

    if (input[i] === a0) {
      numberCount += 1;
    } else {
      finalString += a0;
      if (numberCount !== 1) {
        finalString += numberCount;
      }
      numberCount = 1;
      a0 = input[i];
    }
  }

  return finalString;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
