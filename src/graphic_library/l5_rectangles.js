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

export const makeRectangle = (pnt, wdth, heig) => new Rectangle(pnt, wdth, heig);

export const startPoint = rectangle => rectangle.x;

export const width = rectangle => rectangle.y;

export const height = rectangle => rectangle.z;

export const rectangleToString = (rectangle) => {
  const pnt = points.toString(startPoint(rectangle));
  const w = width(rectangle);
  const h = height(rectangle);
  return `{start_pnt: ${pnt}, width: ${w}, height: ${h}}`;
};
// const rect1 = makeRectangle(points.makePoint(1, 2), 15, 10);
// console.log(rectangleToString(rect1));

export const square = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  return w * h;
};
// const rect2 = makeRectangle(points.makePoint(1, 2), 15, 10);
// console.log(`Square: ${square(rect2)}`);

export const perimeter = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  return 2 * (w + h);
};
// const rect3 = makeRectangle(points.makePoint(1, 2), 15, 10);
// console.log(`Perimeter: ${perimeter(rect3)}`);

export const containsTheOrigin = (rectangle) => {
  const w = width(rectangle);
  const h = height(rectangle);
  const p1 = startPoint(rectangle);
  const p3 = points.makePoint(points.car(p1) + w, points.cdr(p1) - h);
  return quadrant(p1) === 2 && quadrant(p3) === 4;
};
// console.log(containsTheOrigin(makeRectangle(points.makePoint(0, 1), 5, 4))); // false;
// console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 3), 5, 4))); // true
// console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 4), 5, 2))); // false
// console.log(containsTheOrigin(makeRectangle(points.makePoint(-4, 3), 2, 8))); // false
