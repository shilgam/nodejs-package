import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './../../../04_data_driven_programming/l5_dispatch/generic'; // eslint-disable-line
import { attach,
contents } from './../../../04_data_driven_programming/l5_dispatch/type'; // eslint-disable-line

const defmethod = definer('PercentCard');

export const make = (name, percent) =>
  attach('PercentCard', cons(name, percent));
export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) =>
  Math.round(health * (cdr(self) / 100)));
