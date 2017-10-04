// BEGIN (write your solution here)
const make = (name, damage) =>
  (message, health) => {
    switch (message) {
      case 'getName':
        return name;
      case 'damage':
        return damage;
      default:
        return 'undefined method';
    }
  };

export default make;
// END
