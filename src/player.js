class Player {
  attempts = [];

  constructor(name) {
    this.name = name;
  }

  takeTurn(board, x, y) {
    board.receiveAttack(x, y);
  }

  genRandomNum(n) {
    return Math.floor(Math.random() * n);
  }

  randomPlace(board) {
    for (let ship in board.ships) {
      let success = 0;
      let name = ship;
      while (success === 0) {
        let x = this.genRandomNum(10);
        let y = this.genRandomNum(10);
        let direction = ['right', 'down'][this.genRandomNum(2)];
        if (board.placeShip(x, y, name, direction)) success = 1;
      }
    }
  }

  randomTurn() {
    return;
  }
}

module.exports = Player;
