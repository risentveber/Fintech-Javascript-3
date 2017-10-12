/**
* Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
* если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
* В учебных целях для этой задачи просьба не использовать Promise.race.
*
* @param {Promise} promise исходный промис
* @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
* @return {Promise} промис с нужным поведением
*/

function rejectOnTimeout(promise, timeoutInMilliseconds) {
  let rejectPromise = new Promise(function (resolve, reject) {
    setTimeout(reject, timeoutInMilliseconds, 'timeout_error')
  })
  return new Promise(function (resolve, reject) {
    promise.then(resolve)
    .then(null, reject);
    rejectPromise.then(null, reject);
  });
}

module.exports = rejectOnTimeout;
