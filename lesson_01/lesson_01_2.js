/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x > 2) {
    return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  } else {
    return 1;
  }
}
