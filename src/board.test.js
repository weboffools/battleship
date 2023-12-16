const Gameboard = require('./board');

test('Ship placed at 0,0 -> 0,2', () => {
  const board = new Gameboard('player');
  board.placeShip([0, 0], [0, 2], 'cruiser');
  expect(board.ships[0].coords).toStrictEqual([[0, 0], [0, 2]]);
});

test('Receive an attack on ship at 0,0', () => {
  const board = new Gameboard('player');
  board.placeShip([0, 0], [0, 2], 'cruiser');
  board.receiveAttack([0, 0]);
  expect(board.ships[0].taken_hits).toBe(1);
});

test('All ships sunk?', () => {
  const board = new Gameboard('player');
  board.placeShip([3, 3], [5, 3], 'cruiser');
  board.sunk = 5;
  expect(board.reportAllSunk(board.ships)).toBeTruthy();
});
