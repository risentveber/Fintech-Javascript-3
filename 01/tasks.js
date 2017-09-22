/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(string) {

}

// var str = '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028';
// console.log(getMinMax(str));

/* ============================================= */

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {

}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {

}

/* ============================================= */

/**
 * Напишите фнкцию printNumbers, выводящую числа в колонках (так чтобы их было максимальное число при заданных ограничениях).
 * Пример работы:
 * 0 4 8
 * 1 5 9
 * 2 6 10
 * 3 7 11
 *
 * @param  {number} max  максимальное число
 * @param  {number} cols количество колонок
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
  return "one more"
}

// console.log(rle('LLLKKFJJJJJJJJJDDDDDSSKQQQNNAAAAAGG'));

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  guessNumberB,
  guessNumberA
};
