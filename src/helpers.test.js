const helpers = require('./helpers');

test('Parse a coordinate string into x and y coords', () => {
  let str = '[0,3]';
  const [x, y] = helpers.parseCoordString(str);
  expect([x, y]).toStrictEqual([0,3]);

});
