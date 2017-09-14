function Rational(num, den) {
  this.x = num;
  this.y = den;
}

export const make = (num, den) => new Rational(num, den);
export const number = rat => rat.x;
export const denom = rat => rat.y;
export const ratToStr = rat => `(${number(rat)}/${denom(rat)})`;

export const add = (rat1, rat2) => {
  const n1 = number(rat1);
  const n2 = number(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return make(((n1 * d2) + (n2 * d1)), d1 * d2);
};

const r1 = make(4, 6);
console.log(ratToStr(r1));
