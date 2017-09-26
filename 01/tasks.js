/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  if (!string.length) {
    return null;
  }
  let arrStr = string.split(/[ ,:;!?`"&|()<>{}\[\]\r\n/\\~]+/);
  let minNum = 1/0;
  let maxNum = -1/0;
  for (let i = 0; i < arrStr.length; ++i) {
    let curNum = parseFloat(arrStr[i]);
    if (curNum) {
      minNum = Math.min(minNum, curNum);
      maxNum = Math.max(maxNum, curNum);
    }
  }
  return {min: minNum, max: maxNum};
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  let myX = x;
  let firstFib = 0;
  let secondFib = 1;
  while(myX) {
    secondFib += firstFib;
    firstFib = secondFib - firstFib;
    --myX;
  }
  return firstFib;
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
  let ansStr = '';
  let rows = Math.ceil(max / cols);
  for (let curRow = 0; curRow < rows; ++curRow) {
    for (let curCol = 0; curCol < cols; ++curCol) {
      let curNum = curCol * rows + curRow;
      if (!curNum / 10) {
        ansStr += ' ';
      } 
      ansStr += curNum;
    }
    ansStr += '\n';
  }
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} input
 * @return {string}
 */
function rle(input) {
  if (!input.length) {
    return '';
  }
  let curChar = input[0];
  let ansStr = '' + input[0];
  let counter = 1;
  for (let i = ; i < input.length; ++i) {
    if (curChar === input[i]) {
      ++counter;
    } else {
      if (counter != 1) {
        ansStr += counter;
      }
      counter = 0;
      ansStr += input[i];
      curChar = input[i];
    }
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
