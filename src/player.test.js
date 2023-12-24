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

test('Computer randomly places ships', () => {
  const board = new Gameboard('computer');
  const player = new Player('computer');
  player.randomPlace(board);
  let num = 0;
  for (let row of board.board) {
    for (let col of row) {
      if (col instanceof Ship) num++;
    }
  }
  expect(num).toBe(5);
});

test('Computer turn ignores previously guessed square', () => {
  const player = new Player('computer');
  const attempts = [[0, 0], [2, 0], [3, 4]];
  let [x, y] = player.randomTurn(attempts, 2, 0);
  expect([x, y]).not.toStrictEqual([2, 0]);
});

