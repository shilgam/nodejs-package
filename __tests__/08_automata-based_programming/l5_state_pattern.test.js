import AlarmClock from '../../src/08_automata-based_programming/l5_state_pattern/AlarmClock';

describe('AlarmClock', () => {
  it('should have default values', () => {
    const clock = new AlarmClock();
    expect(clock.getHours()).toBe(12);
    expect(clock.getMinutes()).toBe(0);
    expect(clock.getAlarmHours()).toBe(6);
    expect(clock.getAlarmMinutes()).toBe(0);
  });

  it('should change state when click to mode', () => {
    const clock = new AlarmClock();
    expect(clock.isAlarmOn()).toBeFalsy();
    expect(clock.getCurrentMode()).toBe('clock');

    clock.clickMode();
    clock.tick();
    expect(clock.isAlarmOn()).toBeFalsy();
    expect(clock.getCurrentMode()).toBe('alarm');

    clock.clickMode();
    clock.tick();
    expect(clock.isAlarmOn()).toBeFalsy();
    expect(clock.getCurrentMode()).toBe('clock');

    clock.longClickMode();
    clock.tick();
    expect(clock.isAlarmOn()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('clock');

    clock.clickMode();
    clock.tick();
    expect(clock.isAlarmOn()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('alarm');

    clock.clickMode();
    clock.tick();
    expect(clock.isAlarmOn()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('clock');

    clock.longClickMode();
    expect(clock.isAlarmOn()).toBeFalsy();
    expect(clock.getCurrentMode()).toBe('clock');
  });

  it('should change hours and minutes', () => {
    const clock = new AlarmClock();
    clock.clickH();
    expect(clock.getMinutes()).toBe(0);
    expect(clock.getHours()).toBe(13);
    expect(clock.getAlarmHours()).toBe(6);
    expect(clock.getAlarmMinutes()).toBe(0);

    clock.clickM();
    expect(clock.getMinutes()).toBe(1);
    expect(clock.getHours()).toBe(13);
    expect(clock.getAlarmHours()).toBe(6);
    expect(clock.getAlarmMinutes()).toBe(0);

    clock.clickMode();

    clock.clickH();
    expect(clock.getMinutes()).toBe(1);
    expect(clock.getHours()).toBe(13);
    expect(clock.getAlarmHours()).toBe(7);
    expect(clock.getAlarmMinutes()).toBe(0);

    clock.clickM();
    expect(clock.getMinutes()).toBe(1);
    expect(clock.getHours()).toBe(13);
    expect(clock.getAlarmHours()).toBe(7);
    expect(clock.getAlarmMinutes()).toBe(1);

    for (let i = 0; i < 60; i += 1) {
      clock.clickM();
    }
    expect(clock.getAlarmMinutes()).toBe(1);
    expect(clock.getAlarmHours()).toBe(7);

    for (let i = 0; i < 17; i += 1) {
      clock.clickH();
    }
    expect(clock.getAlarmHours()).toBe(0);
  });

  it('should not start bell if alarm off', () => {
    const clock = new AlarmClock();

    for (let i = 0; i < 18 * 60; i += 1) {
      clock.tick();
    }

    expect(clock.isAlarmTime()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('clock');
    expect(clock.clickM()).toBeFalsy();
    expect(clock.clickH()).toBeFalsy();

    clock.tick();
    expect(clock.getCurrentMode()).toBe('clock');
  });

  it('should start bell if alarm on 1', () => {
    const clock = new AlarmClock();
    clock.longClickMode();

    for (let i = 0; i < 18 * 60; i += 1) {
      clock.tick();
    }
    expect(clock.isAlarmTime()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('bell');
    expect(clock.clickM()).toBeFalsy();
    expect(clock.clickH()).toBeFalsy();

    clock.tick();
    expect(clock.getCurrentMode()).toBe('clock');
  });

  it('should start bell if alarm on 2', () => {
    const clock = new AlarmClock();
    clock.longClickMode();

    for (let i = 0; i < 18 * 60; i += 1) {
      clock.tick();
    }
    expect(clock.isAlarmTime()).toBeTruthy();
    expect(clock.getCurrentMode()).toBe('bell');

    clock.clickMode();
    expect(clock.getCurrentMode()).toBe('clock');
  });
});
