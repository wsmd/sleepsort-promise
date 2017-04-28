import sleepSort from '../src';

const NUMBERS = [3, 10, 6, 7, 100, 4, 25];
const SORTED = [3, 4, 6, 7, 10, 25, 100];

const PROMISE = window.Promise;

describe('sleepsort', () => {

  it('sorts numbers using a promise', () => {
    return sleepSort(NUMBERS).then((numbers) => {
      expect(SORTED).toEqual(numbers);
    });
  });

  it('sorts numbers using a callback', (done) => {
    function callback(numbers) {
      expect(SORTED).toEqual(numbers);
      done();
    }

    sleepSort(NUMBERS, callback);
  });

  it('throws when not providing a callback', () => {
    window.Promise = undefined; // overwriting promise
    
    function sortThatThrows() {
      sleepSort(NUMBERS);
      window.Promise = PROMISE; // restore promise
    }

    expect(sortThatThrows).toThrowError(Error)
  })
})
