import sleepSort from '../src';

const NUMBERS = [3, 10, 6, 7, 100, 4, 25];
const SORTED = [3, 4, 6, 7, 10, 25, 100];

describe('sleepSort', () => {
  it('sorts numbers using a promise', () => {
    return sleepSort(NUMBERS).then((numbers) => {
      expect(SORTED).toEqual(numbers);
    });
  });

  it('sorts using a callback', (done) => {
    function callback(numbers) {
      expect(SORTED).toEqual(numbers);
      done();
    }
    sleepSort(NUMBERS, callback);
  });

  describe('throws an error when', () => {
    test('not providing callback and Promise not supported', () => {
      const realPromise = window.Promise;
      Object.defineProperty(global, 'Promise', { value: {} });
      try {
        expect(() => sleepSort(NUMBERS)).toThrowError(Error);
      } finally {
        Object.defineProperty(global, 'Promise', { value: realPromise });
      }
    });

    test('not providing an array', () => {
      [null, {}].forEach(arg => {
        expect(() => sleepSort(arg)).toThrow(TypeError);
      });
    });
  });
});