const Gameboard = require('./board');
const Player = require('./player');
const DOM = require('./dom');

class Game {
  constructor(dom) {
    this.dom = dom;
  }

  pBoard = document.querySelector('.player-board');
  cBoard = document.querySelector('.comp-board');

  init() {
    const compBoard = new Gameboard('Computer');
    const playerBoard = new Gameboard('Player');
    const player = new Player('player');
    const computer = new Player('computer');

    this.dom.makeBoard(compBoard, this.cBoard);
    this.dom.makeBoard(playerBoard, this.pBoard);

    computer.randomPlace(compBoard);
  }
}

module.exports = Game;
