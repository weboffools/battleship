const Ship = require('./ship');

test('Ship takes a hit', () => {
  const ship = new Ship('battleship', 4);
  ship.hit();
  expect(ship.taken_hits).toBe(1);
});

test('This ship should be sunk?', () => {
  const ship = new Ship('battleship', 4);
  ship.taken_hits = 4;
  expect(ship.isSunk()).toBe(1);
});

test('This ship should not be sunk?', () => {
  const ship = new Ship('battleship', 4);
  ship.taken_hits = 3;
  expect(ship.isSunk()).toBe(0);
});
