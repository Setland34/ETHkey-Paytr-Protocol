const { generatePrivateKey, getPublicKey, getAddress } = require('../src/ethkey');
const { createTransaction, verifyTransaction } = require('../src/paytr');

test('generatePrivateKey function', () => {
  const privateKey = generatePrivateKey();
  expect(privateKey).toHaveLength(64);
  expect(typeof privateKey).toBe('string');
});

test('getPublicKey function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  expect(publicKey).toHaveLength(128);
  expect(typeof publicKey).toBe('string');
});

test('getAddress function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  const address = getAddress(publicKey);
  expect(address).toHaveLength(42);
  expect(address.startsWith('0x')).toBe(true);
});

test('createTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to: '0x456', value: 100 });
  expect(transaction).toHaveProperty('from', '0x123');
  expect(transaction).toHaveProperty('to', '0x456');
  expect(transaction).toHaveProperty('value', 100);
  expect(transaction).toHaveProperty('timestamp');
  expect(transaction).toHaveProperty('hash');
});

test('verifyTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to '0x456', value: 100 });
  const isValid = verifyTransaction(transaction);
  expect(isValid).toBe(true);
});
