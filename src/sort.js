function sort(numbers, callback) {
  if (numbers.length <= 1) {
    callback(numbers);
    return;
  }

  const sorted = [];

  numbers.forEach((number) => {
    setTimeout(() => {
      sorted.push(number);
      if (sorted.length === numbers.length) {
        callback(sorted);
      }
    }, number)
  })
}

export default sort;
