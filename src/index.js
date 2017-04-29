import sort from './sort';

const FUNCTION = 'function';

function sleepSort(numbers, callback) {
  if (!Array.isArray(numbers)) {
    throw new TypeError(
      '[SleepSort] Expected to be called with an array of numbers as an but ' +
      `instead received ${numbers === null ? 'null' : typeof numbers}.`
    )
  }

  const supportsPromise = typeof global.Promise === FUNCTION;
  const providedCallback = typeof callback === FUNCTION;

  if (!supportsPromise && !providedCallback) {
    throw new Error(
      '[SleepSort] Your browser does not support Promises. Please provide a' +
      'callback as a second argument.'
    )
  }

  if (providedCallback) {
    return sort(numbers, callback);
  }
  return new Promise((resolve) => {
    sort(numbers, resolve);
  })
}

export default sleepSort;
