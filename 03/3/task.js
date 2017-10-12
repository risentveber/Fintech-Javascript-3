/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseAll(promises) {
  let values = [];
  let accept = 0;

  return new Promise(function (resolve, reject) {
    promises.forEach(function (promise, index) {
      promise.then(val => {
        values[index] = val;
        accept += 1;
        if (accept === promises.length) {
          resolve(values);
        }
      }).catch(error => reject(error));
    });
  });
}

module.exports = promiseAll;
