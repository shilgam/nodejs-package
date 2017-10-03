import { getMethod } from './generic'; // eslint-disable-line
import { contents } from './type'; // eslint-disable-line

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)

// END
