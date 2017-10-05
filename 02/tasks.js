/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
	for (var i = 0; i < 10; i++) {
		setTimeout(i => {
			logger(i);
		}, 100, i);
	}
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
const customBind = (func, context, ...args) => (...bindArgs) => func.apply(context, args.concat(bindArgs));



/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
const sum = x => {
	if (x != undefined) {
		return y => (y != undefined ? sum(x + y) : x)
	} else {
		return 0
	}
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
	sorting = str => [...str].sort().join();
	return sorting(first) === sorting(second)
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = true;
	}
	return  Object.keys(obj).map(item => parseFloat(item));
}
/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
	let obj = {};

	first.forEach(firstItem => {
		obj[firstItem] = true;
	});

	let result = [];

	second.forEach(secondItem => {
		if (secondItem in obj) {
			result.push(secondItem);
		}
	});

	return result.sort(compareNumbers = (a, b) => {
		return a - b;
	})
}

/* ============================================= */

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
	const leftArray = [...left];
	const rightArray = [...right];
	if (leftArray.length === rightArray.length) {
		let counter = 0;
		for (let i = 0; i < leftArray.length; i++) {
			if (leftArray[i] != rightArray[i]) {
				counter ++
			}
		}
		return counter <= 1;
	}
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};