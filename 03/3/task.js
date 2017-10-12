/* eslint-disable linebreak-style */
/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseAll(promises) {
  const resolvedPromises = [];
  let resolvedCount = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(x => {
        resolvedPromises[i] = x;
        resolvedCount += 1;
        if (promises.length === resolvedCount) {
          resolve(resolvedPromises);
        }
      }, x => {
        reject(x);
      });
    }
  });
}

module.exports = promiseAll;
