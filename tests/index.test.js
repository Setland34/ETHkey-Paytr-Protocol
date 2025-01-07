const { add, subtract } = require('../src/utils');

test('add function', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
  expect(add(0, 0)).toBe(0);
});

test('subtract function', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(0, 0)).toBe(0);
  expect(subtract(-1, -1)).toBe(0);
});
