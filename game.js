class Game {

  constructor(deck, player1, player2) {
    this.deck = deck; // make this private with closure?
    this.player1 = player1;
    this.player2 = player2;
  };

  deal() {
    let player1Cards = this.deck.filter((card, index) => (index % 2 === 0));
    let player2Cards = this.deck.filter((card, index) => (index % 2 !== 0));
    this.pushCardsToPlayers(player1Cards, player2Cards, this.player1, this.player2);
    this.deck = [];
  };

  pushCardsToPlayers(cards1, cards2, player1, player2) {
    player1.hand = cards1;
    player2.hand = cards2;
  }


  // TODO: Clean up messy logic
  calcRoundWinner(inputNum) {
    let selectedProperty = this.findProperty(inputNum);
    if (this.player1.hand[0][selectedProperty] > this.player2.hand[0][selectedProperty]) {
      this.player1.hand.push(this.player2.hand.shift());
    } else if (this.player2.hand[0][selectedProperty] > this.player1.hand[0][selectedProperty]) {
      this.player2.hand.push(this.player1.hand.shift());
    } else if (this.player1.currentPlayer === 'y') {
      this.player1.hand.push(this.player2.hand.shift());
    } else {
      this.player2.hand.push(this.player1.hand.shift());
    };
    this.clearCurrentPlayer();
  };

  findProperty(inputNum) {
    switch (inputNum) {
      case 1: return'intelligence';
      case 2: return 'strength';
      case 3: return 'agility'
    };
  };

  clearCurrentPlayer() {
    this.player1.currentPlayer = '';
    this.player2.currentPlayer = '';
  };

};

module.exports = Game;
