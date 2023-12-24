const Gameboard = require('./board');
const Player = require('./player');
const helpers = require('./helpers');
const click = require('./click');
const RemoveDraggable = require('./undrag');

class Game {
  constructor(dom) {
    this.dom = dom;
  }

  pBoard = document.querySelector('.player-board');
  cBoard = document.querySelector('.comp-board');
  compBoard = new Gameboard('Computer');
  playerBoard = new Gameboard('Player');
  player = new Player('player');
  computer = new Player('computer');

  init() {
    this.dom.makeBoard(this.compBoard, this.cBoard);
    this.dom.makeBoard(this.playerBoard, this.pBoard);
    this.computer.randomPlace(this.compBoard);
  }

  start() {
    RemoveDraggable();
    click.unWhaleClick();
    helpers.placePlayerWhales(this.playerBoard);
  }

  loop(x, y) {
    let outcome;
    let sunk = '';
    [outcome, sunk] = this.player.takeTurn(this.compBoard, x, y);
    this.dom.appendDot(x, y, outcome, this.compBoard.name);
    if (sunk) {
      this.dom.changeMessage(`You sunk my ${sunk}!`, '');
    }
    [outcome, sunk, x, y] = this.computer.takeTurn(this.playerBoard, x, y);
    this.dom.appendDot(x, y, outcome, this.playerBoard.name);
    if (sunk) {
      this.dom.changeMessage(`I sunk your ${sunk}!`, '');
    }
    let winner = this.checkForWin(this.playerBoard, this.compBoard);
    if (winner) {
      this.dom.changeMessage(`${winner} wins!`, '');
      click.removeGridClicks(this.compBoard);
    }
  }

  checkForWin(pboard, cboard) {
    let p = pboard.reportAllSunk() === 5 ? 1 : 0;
    let c = cboard.reportAllSunk() === 5 ? 1 : 0;

    if (p === 1) {
      return 'Computer';
    } else if (c === 1) {
      return 'Player';
    } else {
      return false;
    }
  }
}

module.exports = Game;
