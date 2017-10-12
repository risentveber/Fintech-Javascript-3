/* eslint-disable linebreak-style */
/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  //  First method
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }

  //  Second method
  /*
  for (var i = 0; i < 10; i++) {
    setTimeout(((function(n) {
      return function() {
        logger(n);
      };
    })(i)), 100);
  }
  */  
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
  return function(...args2) {
    func.apply(context, args.concat(args2));
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
  return ((second = undefined) => (second === undefined ? x + 0 : sum(x + second)));
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  function sortWord(str) {
    return str.split('').sort().join();
  }

  const firstSortedWord = sortWord(first);
  const secondSortedWord = sortWord(second);

  return firstSortedWord === secondSortedWord;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const mySet = new Set();

  function inSet(value) {
    if (!mySet.has(value)) {
      mySet.add(value);
      return true;
    }
    return false;
  }
  const uniqueArr = arr.filter(inSet).sort();

  return uniqueArr;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const elemCount = {};

  first.forEach(element => {
    if (!(element in elemCount)) {
      elemCount[element] = 1;
    } else {
      elemCount[element] += 1;
    }
  });

  return second.reduce((resultArr, currentItem) => {
    if (currentItem in elemCount && elemCount[currentItem] > 0) {
      resultArr.push(currentItem);
      elemCount[currentItem] -= 1;
    }
    return resultArr;
  }, []).sort((a, b) => a - b);
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
  let diffCharCount = 0;

  if (left.length !== right.length) {
    return false;
  }

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      diffCharCount += 1;
    }
  }

  return diffCharCount <= 1;
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
