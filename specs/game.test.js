const Game = require('../game');
const Card = require('../card');
const Player = require('../player');

describe('Game', () => {

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

  test('Should have two players', () => {
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

  test('Can remove the cards from the deck', () => {
    game.deal();
    expect(game.deck.length).toBe(0);
  });

  test('Can add the cards to player1\'s hand', () => {
    game.deal();
    expect(player1.hand.length).toBe(3);
  });

  test('Can add the cards to player2\'s hand', () => {
    game.deal();
    expect(player2.hand.length).toBe(3);
  });

  test('Can calculate the winner of the turn', () => {
    game.deal();
    player1.selectCategory(3, game);
    expect(player1.hand.length).toBe(4);
  });

  test('Awards win to player making category selection if it\'s a draw', () => {
    player1.hand = [ card2, card3, card6 ];
    player2.hand = [ card4, card1, card5 ];
    player2.selectCategory(1, game);
    expect(player2.hand.length).toBe(4);
  });

  // Extension
  test('Returns the two played cards to bottom of winner\'s hand after round', () => {
    game.deal();
    player1.selectCategory(3, game);
    expect(player1.hand).toEqual([ card3, card5, card2, card1 ]);
  });

  xtest('Awards game win to player who has all the cards', () => {
    // preset winning position and card for player1
    player1.selectCategory(/*arg*/);
    expect(game.awardWin).toBe('Player 1 is the winner');
  });

});
