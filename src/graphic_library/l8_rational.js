import * as rational from './l8_base';

const rat1 = rational.make(1, 5);
const rat2 = rational.make(3, 5);

// console.log(rational.number(rat1));
// console.log(rational.denom(rat1));

const sum = rational.add(rat1, rat2);
console.log(sum);
