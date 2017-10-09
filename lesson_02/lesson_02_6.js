/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */


function binarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
  var i = 0, j = A.length, k;

  while (i < j)
  {  k = Math.floor((i+j)/2);
    if (t <= A[k]) j = k;
    else i = k+1;
  }

  if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
  else return -1;                 // Если искомого элемента нет в массиве, то -1.
}


function getIntersection(first, second) {
  const sortedSecond = second.sort(function(a, b) { return a - b; });
  console.log(sortedSecond)
  const resultArray = first.filter(function(number) {
    return binarySearch(number, sortedSecond);
  });

  return resultArray.sort(function(a, b) { return a - b; });
}

console.log(getIntersection([1, 3, 5, 7, 9], [1]))