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
  const arrStr = string.match(/-?\d+(\.\d+)?/gi);
  let minNum = 1 / 0;
  let maxNum = -1 / 0;

  for (let i = 0; i < arrStr.length; ++i) {
    const curNum = parseFloat(arrStr[i]);

    minNum = Math.min(minNum, curNum);
    maxNum = Math.max(maxNum, curNum);
  }
  return { min: minNum, max: maxNum };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

let cacheArray = [0, 1];

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  if (!cacheArray[x] && cacheArray[x] !== 0) {
    const sizeOfCounted = cacheArray.length;

    for (let curX = sizeOfCounted; curX <= x; ++curX) {
      cacheArray.push(cacheArray[curX - 1] + cacheArray[curX - 2]);
    }
  }
  return cacheArray[x];
}

/* ============================================= */

/**
 * Возвращает строку из числа и пробела или число в зависимости
 * от того, сколько символов отводится на число.
 * 
 * @param {number} num
 * @return {number|string} форматированое значение
 */
function formatNumber(num) {
  if (!Math.floor(num / 10)) {
    return ' ' + num;
  }
  return num;
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
  let ansStr = '';
  const rows = Math.ceil((max + 1) / cols);
  const lastLineLength = cols - cols * rows + max + 1;

  for (let curRow = 0; curRow < rows; ++curRow) {
    let curNum = curRow;
    const curCols = lastLineLength * (curRow === rows - 1) || cols;

    for (let curCol = 0; curCol < curCols; ++curCol) {
      if (curCol) {
        ansStr += ' ';
      } else if (curRow) {
        ansStr += '\n';
      }
      ansStr += formatNumber(curNum);
      curNum += rows - 1 * (curCol >= lastLineLength);
    }
  }
  console.log(ansStr);
  return ansStr;
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
  let ansStr = input[0];
  let counter = 1;

  for (let i = 1; i < input.length; ++i) {
    if (ansStr[ansStr.length - 1] === input[i]) {
      ++counter;
    } else {
      if (counter !== 1) {
        ansStr += counter;
      }
      counter = 1;
      ansStr += input[i];
    }
  }
  if (counter !== 1) {
    ansStr += counter;
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
