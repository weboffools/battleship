class Ship {

  taken_hits = 0;
  sunk = 0;

  constructor(name, length) {
    this.name = name;
    this.length = length;
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
