import Enumerable from '../../src/05_collections/l6_immutable';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('select', () => {
    const result = coll.select(car => car.model);

    const expected = ['m5', 'm4', 'sorento', 'rio', 'sportage'];

    expect(result.toArray()).not.toEqual(coll.toArray());
    expect(result.toArray()).toEqual(expected);
  });

  it('orderBy', () => {
    const result = coll
      .orderBy(car => car.year)
      .where(car => car.brand === 'kia');

    const expected = [cars[3], cars[4], cars[2]];

    expect(result.toArray()).not.toEqual(coll.toArray());
    expect(result.toArray()).toEqual(expected);
  });

  it('orderByDesc', () => {
    const result = coll
      .orderBy(car => car.year, 'desc')
      .where(car => car.brand === 'bmw');

    const expected = [cars[0], cars[1]];

    expect(result.toArray()).not.toEqual(coll.toArray());
    expect(result.toArray()).toEqual(expected);
  });
});
