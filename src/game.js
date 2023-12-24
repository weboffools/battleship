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
    const shipArea = document.querySelector('.ship-area');
    if (shipArea.children.length > 0) {
      this.dom.changeMessage(
        'All your whales have not been placed!',
        'Please place all whales before clicking START.',
      );
    } else {
      let whales = helpers.getWhales();
      if (helpers.checkWhalesOnBoard(whales)) {
        this.dom.changeMessage(
          'Some of your whales are off the board.',
          'Please rearrange your whales!',
        );
      } else if (helpers.checkWhalesNotOverlapping(whales)) {
        this.dom.changeMessage(
          'One or more of your whales are overlapping.',
          'Please rearrange your whales!',
        );
      } else {
        this.dom.changeMessage(
          'The game has now begun!',
          'Click a square on the Computer Board to attack.',
        );
        whales = helpers.getWhales();
        RemoveDraggable();
        click.unWhaleClick();
        helpers.placePlayerWhales(this.playerBoard, whales);
      }
    }
  }

  loop(x, y) {
    let winner = this.checkForWin(this.playerBoard, this.compBoard);
    if (winner) {
      this.dom.changeMessage(`${winner} wins!`, '');
      click.removeGridClicks(this.compBoard);
    } else {
      this.player.takeTurn(this.compBoard, x, y, this.dom);
      this.computer.takeTurn(this.playerBoard, x, y, this.dom);
    }
  }

  checkForWin(pboard, cboard) {
    let p = (pboard.reportAllSunk() === 5) ? 1 : 0; 
    let c = (cboard.reportAllSunk() === 5) ? 1 : 0; 

    if (p === 1) {
      return 'Computer';
    }
    else if (c === 1) {
      return 'Player';
    } else {
      return false;
    }
  }
}

module.exports = Game;
