import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach,
contents } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте интерфейс типа simpleCard.

const defmethod = definer('SimpleCard');

export const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));
export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) => cdr(self));

// END
