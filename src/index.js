import sort from './sort';

function sleepSort(numbers, callback) {
  const supportsPromise = typeof window.Promise !== 'undefined';
  const providedCallback = typeof callback !== 'undefined';

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
