/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const numInStr = string.match(/-?\d+(\.\d+)?/g);  
  const numArr = numInStr.map(function(i) {
  	return Number(i);
	});
  
  let min = numArr[0];
  let max = min;
  
  for(let i = 0; i <= numArr.length-1; ++i) {
  	if (numArr[i] > max) max = numArr[i];
    if (numArr[i] < min) min = numArr[i];
  }
  
  return {min: min, max: max};
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if(x <= 1) {
  	return x;
  } else {
  	return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  }
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  let cache = {};
  
  return (x) => {
    if (x in cache) {
      return cache[x];
    } else {
      let a = 1;
  		let b = 1;
  
  		for (let i = 3; i <= x; i++) {  	
  			let c = a + b;
    		a = b;
    		b = c;
  		}
      
      cache[x] = b;
      return b;
    }
  }
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  if(max >= 100) return;
  
  let matrix = [];
  let rows = Math.ceil(max/cols);
    
  for(let i = 0; i < rows; i++) {
    matrix[i] = [];

    for(let j = 0; j < cols; j++) {
      let nextValue = (j === 0) ? i : matrix[i][j - 1] + rows;
        
      if(nextValue > max) {
        break;
      }
        
      matrix[i][j] = nextValue;
    }
  }
    
  matrix = matrix.map(function(item) {
  	item.unshift("");
  	return item.join(" ");
  });
    
  return matrix.join("\n");
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let res = "";
  let count = 1;
  let char = "";
  
  for (let i = 0; i < input.length; i++) {
  	if (input[i] === input[i + 1]) {
    	++count;
      char = input[i];
    } else if (count === 1) {
    	res += input[i];
    } else {
    	res += char + count;
      count = 1;
    }
  }
  
  return res;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
