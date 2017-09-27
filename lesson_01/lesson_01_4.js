/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let a0 = input[0];
  let numberCount = 1;
  let finalString = '';

  for (let i = 1; i <= input.length; i++) {

    if (input[i] === a0) {
      numberCount += 1;
    } else {
      finalString += a0;
      if (numberCount !== 1) {
        finalString += numberCount;
      }
      numberCount = 1;
      a0 = input[i];
    }
  }

  return finalString;

}
