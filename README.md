# sleepsort-promise

[![npm version](https://badge.fury.io/js/sleepsort-promise.svg)](https://badge.fury.io/js/sleepsort-promise)
[![Build Status](https://travis-ci.org/wsmd/sleepsort-promise.svg?branch=master)](https://travis-ci.org/wsmd/sleepsort-promise)
[![Coverage Status](https://coveralls.io/repos/github/wsmd/sleepsort-promise/badge.svg?branch=master)](https://codecov.io/gh/wsmd/sleepsort-promise)

A `Promise` based implementation of the [sleepsort](https://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort) algorithm.

## Installation

```bash
npm install --save sleepsort-promise
```
```bash
yarn add sleepsort-promise
```

## Usage

```js
import sleepSort from 'sleepsort-promise';

const numbers = [3, 10, 6, 7, 100, 4, 25];

sleepSort(numbers)
  .then((sortedNumbers) => {
    console.log(sortedNumbers); // outputs: [3, 4, 6, 7, 10, 25, 100]
  });
```

In case `Promise` is not supported by your browser, you can alternatively use a callback.

```js
sleepSort(numbers, function(sortedNumbers) {
  console.log(sortedNumbers); // outputs: [3, 4, 6, 7, 10, 25, 100]
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

MIT

![](https://camo.githubusercontent.com/d0aa5dbb169c80f01a0a74709f43bd726b79c767/687474703a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6d616b65732d70656f706c652d736d696c652e737667)