function sort(numbers, callback) {
  const sorted = [];
  let total = numbers.length;

  numbers.forEach((number) => {
    setTimeout(() => {
      sorted.push(number);
      
      total--;
      if (total === 0) {
        callback(sorted);
      }
    }, number)
  })
}

export default sort;
