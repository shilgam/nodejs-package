// Base functons

function Point(x, y) {
  this.x = x;
  this.y = y;
}

export const makePoint = (x, y) => new Point(x, y);

export const xAxis = point => point.x;
export const yAxis = point => point.y;

// const p1 = makePoint(1.5, 2.5);
// console.log(p1);
// console.log(xAxis(p1)); // get x coordinate
// console.log(yAxis(p1)); // get y coordinate
