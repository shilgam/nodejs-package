// BEGIN (write your solution here)
import AlarmState from './AlarmState';
import BellState from './BellState';
import State from './State';

export default class ClockState extends State {
  mode = 'clock';
  timeType = 'clockTime';
  NextStateClass = AlarmState;

  tick() {
    if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
      this.nextState(BellState);
    }
  }

  incrementH() {
    this.clock.incrementH(this.timeType);
  }

  incrementM() {
    this.clock.incrementM(this.timeType);
  }
}
// END
