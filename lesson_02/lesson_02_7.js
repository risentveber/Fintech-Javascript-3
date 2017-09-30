/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  const leftArray = left.split('');
  const rightArray = right.split('');
  let countInsert = 0;

  if (leftArray.length !== rightArray.length) {
    return false;
  }

  for (let i of leftArray) {
    if (rightArray.indexOf(i) < 0) {
      countInsert += 1;
    }
  }
  return countInsert <= 1;
}
