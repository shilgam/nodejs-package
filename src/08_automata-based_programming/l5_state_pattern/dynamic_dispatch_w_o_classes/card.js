import { getMethod } from './../../../04_data_driven_programming/l5_dispatch/generic'; // eslint-disable-line
import { contents } from './../../../04_data_driven_programming/l5_dispatch/type'; // eslint-disable-line

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

export const damage = (self, health) =>
  getMethod(self, 'damage')(contents(self), health);
