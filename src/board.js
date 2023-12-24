const Ship = require('./ship');
const helpers = require('./helpers');

class Gameboard {
  attempts = [];
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
    bluewhale: 5,
    rightwhale: 4,
    spermwhale: 3,
    humpbackwhale: 3,
    orcawhale: 2,
  };

  placeShip(x, y, name, direction) {
    [x, y] = this.checkCoords(x, y);
    let length = this.ships[name];
    let shipInTheWay = this.checkForShip(x, y, length, direction);
    if (shipInTheWay) return 0;
    this.board[x][y] = new Ship(name, length);
    for (let i = 1; i < length; i++) {
      if (direction === 'right') {
        this.board[x][y + i].ship = this.board[x][y];
      } else {
        this.board[x + i][y].ship = this.board[x][y];
      }
    }
    return 1;
  }

  receiveAttack(x, y) {
    [x, y] = this.checkCoords(x, y);
    let sunk;

    if (this.board[x][y] instanceof Ship) {
      let ship = this.board[x][y];
      this.board[x][y].hit();
      if (ship.isSunk()) {
        this.sunk.push(ship);
        sunk = ship.name;
      }
      this.attempts.push([x, y]);
      return ['hit', sunk ];
    } else {
      if (this.board[x][y].ship !== null) {
        let ship = this.board[x][y].ship;
        this.board[x][y].ship.hit();
        if (ship.isSunk()) {
          this.sunk.push(ship);
          sunk = ship.name;
        }
        this.attempts.push([x, y]);
        return ['hit', sunk ];
      } else {
        this.trackMiss(x, y);
        return ['miss', sunk ];
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
    this.attempts.push([x, y]);
  }

  convertCoord(coord) {
    return coord[0] * 10 + coord[1];
  }

  checkCoords(x, y) {
    if (
      x <= this.board.length - 1 &&
      x >= 0 &&
      y <= this.board.length - 1 &&
      y >= 0
    ) {
      return [x, y];
    } else {
      throw new RangeError('x and y must be between 0 and 10');
    }
  }

  checkForShip(x, y, length, direction) {
    let fore = this.board[x][y];
    if (fore instanceof Ship) return fore;
    for (let i = 1; i < length; i++) {
      if (direction === 'right') {
        let increment = y + i;
        try {
          this.checkCoords(x, increment);
        } catch (e) {
          return e;
        }
        let space = this.board[x][increment];
        if (space instanceof Space && space.ship instanceof Ship) {
          return space.ship;
        } else if (space instanceof Ship) {
          return space;
        }
      } else {
        let increment = x + i;
        try {
          this.checkCoords(increment, y);
        } catch (e) {
          return e;
        }
        let space = this.board[increment][y];
        if (space instanceof Space && space.ship instanceof Ship) {
          return space.ship;
        } else if (space instanceof Ship) {
          return space;
        }
      }
    }
    return;
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
