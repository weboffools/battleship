const click = require('./click');

class Player {

  attempts = [];

  constructor(name) {
    this.name = name;
  }

  takeTurn(board, x, y, dom) {
    if (board.name === 'Player') {
      board.receiveAttack(x, y, dom);
      this.attempts.push([x, y]);
    } else {
      [x, y] = this.randomTurn(this.attempts, x, y);
      board.receiveAttack(x, y, dom);
      this.attempts.push([x, y]);
      return new Promise((resolve, reject) => {
        click.subseqGridClicks(resolve);
      });
    }

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

  randomTurn(attempted, x, y) {
    for (let attempt of attempted) {
      if (String(attempt) === String([x, y])) {
        return;
      }
    }
    return [x, y];
  }
}

module.exports = Player;
