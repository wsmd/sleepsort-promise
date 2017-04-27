# sleepsort-promise

![](https://travis-ci.org/wsmd/sleepsort-promise.svg?branch=master)

A `Promise` based implementation of the [sleepsort](https://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort) algorithim.


## Installation

```
npm install --save sleepsort-promise
```

## Why `sleepsort-promise`?

Because why not.

## Usage

```js
import sleepSort from 'sleepsort-promise';

const numbers = [3, 10, 6, 7, 100, 4, 25];

sleepSort(numbers)
  .then((sortedNumbers) => {
    console.log(sortedNumbers); // outputs: [3, 4, 6, 7, 10, 25, 100]
  })
```

In case `Promise` is not supported by your browser, you can alternatively use a callback.

```js
sleepSort(numbers, function(sortedNumbers) {
  console.log(sortedNumbers); // outputs: [3, 4, 6, 7, 10, 25, 100]
});
```

## License

MIT

![](https://camo.githubusercontent.com/d0aa5dbb169c80f01a0a74709f43bd726b79c767/687474703a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6d616b65732d70656f706c652d736d696c652e737667)