import { makePoint, xAxis, yAxis } from './l2_base';
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

const quadrant = (point) => {
  if (xAxis(point) > 0 && yAxis(point) > 0) {
    return 'Q1';
  } if (xAxis(point) < 0 && yAxis(point) > 0) {
    return 'Q2';
  } if (xAxis(point) < 0 && yAxis(point) < 0) {
    return 'Q3';
  } if (xAxis(point) > 0 && yAxis(point) < 0) {
    return 'Q4';
  }
  return 'null';
};
//
// console.log(quadrant(makePoint(4, 5))); // Q1
// console.log(quadrant(makePoint(-4, 5))); // Q2
// console.log(quadrant(makePoint(-4, -5))); // Q3
// console.log(quadrant(makePoint(4, -5))); // Q4
// console.log(quadrant(makePoint(0, 0))); // Q4

const symmetricalPoint = point => makePoint(-xAxis(point), -yAxis(point));
// console.log(symmetricalPoint(makePoint(4, 1)));

const distance = (point1, point2) => {
  const deltaX = xAxis(point2) - xAxis(point1);
  const deltaY = yAxis(point2) - yAxis(point1);
  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};

console.log(distance(makePoint(-10, -10), makePoint(0, 0)));
