const Gameboard = require('./board');
const Player = require('./player');
const helpers = require('./helpers');

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

  start() {
    try {
      const whales = helpers.getWhales();
      console.log(whales);
      this.dom.changeMessage('Good work! Let the game begin!', '');
    } catch(e) {
      this.dom.changeMessage('', 'WHALES HAVE NOT BEEN PLACED!');
    }
  }
}

module.exports = Game;
