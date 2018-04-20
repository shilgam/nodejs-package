// BEGIN (write your solution here)
import BellState from './BellState';
import ClockState from './ClockState';
import State from './State';

export default class AlarmState extends State {
  constructor(clock) {
    super('alarm');
    this.clock = clock;
  }

  clickH() {
    this.clock.alarmHours = (this.clock.alarmHours + 1) % 24;
  }

  clickM() {
    this.clock.alarmMinutes = (this.clock.alarmMinutes + 1) % 60;
  }

  tick() {
    this.clock.moveClockHands();

    if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
      this.clock.setState(BellState);
    }
  }

  clickMode() {
    this.clock.setState(ClockState);
  }

  longClickMode() {
    this.clock.alarmOn = !this.clock.alarmOn;
  }
}
// END
