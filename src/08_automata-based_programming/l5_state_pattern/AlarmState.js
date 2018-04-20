// BEGIN (write your solution here)
import BellState from './BellState';
import ClockState from './ClockState';
import State from './State';

export default class AlarmState extends State {
  mode = 'alarm';
  timeType = 'alarmTime';
  NextStateClass = ClockState;

  incrementH() {
    this.clock.incrementH(this.timeType);
  }

  incrementM() {
    this.clock.incrementM(this.timeType);
  }

  tick() {
    if (this.clock.isAlarmTime()) {
      this.nextState(BellState);
    }
  }

  clickMode() {
    this.clock.setState(ClockState);
  }
}
// END
