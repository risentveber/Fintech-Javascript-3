/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      (logger(i));
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function(...bindArgs) {
    return func.call(context, ...args, ...bindArgs);
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
  if (x === undefined) {
    return 0;
  }
  return s => !s ? x : sum(x + s);
}
/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  let ar1 = [].slice.call(first).sort();
  let ar2 = [].slice.call(second).sort();

  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  function compare(a, b) {
    return a - b;
  }
  if (arr === []) {
    return [];
  }
  arr.sort(compare());
  let arrNew = [];
  let prev;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      arrNew.push(arr[i]);
      prev = arr[i];
    }
  }
  return arrNew;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  function compare(a, b) {
    return a - b;
  }
  function getUnique(arr) {
    if (arr === []) {
      return [];
    }
    arr.sort(compare());
    let arrNew = [];
    let prev;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        arrNew.push(arr[i]);
        prev = arr[i];
      }
    }
    return arrNew;
  }

  function inArray(array, number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return true;
      }
    }
    return false;
  }

  first = getUnique(first);
  const len = first.length;
  let arrNew = [];

  for (let i = 0; i < len; i++) {
    if (inArray(second, first[i])) {
      arrNew.push(first[i]);
    }
  }
  return (getUnique(arrNew).sort(compare));
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
  if (left.length !== right.length) {
    return false;
  }
  let counter = 0;

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      counter += 1;
    }
  }
  return (counter <= 1);
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
