import sort from './sort';

const UNDEFINED = 'undefined';

function sleepSort(numbers, callback) {
  const providedCallback = typeof callback !== UNDEFINED

  let supportsPromise;
  if (typeof global !== UNDEFINED) {
    if (global.Promise) { supportsPromise = true }
  } else if (typeof window !== UNDEFINED) {
    if (window.Promise) { supportsPromise = true }
  }

  if (!supportsPromise && !providedCallback) {
    throw new Error(
      'sleepsort: Your browser does not support Promises. Please provide a' +
      'callback as a second argument.'
    )
  }

  if (supportsPromise) {
    return new Promise((resolve, reject) => {
      sort(numbers, resolve);
    })
  }

  return sort(numbers, callback);
}

export default sleepSort;
