const { add, subtract, multiply, divide } = require('../src/utils');

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

test('multiply function', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, -1)).toBe(1);
  expect(multiply(0, 5)).toBe(0);
});

test('divide function', () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(-6, -3)).toBe(2);
  expect(divide(0, 1)).toBe(0);
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});
