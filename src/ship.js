class Ship {

  taken_hits = 0;
  sunk = 0;

  constructor(name, length, coords) {
    this.name = name;
    this.length = length;
    this.coords = coords;
  }

  hit() {
    this.taken_hits++;
    return;
  }

  isSunk() {
    this.taken_hits === this.length ? this.sunk = 1 : 0;
    return this.sunk;
  }
}

module.exports = Ship;


