import solution from '../../src/08_automata-based_programming/l4_lexical_analysis/solution';

test('solution 1', () => {
  const data = [
    '  first second\n',
    'hello  my\n',
    'what   who   \n\n',
  ];

  const expected = [
    'first',
    'hello',
    'what',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});

test('solution 2', () => {
  const data = [
    '\n\n  what who   \n',
    'hellomy\n',
    ' hello who are you\n',
  ];

  const expected = [
    'what',
    'hellomy',
    'hello',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});
