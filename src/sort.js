function sort(numbers, callback) {
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
