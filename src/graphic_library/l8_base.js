import { cons, car, cdr } from './l3_base';

export const make = (num, den) => cons(num, den);
export const numer = rat => car(rat);
export const denom = rat => cdr(rat);
export const toString = rat => `${numer(rat)} / ${denom(rat)}`;
