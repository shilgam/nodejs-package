import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './../../../04_data_driven_programming/l5_dispatch/generic'; // eslint-disable-line
import { attach,
contents } from './../../../04_data_driven_programming/l5_dispatch/type'; // eslint-disable-line

const defmethod = definer('SimpleCard');

export const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));
export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) => cdr(self));
