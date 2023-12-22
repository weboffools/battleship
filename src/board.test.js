const Gameboard = require('./board');
const Ship = require('./ship');
const dom = require('./dom');

test('Ship placed at 0,0', () => {
  const board = new Gameboard('player');
  let x = 0;
  let y = 0;
  let name = 'spermwhale';
  board.placeShip(x, y, name, 'right');
  expect(board.board[x][y].name).toBe('spermwhale');
});

test('Is this a Ship?' , () => {
  const board = new Gameboard('player');
  let name = 'spermwhale';
  board.placeShip(0, 0, name, 'down');
  expect(board.board[1][0].ship).toBeInstanceOf(Ship);
});

test('These are bad coordinates', () => {
  const board = new Gameboard('player');
  expect(() => board.placeShip(1, 11)).toThrow(RangeError);
});

test('There is a ship in the way!', () => {
  const board = new Gameboard('player');
  board.placeShip(1, 0, 'spermwhale', 'right');
  expect(board.placeShip(0, 1, 'spermwhale', 'down')).toBeFalsy();
});
  
test('Receive an attack on front square of Ship', () => {
  const board = new Gameboard('player');
  board.placeShip(0, 1, 'spermwhale', 'down');
  board.receiveAttack(0, 1, dom);
  expect(board.board[0][1].taken_hits).toBe(1);
});

test('Receive an attack not on front square of Ship', () => {
  const board = new Gameboard('player');
  board.placeShip(0, 1, 'spermwhale', 'down');
  board.receiveAttack(1, 1, dom);
  expect(board.board[1][1].ship.taken_hits).toBe(1);
});

test('Receive an attack on square without a Ship', () => {
  const board = new Gameboard('player');
  board.placeShip(0, 1, 'spermwhale', 'down');
  board.receiveAttack(5, 5, dom);
  expect(board.attempts).toContainEqual([5, 5]);
});

test('All ships sunk?', () => {
  const board = new Gameboard('player');
  board.sunk = [
    new Ship('rightwhale', 4),
    new Ship('bluewhale', 5),
    new Ship('spermwhale', 3),
    new Ship('humpbackwhale', 3),
  ];
  expect(board.reportAllSunk() === 4).toBeTruthy();
});
