// Base functons

function Point(x, y) {
  this.x = x;
  this.y = y;
}

export const makePoint = (x, y) => new Point(x, y);

export const getX = point => point.x;
export const getY = point => point.y;

// const p1 = makePoint(1.5, 2.5);
// console.log(p1);
// console.log(getX(p1)); // get x coordinate
// console.log(getY(p1)); // get y coordinate
