class Player {

  constructor() {
    this.hand = [];
  };

  playCard() {
    return this.hand[0];
  };

  selectCategory(inputNum) {
    if ((inputNum>0) && (inputNum<5)) return inputNum-1;
  };

};

module.exports = Player;
