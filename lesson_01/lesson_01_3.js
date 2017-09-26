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

