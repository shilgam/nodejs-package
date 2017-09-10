
function Pair(x, y) {
  this.x = x;
  this.y = y;
}

export const cons = (x, y) => new Pair(x, y);
// const p1 = cons('1-st elem', '2-nd elem');
// console.log(p1);


// Get first element from pair
export const car = pair => pair.x;

// Get second element from pair
export const cdr = pair => pair.y;

// console.log(car(p1));
// console.log(cdr(p1));

export const toString = pair => JSON.stringify(pair);

// console.log(toString(p1));
