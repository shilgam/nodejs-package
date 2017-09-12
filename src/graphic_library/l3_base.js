
function Point(x, y) {
  this.x = x;
  this.y = y;
}

export const cons = (x, y) => new Point(x, y);
// const p1 = cons('1-st elem', '2-nd elem');
// console.log(p1);

export const makePoint = (x, y) => cons(x, y);

// Get first element from pair
export const car = point => point.x;

// Get second element from pair
export const cdr = point => point.y;

// console.log(car(p1));
// console.log(cdr(p1));

export const toString = (point) => {
  const x = car(point);
  const y = cdr(point);
  return `[${x}, ${y}]`;
};

// console.log(toString(p1));
