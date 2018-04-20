// BEGIN (write your solution here)
import ClockState from './ClockState';
import State from './State';


export default class BellState extends State {
  mode = 'bell';
  NextStateClass = ClockState;

  incrementH() {
    return false;
  }

  incrementM() {
    return false;
  }

  tick() {
    this.nextState();
  }
}
// END
