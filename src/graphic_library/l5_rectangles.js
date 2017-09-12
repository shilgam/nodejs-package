import * as points from './l3_base';
import { quadrant } from './l2_points';

/*
square - возвращает площадь прямоугольника (a * b).
perimeter - возвращает периметр прямоугольника (2 * (a + b)).
containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику
(не лежит на границе прямоугольника, а находится внутри).
Чтобы в этом убедиться, достаточно проверить, что все точки прямоугольника лежат
в разных квадрантах.
*/

function Rectangle(startPoint, width, height) {
  this.x = startPoint;
  this.y = width;
  this.z = height;
}

const makeRectangle = (startPoint, width, height) => new Rectangle(startPoint, width, height);
const startPoint = rectangle => rectangle.x;
const width = rectangle => rectangle.y;
const height = rectangle => rectangle.z;

const rectangleToString = (rectangle) => {
  const pnt = points.toString(startPoint(rectangle));
  const w = width(rectangle);
  const h = height(rectangle);
  return `{start_pnt: ${pnt}, width: ${w}, height: ${h}}`
}

// const rect1 = makeRectangle(p1, 15, 10);
// console.log(rectangleToString(rect1));

const square = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  return w * h;
};
// console.log(`Square: ${square(rect1)}`);

const perimeter = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  return 2 * (w + h);
};
// console.log(`Perimeter: ${perimeter(rect1)}`);

const containsTheOrigin = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  const p1 = startPoint(rectangle);
  const p3 = points.makePoint(points.car(p1) + w, points.cdr(p1) - h);
  const p2 = points.makePoint(points.car(p1), points.cdr(p1) - h);
  const p4 = points.makePoint(points.car(p1) + w, points.cdr(p1));
  const q1 = quadrant(p1);
  const q2 = quadrant(p2);
  const q3 = quadrant(p3);
  const q4 = quadrant(p4);
  const aboveXaxis =       (q2 === 1 || q2 === 2) && (q3 === 1 || q3 === 2) && q3 != null;
  const belowXaxis =       (q1 === 1 || q1 === 4) && (q4 === 3 || q4 === 4) && q4 != null;
  const leftSideOfYaxis =  (q3 === 2 || q3 === 3) && (q4 === 2 || q4 === 3) && q4 != null;
  const rightSideOfYaxis = (q1 === 1 || q1 === 4) && (q2 === 1 || q2 === 4) && q2 != null;
  const containsXaxis = !(aboveXaxis || belowXaxis);

  const containsYaxis = !(leftSideOfYaxis || rightSideOfYaxis) && q2 != null;
  console.log(`(${aboveXaxis} || ${belowXaxis}) && (${leftSideOfYaxis} || ${rightSideOfYaxis})`);
  return (containsXaxis && containsYaxis);
};

console.log(containsTheOrigin(makeRectangle(points.makePoint(0, 1), 5, 4))); // false;
console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 3), 5, 4))); // true
console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 4), 5, 2))); // false
console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 3), 2, 8))); // false
