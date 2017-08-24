const square = (x) => {
  return x ** 2;
};
console.log('square:             ' + square(5).toString());

const sumOfSquares = (a, b) => {
  return square(a) + square(b);
};
console.log('sumOfSquares:       ' + sumOfSquares(5, 10).toString());

const squareSumOfSquares = (a, b) => {
  return square(sumOfSquares(a, b));
};

console.log('squareSumOfSquares: ' + squareSumOfSquares(2, 3).toString());
