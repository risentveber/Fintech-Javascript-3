/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {

    let l = string.length;
    let maxi=0;
    let mini=0;

    if(l===0){

        return 'Empty line!';
    } else {

        let arr = string.match(/-?\d+(\.\d+)?/g);

        if(arr.length!==0){

            maxi = arr[0];
            mini = arr[0];
            for (let i = 0; i < arr.length; i++) {

                if (+arr[i] > maxi) {

                    maxi = +arr[i];
                } else {

                    if (+arr[i] < mini) {

                        mini = +arr[i];
                    }
                }

            }
        }

    }

    return {min: mini, max: maxi};

}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
    if (x<0){
        return 'Incorrect data!';
    }

    return  x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);

}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {

    let val=0;
    var arr = {};

    if (x in arr){

        val = arr[x];
    } else {

        val = x <= 1 ? x : fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
        arr[x] = val;
    }

    return val;
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

}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {

    let l = input.length;
    let p = 0;
    let i=0;
    let c='';
    let ans='';

    if (l===0){

        console.log('Empty line!');
    } else {

        while (i !== l) {

            c = input[i];

            while ((i !== l) && (c === input[i])) {
                p ++;
                i ++;
            }

            if (p <= 1) {
                ans = ans + c;
            } else {
                ans = ans + c + p;
            }

            p = 0;
        }
        return (ans);
    }


}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
