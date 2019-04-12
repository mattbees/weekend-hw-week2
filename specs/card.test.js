const Game = require('../game');
const Card = require('../card');
const Player = require('../player');

describe('Card', () => {

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let deck;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card('Scarlet Witch', 7, 10, 5);
    card3 = new Card('Black Widow', 8, 6, 9);
    card4 = new Card('The Flash', 7, 4, 10);
    card5 = new Card('Wonder Woman', 8, 7, 5);
    card6 = new Card('Batman', 10, 5, 6 );
    deck = [ card1, card2, card3, card4, card5, card6 ];
    player1 = new Player(/*args*/);
    player2 = new Player(/*args*/);
    game = new Game(deck, player1, player2);
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
