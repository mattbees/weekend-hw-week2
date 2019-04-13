class Player {

  constructor(name) {
    this.hand = [];
    this._currentPlayer;
  };


  get currentPlayer(){
    return this._currentPlayer;
  };

  set currentPlayer(arg){
    this._currentPlayer = arg;
  }

  playCard() {
    this.currentPlayer = 'y';
    return this.hand[0];
  };

  selectCategory(inputNum, game) {
    if ((inputNum>0) && (inputNum<4)) {
      game.calcRoundWinner(inputNum);
    };
  };

};

module.exports = Player;
