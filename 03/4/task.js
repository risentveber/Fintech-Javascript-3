/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.race,
 * которая возвращает в качестве результата промис c первым resolve value или reject value в массиве исходных промисов
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseRace(promises) {

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; ++i) {
      promises[i].then(resolve, reject);
    }
  })
}

module.exports = promiseRace;
