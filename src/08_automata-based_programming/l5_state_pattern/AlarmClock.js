// BEGIN (write your solution here)
import ClockState from './ClockState';

export default class AlarmClock {
  constructor() {
    this.setState(ClockState);
    this.alarmOn = false;
    this.hours = 12;
    this.minutes = 0;
    this.alarmHours = 6;
    this.alarmMinutes = 0;
  }

  setState(Klass) {
    this.state = new Klass(this);
  }

  getMinutes() {
    return this.minutes;
  }

  getHours() {
    return this.hours;
  }

  getAlarmHours() {
    return this.alarmHours;
  }

  getAlarmMinutes() {
    return this.alarmMinutes;
  }

  isAlarmOn() {
    return this.alarmOn;
  }

  getCurrentMode() {
    return this.state.getState();
  }

  clickMode() {
    this.state.clickMode();
  }

  tick() {
    this.state.tick();
  }

  moveClockHands() {
    this.minutes = (this.getMinutes() + 1);

    if (this.getHours() === 24) {
      this.hours = 0;
    }

    if (this.getMinutes() === 60) {
      this.hours += 1;
      this.minutes = 0;
    }
  }

  isAlarmTime() {
    return (
      this.getHours() === this.getAlarmHours() &&
      this.getMinutes() === this.getAlarmMinutes()
    );
  }

  longClickMode() {
    this.state.longClickMode();
  }

  clickH() {
    // Делегирование
    this.state.clickH();
  }

  clickM() {
    this.state.clickM();
  }
}
// END
