// BEGIN (write your solution here)
import ClockState from './ClockState';

export default class AlarmClock {
  clockTime = { hours: 12, minutes: 0 };
  alarmTime = { hours: 6, minutes: 0 };
  alarmOn = false;

  constructor() {
    this.setState(ClockState);
  }

  setState(Klass) {
    this.state = new Klass(this);
  }

  getHours() {
    return this.clockTime.hours;
  }

  getMinutes() {
    return this.clockTime.minutes;
  }

  getAlarmHours() {
    return this.alarmTime.hours;
  }

  getAlarmMinutes() {
    return this.alarmTime.minutes;
  }

  isAlarmOn() {
    return this.alarmOn;
  }

  getCurrentMode() {
    return this.state.getModeName();
  }

  clickMode() {
    this.state.nextState();
  }

  tick() {
    this.incrementM('clockTime');

    if (this.clockTime.minutes === 0) {
      this.incrementH('clockTime');
    }
    this.state.tick();
  }

  isAlarmTime() {
    return this.getHours() === this.getAlarmHours()
      && this.getMinutes() === this.getAlarmMinutes();
  }

  longClickMode() {
    this.alarmOn = !this.alarmOn;
  }

  clickH() {
    // Делегирование
    this.state.incrementH();
  }

  clickM() {
    this.state.incrementM();
  }

  incrementH(timeType) {
    const data = this[timeType];
    data.hours = (data.hours + 1) % 24;
  }

  incrementM(timeType) {
    const data = this[timeType];
    data.minutes = (data.minutes + 1) % 60;
  }
}
// END
