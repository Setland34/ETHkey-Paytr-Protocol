const { createTransaction, verifyTransaction } = require('../src/paytr');

test('createTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to: '0x456', value: 100 });
  expect(transaction).toHaveProperty('from', '0x123');
  expect(transaction).toHaveProperty('to', '0x456');
  expect(transaction).toHaveProperty('value', 100);
  expect(transaction).toHaveProperty('timestamp');
  expect(transaction).toHaveProperty('hash');
});

test('verifyTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to: '0x456', value: 100 });
  const isValid = verifyTransaction(transaction);
  expect(isValid).toBe(true);
});
