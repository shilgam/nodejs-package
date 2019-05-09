const buble_sort = (arr) => {
  let sorted = [...arr];
  for (let i = 0; i < (sorted.length - 1); i++) {
    for (var j = 0; j < (sorted.length - 1 - i); j++) {
      if (sorted[j] > sorted[j + 1]) {
        let max = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = max;
      };
      // console.log('>>>>> i =', i, ', j =', j, '  array: ', sorted)
    };
    // console.log('>>>>>');
  };
  return sorted;
}

test('bubble_sort', () => {
  const initial = [10, 8, 6, 4, 2, 0];
  const sorted = [0, 2, 4, 6, 8, 10];
  expect(buble_sort(initial)).toEqual(sorted);

  expect(initial).toEqual([10, 8, 6, 4, 2, 0]);
});
