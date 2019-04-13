class Game {

  constructor(deck, player1, player2) {
    this.deck = deck;
    this.player1 = player1;
    this.player2 = player2;
    this._winner;
  };

  get winner() {
    return this._winner;
  };

  set winner(player) {
    // QUESTION: Same problem - how do I do:
    // if (this.[player].hand.length === 6) this._winner = player;
    if (player.hand.length === 6) this._winner = player;
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
    if (this.player1.hand[0][selectedProperty] >
        this.player2.hand[0][selectedProperty]) {
      this.awardPlayer1();
    } else if (this.player2.hand[0][selectedProperty] >
               this.player1.hand[0][selectedProperty]) {
      this.awardPlayer2();
    } else if (this.player1.currentPlayer === 'y') {
      this.awardPlayer1();
    } else {
      this.awardPlayer2();
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

  awardPlayer1() {
    let newHand = this.player1.hand;
    let playedCard = this.player1.hand.shift();
    newHand.push(this.player2.hand.shift());
    newHand.push(playedCard);
    this.player1.hand = newHand;
    this.winner = this.player1;
  };

  // QUESTION: Can I avoid this repetition eg. by feeding args to a generic method?
  awardPlayer2() {
    let newHand = this.player2.hand;
    let playedCard = this.player2.hand.shift();
    newHand.push(this.player1.hand.shift());
    newHand.push(playedCard);
    this.player2.hand = newHand;
    this.winner = this.player2;
  };

  clearCurrentPlayer() {
    this.player1.currentPlayer = '';
    this.player2.currentPlayer = '';
  };

};

module.exports = Game;
