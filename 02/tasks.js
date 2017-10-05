/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  // 1 var
  /*
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }*/

  // 2 var
  /*
  for (let i = 0; i < 10; i++) {
        (arg => setTimeout(() => {
            logger(arg);
    }, 100))(i);
  }
  */
  // 3 var 
  let i = 0;
  let timerId = setInterval(function() {
      console.log(i);
      if (i == 9) clearInterval(timerId);
      i++;
  }, 1000);
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
        func.call(context, ...args, ...bindArgs);
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
      if(x === undefined){
          return 0
      }
      return function(b) {
          if (b === undefined){
              return x
          }
          return sum(x + b);
      }
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var sort = function(str) {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

function anagram(first, second) {
  return first.trim() === second.trim() ? false : sort(first) === sort(second);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
      let unique = [...new Set(arr)];
      return unique.sort();
  }  

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  
          var m = first.length, n = second.length, c = 0, third = [];
  
          for (var i = 0; i < m; i++)
          {
              let j = 0, k = 0;
              while (second[j] !== first[ i ] && j < n) j++;
              while (third[k] !== first[ i ] && k < c) k++;
              if (j != n && k == c) third[c++] = first[ i ];
          }
          return third.sort((a, b) => { return a < b ? -1 : 1; });;
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
  
      let l = left.length, r = right.length;
      var arr1 = new Array();
      var arr2 = new Array(l + 1);
  
      for(let i = 0; i <= l; i ++){
          arr2[i] = i;
      }
  
      for(let i = 1; i <= r; i ++) {
          arr1 = arr2;
          arr2 = new Array(l + 1);
          for(let j = 0; j <= l; j ++) {
              if(j == 0) arr2[j] = i;
              else {
                  let cost = (left.charAt(i - 1) != right.charAt(j - 1)) ? 1 : 0;
                  if(arr2[j - 1] < arr1[j] && arr2[j - 1] < arr1[j - 1] + cost)
                      arr2[j] = arr2[j - 1] + 1;
                  else if(arr1[j] < arr1[j - 1] + cost)
                      arr2[j] = arr1[j] + 1;
                  else
                      arr2[j] = arr1[j - 1] + cost;
              }
          }
      }
      return arr2[l] === 1;
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