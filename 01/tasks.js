/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(str) {
    let arr = str.split(/[ .,!?:;]/)
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(+arr[i]) || (arr[i].length === 0)) {
            arr.splice(i, 1)
            --i
        }
    }
    let min = arr[0]
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min,arr[i])
        max = Math.max(max,arr[i])
    }
    return {min: min, max:max}
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(n) {
    if (n===0)
        return 0
    if (n===1)
        return 1
    return fibonacciSimple(n-1)+fibonacciSimple(n-2);
}
/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(n) {
    let cache = {}

    function fibonacci(n) {
        let value
        if (n in cache)
            value = cache[n]
        else {
            if (n === 0 || n === 1)
                value = n
            else
                value = fibonacci(n - 1) + fibonacci(n - 2)
            cache[n] = value
        }
        return value
    }

    return fibonacci(n)
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
    let num_str = Math.ceil((max+1)/cols)
    let final_string = ''
    flag = false
    for (let i = 0; i < num_str; i++){
        for (let j = 0; j < cols; j++){
          if (i + j*num_str <= max)
            if (i + j*num_str < 10)
              final_string += ' ' + (i + j*num_str)
            else
              final_string += i + j*num_str
          if (i + j*num_str === max) {
            flag = true
            break;
          }
          if (j < cols-1 && !flag)
            final_string += ' '
        }
      if (flag)
        break;
      if (i < num_str - 1 && !flag)
        final_string += '\n'
    }
  return final_string
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
    let final_str = ''
    if (input.length > 0) {
        let cur_sym = input[0]
        let count = 1
        for (let i = 1; i < input.length; i++) {
            if (input[i] === cur_sym)
                ++count
            else {
                final_str += cur_sym
                if (count > 1)
                    final_str += count
                count = 1
                cur_sym = input[i]
            }
        }
        final_str += cur_sym
        if (count > 1)
            final_str += count
    }
    return final_str
}


module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
