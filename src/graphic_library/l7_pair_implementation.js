const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
      // break;
    case 'cdr':
      return b;
      // break;
    default:
      return 'incorrect call';
      // break;
  }
};

export const makePair = (x, y) => cons(x, y);

// Get first element from pair
export const car = pair => pair('car');

// Get second element from pair
export const cdr = pair => pair('cdr');

console.log(car(cons('Hi', 'giys!')));
console.log(cdr(cons('Hi', 'giys!')));
console.log(cons('Hi', 'giys!')('any message'));
