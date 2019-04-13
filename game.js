class Game {

  constructor(deck, player1, player2) {
    this.deck = deck;
    this.player1 = player1;
    this.player2 = player2;
    this._gameWinner;
  };

  get gameWinner() {
    return this._gameWinner;
  };

  set gameWinner(player) {
    if (player.hand.length === 6) this._gameWinner = player;
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
  };

  // TODO: Clean up messy logic
  calcRoundWinner(inputNum) {
    let selectedProperty = this.findProperty(inputNum);
    if (this.player1.hand[0][selectedProperty] >
        this.player2.hand[0][selectedProperty]) {
      this.awardPlayer(this.player1, this.player2);
    } else if (this.player2.hand[0][selectedProperty] >
               this.player1.hand[0][selectedProperty]) {
      this.awardPlayer(this.player2, this.player1);
    } else if (this.player1.currentPlayer === 'y') {
      this.awardPlayer(this.player1, this.player2);
    } else {
      this.awardPlayer(this.player2, this.player1);
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

  awardPlayer(roundWinner, roundLoser) {
    let newHand = roundWinner.hand;
    let playedCard = roundWinner.hand.shift();
    newHand.push(roundLoser.hand.shift());
    newHand.push(playedCard);
    roundWinner.hand = newHand;
    this.gameWinner = roundWinner;
  };

  clearCurrentPlayer() {
    this.player1.currentPlayer = '';
    this.player2.currentPlayer = '';
  };

};

module.exports = Game;
