class Player {

  constructor() {
    this.hand = [];
  };

  playCard() {
    return this.hand[0];
  };

  selectCategory(inputNum, game) {
    if ((inputNum>0) && (inputNum<4)) game.calcRoundWinner(inputNum);
  };

};

module.exports = Player;
