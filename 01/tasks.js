/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var input = string;
  var number = /-?(\d+)(\.\d+)?/g;
  var match;
  var maxN = -Infinity;
  var minN = Infinity;

  while (match = number.exec(input)) {
    maxN = Math.max(maxN, +(match[0]));
    minN = Math.min(minN, +(match[0]));
  }
  return ({ min: minN, max: maxN });
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  var n = x;

  if (n < 2) {
    return n;
  }
  return fibonacciSimple(n - 1) + fibonacciSimple(n - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciWithCache(x) {
  var memo = {};

  memo[0] = 0;
  memo[1] = 1;
  function f(x) {
    var value;

    if (x in memo) {
      value = memo[x];
    } else {
      if (x >= 2) {
        value = f(x - 1) + f(x - 2);
      }
      memo[x] = value;
    }
    return value;
  }

  return f(x);
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
  var string = '';
  var p = 1;
  var l;
  var num = 0;
  var i = 0;

  for (i = 0; i < (parseInt((max + 1) / cols, 10) + +((max + 1) % cols > 0)); i++) {
    string += (parseInt(i / 10, 10)) ? ('' + i) : (' ' + i);
    for (l = 1; l < cols; l++) {
      num = i + parseInt((max + 1) / cols, 10) * l + p * (+((max + 1) % cols > 0));
      if (p < (max + 1) % cols) {
        p++;
      } else if (i === parseInt((max + 1) / cols, 10)) {
        break;
      }
      string += (parseInt(num / 10, 10)) ? (' ' + num) : ('  ' + num);
    }
    string += '\n';
    p = 1;
  }
  string = string.substr(0, string.length - 1);
  return string;
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  var string = input;
  var i;
  var j;
  var symb;
  var str = '';

  for (i = 0; i < string.length; i++) {
    symb = string[i];
    j = 0;
    while (string[i + j] === symb) {
      j++;
    }
    i = i + j - 1;
    if (j - 1) {
      str += symb + j;
    } else {
      str += symb;
    }
  }
  return str;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
