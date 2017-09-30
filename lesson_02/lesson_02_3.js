/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(a) {
  let currentSum = a;

  function f(b) {
    if (b === undefined) {
      return currentSum;
    } else {
      currentSum += b;
      return f;
    }
  }
  return (a === undefined ? 0 : f);
}

x = sum(1)(2)();


console.log(x)