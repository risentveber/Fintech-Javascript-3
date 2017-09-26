/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let countSymbols = 0;
  let finalString = String();

  for (let i = 1; i < input.length+1; i++) {
    countSymbols = countSymbols + 1;
    if (input[i - 1] === input[i]) {
      if (i === input.length) {
        finalString = finalString + input[i - 1] + (countSymbols + 1);
      } else {
        continue;
      }
    } else {
      if (countSymbols === 1 || countSymbols === 0) {
        finalString = finalString + input[i - 1];
      } else {
        finalString = finalString + input[i - 1] + countSymbols;
      }
      countSymbols = 0;
    }
  }
  return finalString;
}
