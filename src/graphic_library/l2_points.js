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
symmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат. Такая симметричность означает, что меняются знаки у x и y.
symmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
distance - функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
distance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28
*/

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const p = new Point(4.45, 5.54);
const p2 = new Point(-4.45, 5.54);
const p3 = new Point(-4.45, -5.54);
const p4 = new Point(4.45, -5.54);

console.log(p);

const xAxis = point => point.x;
const yAxis = point => point.y;

console.log(xAxis(p));
console.log(yAxis(p));

const quadrant = (point) => {
  if (xAxis(point) > 0 && yAxis(point) > 0) {
    return 'Q1';
  }
};
console.log(quadrant(p));
//
// const symmetricalPoint = () => {
// }
