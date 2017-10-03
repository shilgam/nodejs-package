import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach,
contents } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте интерфейс типа simpleCard.

// END

export const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

export const getName = self => car(contents(self));

export const damage = (self, health) => cdr(contents(self));
