/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  let currentSum = x;

  if (x === undefined) {
    return 0;
  }

  return f = a => {
    if (a === undefined) {
      return a;
    } else {
      currentSum += a;
      return f() + a;
    }
  }
}

console.log(sum(1)(2)(4)( ))