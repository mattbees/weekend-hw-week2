class Game {

  constructor(deck, player1, player2) {
    this.deck = deck; // make this private with closure?
    this.player1 = player1;
    this.player2 = player2;
  };

  deal() {
    let player1Cards = this.deck.filter((card, index) => (index % 2 === 0));
    this.pushCardsToPlayer(player1Cards, this.player1);
    let player2Cards = this.deck.filter((card, index) => (index % 2 !== 0));
    this.pushCardsToPlayer(player2Cards, this.player2);
    this.deck = [];
  };

  pushCardsToPlayer(cards, player) {
    player.hand = cards;
  }


  calcWinner() {
// TODO: 
  };

};

module.exports = Game;
