/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const firstUpdated = first.toLowerCase().split('').sort().join('');
  const secondUpdated = second.toLowerCase().split('').sort().join('');

  return firstUpdated === secondUpdated;
}
