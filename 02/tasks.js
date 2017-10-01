/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/* function timer(logger = console.log) {
     for (var i = 0; i < 10; i++) {
       (function(x) {
         setTimeout(() => {
           logger(x);
         }, 100);
       })(i);
     }
/* }

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function(...newArgs) {
    func.apply(context, args.concat(newArgs));
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (!sum.ans) {
    sum.ans = 0;
  }
  if (arguments.length > 0) {
    sum.ans += x;
    return sum;
  }
  var ans = sum.ans;

  sum.ans = 0;
  return ans;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  return first.split('').sort().join('') === second.split('').sort().join('');
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  return arr
    .sort()
    .filter((val, index) => !(index > 0 && arr[index - 1] === val));
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  var i = 0;

  first.sort((a, b) => a - b);
  second.sort((a, b) => a - b);
  return first
    .filter((val, index) => {
      for (; second[i]; i++) {
        if (val === second[i]) {
          i++;
          return true;
        } else if (val < second[i]) {
          return false;
        }
      }
      return false;
    });
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  var flag = false;
  var i = -1;

  return left.length === right.length
    && left
      .split('')
      .every((val, index) => {
        i++;
        if (val === right[i]) {
          return true;
        } else if (!flag) {
          flag = true;
          return true;
        }
        return false;
      });
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
