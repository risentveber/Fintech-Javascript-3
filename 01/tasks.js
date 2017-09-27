/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var input = string;
  var number = /-?(\d+)(\.\d+)?/g;
  var match;
  var max_n= - Infinity, min_n = Infinity;
  while (match = number.exec(input)){
    max_n = Math.max(max_n,+(match[0]));
	min_n = Math.min(min_n,+(match[0]));
	}
  return ({ min: min_n, max: max_n });
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  var n = x
  if (n < 2)
	return n;
  return fibonacciSimple(n - 1) + fibonacciSimple(n - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciWithCache(x) {
  let memo = {};
  memo[0] = 0;
  memo[1] = 1;
  function f(x) {
    var value;

    if (x in memo) {
      value = memo[x];
    } 
	else {
      if (x>=2)
        value = f(x - 1) + f(x - 2);
      memo[x] = value;
    }

    return value;
  }

  return f(x);
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
  var N = max;
  var c = cols;
  var k = parseInt((N+1)/c)
  var j = (N+1)%c
  var string = ""
  var p = 0;
  var i,l;
  console.log(k);
  for (i = 0 ; i < k; i++){
    string = (parseInt(i/10)) ? (string + "" + i) : (string + " " + i);
    for (l = 1; l < c; l++){
	  var num = i+ k*l + p
	  string = (parseInt(num/10)) ? (string + " " + num) : (string + "  " + num);
	  if (p<j){
	   p++;
	  }
    }
	string = string + "\n";
    p = 0;	
  }
  if (j === 0){
    string = string.substr(0,string.length-1);
  }
  else{
    string = (parseInt(k/10)) ? (string + "" + k) : (string + " " + k);
  }
  for (i = 1; i<j; i++){
    num = k+(k+1)*i
	string = (parseInt(num/10)) ? (string + " " + num) : (string + "  " + num);
  }
  return string;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  var string = input
  var i,j;
  var symb;
  var str = "";
  for (i = 0; i<string.length; i++){
    symb = string[i];
    j=0;
    while (string[i] === symb){
      j++;
	  i++;
    }
	i = i - 1;
	if (j-1){
      str = str + symb + j;
	}
	else{
	  str = str + symb;
	}
  }
  return str
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
