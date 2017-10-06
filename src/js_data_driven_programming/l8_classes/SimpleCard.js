// BEGIN (write your solution here)
export default class SimpleCard {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  damage(health) {
    return this.points;
  }
}
// END
