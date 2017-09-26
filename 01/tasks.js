/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var result=string.match(/(-)?\d+(\.\d+)?/g);
  var min = parseFloat(result[0]);
  var max = parseFloat(result[0]);
  for (var i=1; i<result.length; ++i){
    if(parseFloat(result[i])<min){
      min = parseFloat(result[i]);
    }
    if(parseFloat(result[i])>max){
      max=parseFloat(result[i]);
    }
  }
  return {min: min,max: max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if(x===0){
    return 0;
  }
  else if(x===1){
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  if(x===0) {
    return x;
  }
  else if(x===1){
    return x;
  }
  else{
    if(fibonacciNumbers.length<=x){
      var x_number=fibonacciWithCache(x-1)+fibonacciWithCache(x-2);
      fibonacciNumbers.push(x_number);
      return x_number;
    }
    else{
      return fibonacciNumbers[x];
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
  var rows=Math.floor(max/cols+1);
  var str="";
  var myMatrix = matrixArray(cols,rows);
  for (var i=0;  i < rows; ++i){
    for (var j=0; j< cols; ++j){
      if(myMatrix[i][j]<10 && j===0){
        str+=" "+myMatrix[i][j];
      }
      else if(myMatrix[i][j]<10 && j!==0){
        str+="  "+myMatrix[i][j];
      }
      else if(j===0){
        str+=myMatrix[i][j];
      }
      else if(myMatrix[i][j]>max){
        str+="   ";
      }
      else{
        str+=" "+myMatrix[i][j];
      }

    }
      console.log(str);
      str = "";
  }

}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<columns; i++) {
    arr[i] = new Array();
    for (var j = 0; j < rows; j++) {
      arr[i][j] = columns * j + i;
    }
  }
  return arr;
}
function rle(input) {
  var count=0;
  var rleString="";
  var thisChar=input[0];
  var symbol;
  for (var i=0; i<input.length; ++i){
    symbol=input.charAt(i);
    if((thisChar !== symbol)&&(count>1)){
      rleString+=(thisChar+count);
      thisChar=symbol;
      count=0;
    }
    else if(thisChar !== symbol && count===1){
      rleString+=thisChar;
      thisChar=symbol;
      count=0;
      }
      count++;
  }
  if(count>1){
    rleString+=(thisChar+count);
  }
  else if(count===1){
    rleString+=thisChar;
  }
  return rleString;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
