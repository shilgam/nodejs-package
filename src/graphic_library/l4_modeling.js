import * as points from './l3_base';

function Segment(x, y) {
  this.x = x;
  this.y = y;
}

const makeSegment = (point1, point2) => new Segment(point1, point2);

const startSegment = segment => segment.x;

const endSegment = segment => segment.y;

const segmentToString = (segment) => {
  const startPnt = startSegment(segment);
  const endPnt = endSegment(segment);
  return `[${points.toString(startPnt)}, ${points.toString(endPnt)}]`;
};

const midpointSegment = (segment) => {
  const point1 = startSegment(segment);
  const point2 = endSegment(segment);
  const x1 = points.car(point1);
  const x2 = points.car(point2);
  const y1 = points.cdr(point1);
  const y2 = points.cdr(point2);
  const mdlX = (x1 + x2) / 2;
  const mdlY = (y1 + y2) / 2;
  return points.makePoint(mdlX, mdlY);
};


const p1 = points.cons(11, 1);
const p2 = points.cons(1, 1);
const s1 = makeSegment(p1, p2);

// console.log(s1);
// console.log(segmentToString(s1));

const mdlPnt = midpointSegment(s1);
console.log(`Middle Point:  ${points.toString(mdlPnt)}`);
