const Ship = require('./ship');

class Gameboard {

  misses = [];
  sunk = [];

  constructor(name) {
    this.name = name;
    this.board = this.buildBoard();
  }

  buildBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      board.push(row);
      for (let j = 0; j < 10; j++) {
        row.push(new Space(i, j));
      }
    }
    return board;
  }

  ships = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };

  placeShip(x, y, name, direction) {
    [x, y] = this.checkCoords(x, y);
    let length = this.ships[name];
    this.board[x][y] = new Ship(name, length);
    for (let i = 1; i < length; i++) {
      if (direction === 'right') {
        if (this.board[x][y + i].ship === null) {
          this.board[x][y + i].ship = this.board[x][y];
        }
      } else {
        if (this.board[x + i][y].ship === null) {
          this.board[x + i][y].ship = this.board[x][y];
        }
      }
    }
  }

  receiveAttack(x, y) {
    [x, y] = this.checkCoords(x, y);

    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
    } else {
      if (this.board[x][y].ship !== null) {
        this.board[x][y].ship.hit();
      } else {
        this.trackMiss(x, y);
      }
    }
  }

  reportAllSunk() {
    let count = 0;
    for (let ship of this.sunk) {
      count++;
    }
    return count;
  }

  getLength(begin, end) {
    if (begin[0] === end[0]) {
      return end[1] - begin[1];
    } else {
      return end[0] - begin[0];
    }
  }

  trackMiss(x, y) {
    this.misses.push([x, y]);
  }

  convertCoord(coord) {
    return coord[0] * 10 + coord[1];
  }

  checkCoords(x, y) {
    if (x <= this.board.length && x >= 0 && y <= this.board.length && y >= 0) {
      return [ x, y ];
    } else {
      throw new RangeError('x and y must be between 0 and 10');
    }
  }
}

class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
  }
}

module.exports = Gameboard;
