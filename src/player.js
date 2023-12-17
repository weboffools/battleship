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
      let x = this.genRandomCoord(10);
      let y = this.genRandomCoord(10);
      let name = ship;
      let direction = ['right', 'down'][this.genRandomNum(2)];
      board.placeShip(x, y, name, direction);
    }
  }

  randomTurn() {
    return;
  }
}

module.exports = Player;
