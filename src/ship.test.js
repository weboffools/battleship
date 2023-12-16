const Ship = require('./ship');

test('Ship takes one hit', () => {
  const ship = new Ship('battleship', 4);
  ship.hit();
  expect(ship.taken_hits).toBe(1);
});

test('Is the ship sunk?', () => {
  const ship = new Ship('battleship', 4);
  ship.taken_hits = 4;
  expect(ship.isSunk()).toBe(1);
});
