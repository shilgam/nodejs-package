// BEGIN (write your solution here)
export default class State {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(Klass) {
    this.state = new Klass(this);
  }
}
// END
