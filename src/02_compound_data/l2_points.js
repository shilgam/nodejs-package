import { makePoint, getX, getY } from './l2_base';
/*
Реализуйте и экспортируйте следующие функции для работы с точками:

1. quadrant - функция, которая вычисляет квадрант, в котором находится точка.
Ниже приведена схема, показывающая номера квадрантов на плоскости.
        +
      2 | 1
        |
+----------------+
        |
      3 | 4
        +
const point = makePoint(1, 5);
quadrant(point); // 1
quadrant(makePoint(3, -3)); // 4
Если точка не принадлежит ни одному квадранту, то функция должна возвращать null.

2. symmetricalPoint - функция, возвращающая новую точку,
симметричную относительно начала координат.
Такая симметричность означает, что меняются знаки у x и y.
symmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

3. distance - функция, вычисляющая расстояние между точками по формуле:
d = sqrt((x2−x1)^2+(y2−y1)^2)
distance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28
*/

export const quadrant = (point) => {
  const X = getX(point);
  const Y = getY(point);
  if (X > 0 && Y > 0) {
    return 1;
  } if (X < 0 && Y > 0) {
    return 2;
  } if (X < 0 && Y < 0) {
    return 3;
  } if (X > 0 && Y < 0) {
    return 4;
  }
  return null;
};
//
// console.log(quadrant(makePoint(4, 5))); // Q1
// console.log(quadrant(makePoint(-4, 5))); // Q2
// console.log(quadrant(makePoint(-4, -5))); // Q3
// console.log(quadrant(makePoint(4, -5))); // Q4
// console.log(quadrant(makePoint(0, 0))); // Q4

export const symmetricalPoint = point => makePoint(-getX(point), -getY(point));
// console.log(symmetricalPoint(makePoint(4, 1)));

export const distance = (point1, point2) => {
  const deltaX = getX(point2) - getX(point1);
  const deltaY = getY(point2) - getY(point1);
  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};
// console.log(distance(makePoint(-10, -10), makePoint(0, 0)));
