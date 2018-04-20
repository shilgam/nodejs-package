// BEGIN (write your solution here)
import AlarmState from './AlarmState';
import BellState from './BellState';
import State from './State';

export default class ClockState extends State {
  constructor(clock) {
    super('clock');
    this.clock = clock;
  }

  clickMode() {
    this.clock.setState(AlarmState);
  }

  longClickMode() {
    this.clock.alarmOn = !this.clock.alarmOn;
  }

  clickH() {
    this.clock.hours = (this.clock.hours + 1) % 24;
  }

  clickM() {
    this.clock.minutes = (this.clock.minutes + 1) % 60;
  }

  tick() {
    this.clock.moveClockHands();

    if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
      this.clock.setState(BellState);
    }
  }
}
// END
