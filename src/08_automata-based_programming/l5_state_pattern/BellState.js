// BEGIN (write your solution here)
import ClockState from './ClockState';
import State from './State';


export default class BellState extends State {
  constructor(clock) {
    super('bell');
    this.clock = clock;
  }

  clickH() {
    return false;
  }

  clickM() {
    return false;
  }

  tick() {
    console.log('tick in BellState');
    this.clock.moveClockHands();
    this.clock.setState(ClockState);
  }

  clickMode() {
    this.clock.setState(ClockState);
  }
}
// END
