import sort from './sort';

function sleepSort(numbers, callback) {
  if (!Array.isArray(numbers)) {
    throw new TypeError(
      '[SleepSort] Expected to be called with an array of numbers but' +
      `instead received ${numbers === null ? 'null' : typeof numbers}.`
    )
  }

  const providedCallback = typeof callback === 'function';

  let supportsPromise;
  /* istanbul ignore else  */
  if (typeof global !== 'undefined') {
    if (global.Promise) { supportsPromise = true }
  } else if (typeof window !== 'undefined') {
    if (window.Promise) { supportsPromise = true }
  } else if (typeof self !== 'undefined') {
    if (self.Promise) { supportsPromise = true }
  }

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
