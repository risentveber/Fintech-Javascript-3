/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const secondArray = second.split('');
  let indexValue;

  for (let char of first) {
    indexValue = secondArray.indexOf(char)
    secondArray.splice(indexValue, 1);
  }
  return secondArray == false;
}


console.log(anagram('просветитель', 'терпеливость'))