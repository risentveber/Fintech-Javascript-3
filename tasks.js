/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {

    let arr = [];
    var j = 0;
    const len = string.length;
    for (var i = 0; i < len; i++) {
        if (!isNaN(parseFloat(string.substring(i, len)))) {
            // var k = i;
            arr[j] = parseFloat(string.substring(i, len));
            let s = String(arr[j]);
            i += s.length;
            j++;
        }
    }
    if(!isNaN(arr))
        return {};

    var minimum = arr[0];
    var maximum = minimum;
    for (i = 0; i < len; ++i) {
        if (arr[i] > maximum) maximum = arr[i];
        if (arr[i] < minimum) minimum = arr[i];
    }
    return {maximum, minimum};
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
let fibonacciWithCache;

function fib(x) {

    let cache = {};
    let res;

    return x => {
        if (x in cache) {
            return cache[x];
        }
        if (x == 0)
            res = 0;

        if (x === 1 || x === 2) {
            res = 1;
        } else {
            res = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
        }
        cache[x] =res;
        return res;
    };
}

fibonacciWithCache = fib();

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

    var str = '';
    if (max > 100)
        return str;

    var rows = Math.ceil(max/cols);
    var ok = true;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {

            if (!Math.trunc((i + j * rows) / 10)) {
                if(j)
                    str += '  ';
                else
                    str += ' ';
            }else{
                if(j)
                    str += ' ';
                else
                    str += '';
            }
            console.log(i + j * rows);
            if((i + j * rows) < max)
                str += i + j * rows;
            else{
                // k = false;
                if(ok)
                    str += max;
                ok = false;
            }
        }
        if(j != cols - 1 && i != rows - 1)
            str += '\n';
    }
    return str;
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
	var str = '';
    var i = 0,
        j = 0;
    //bool false = true;
    while(i < input.length){

        str += input[i];
        var k = 1;
        for (j = i + 1; j <= input.length; j++) {
            if (input[i] === input[j]) {
                k++;
            }else{
                if ( k != 1)
                    str += k;
                break;
            }
        }
        i += k;
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
