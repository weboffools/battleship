const Player = require('./player');
const Gameboard = require('./board');
const Ship = require('./ship');

test('Player takes a turn shooting at 0, 0', () => {
  const board = new Gameboard('computer');
  const player = new Player('eliot');
  board.placeShip(0, 0, 'cruiser', 'right');
  player.takeTurn(board, 0, 0);
  expect(board.board[0][0].taken_hits).toBe(1);
});
