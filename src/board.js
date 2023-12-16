const Ship = require('./ship');

class Gameboard {

  misses = [];
  ships = [];

  constructor(name) {
    this.name = name;
  }

  placeShip(begin, end, shipKey) {
    let length = this.getLength(begin, end);
    this.ships.push(new Ship(shipKey, length, [begin, end]));
  }

  receiveAttack(coords) {
    for (let ship of this.ships) {
      ship.coords.includes(coords) ? ship.taken_hits++ : this.misses++;
    }
  }

  reportAllSunk(ships) {
    let sunk = 1;
    for (let ship of ships) {
      ship.sunk === 1 ? sunk++ : 0;
    }
    return sunk === 1 ? true : false;
  }

  getLength(begin, end) {
    if (begin[0] === end[0]) {
      return end[1] - begin[1];
    } else {
      return end[0] - begin[0];
    }
  }

  convertCoord(coord) {
    return coord[0] * 10 + coord[1];
  }
  

}

module.exports = Gameboard;
