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

function timer2(logger = console.log) {
  var li = []
  for (var i = 0; i < 10; i++) {
    li.push(i);
  }
  setTimeout(() => {
    for (var n of li) {
      logger(n);
    }
  }, 100)
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
  return func.apply(context, args);
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
  if (x===undefined) {
    if (s===undefined) {
      return 0;
    }
    return s;
  }
  try {
    s += x;
  }
  catch (err) {
    s = x;
  }
  return sum;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  var dic1 = {};
  var dic2 = {};
  for (var n of first+second) {
    dic1[n] = 0;
    dic2[n] = 0;
  }
  for (var n of first) {
    dic1[n] = dic1[n] + 1;
  }
  for (var n of second) {
    dic2[n] = dic2[n] + 1;
  }
  console.log(dic1, dic2);
  for (var n in dic1) {
    if (dic1[n] != dic2[n]) {
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
  function sortNumber(a,b) {
    return a - b;
  }
  var li = [];
  for (n of arr) {
    if (li.includes(n)) {
    }
    else {
      li.push(n);
    }
  }
  li.sort(sortNumber);
  return li;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  var li = [];
  for (var n of first) {
    if (second.includes(n)) {
      li.push(n);
    }
  }
  var li = getUnique(li);
  return li;
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
  let diffs = 0;
  for (var n of left) {
    if (!(right.includes(n))) {
      diffs += 1;
    }
    if (diffs > 1) {
      return false;
    }
  }
  return true;
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