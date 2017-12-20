// Run file:
// $ npm run babel-node src/l14_modules_solution.js

import getTriangleArea from './l14_modules_myMathModule';

const square = x => x ** 2;

const solution = n => getTriangleArea(n, square(n) * 0.5);

export default solution;

console.log(solution(3));
