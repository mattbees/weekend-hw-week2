class Player {

  constructor() {
    this.hand = [];
  };

  playCard() {
    return this.hand[0];
  };

  selectCategory(inputNum) {
    if ((inputNum>0) && (inputNum<4)) return inputNum;
  };

};

module.exports = Player;
