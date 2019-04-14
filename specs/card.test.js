const Card = require('../card');

describe('Card', () => {

  let card1;

  beforeEach(() => {
    card1 = new Card('Superman', 6, 9, 7);
  });

  test('Should have a name', () => {
    expect(card1.name).toBe('Superman');
  });

  test('Should have a level of intelligence', () => {
    expect(card1.intelligence).toBe(6);
  });

  test('Should have a level of strength', () => {
    expect(card1.strength).toBe(9);
  });

  test('Should have a level of agility', () => {
    expect(card1.agility).toBe(7);
  });

});
